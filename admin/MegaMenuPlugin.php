<?php

declare(strict_types=1);

namespace Devmcee\MegaMenu;

class MegaMenuPlugin {

	public $post_type     = 'devmcee_mega_menu';
	public $endpoint_base = 'devmcee-mega-menu/v2';
	public $post_meta_key = '_devmcee_mega_menu_data';

	public function __construct(
		protected string $pluginFile,
		private LanguageServiceInterface $languageService,
		private MenuBuilderServiceInterface $menuBuilderService
	) {
		register_activation_hook( $pluginFile, array( $this, 'activate' ) );
		register_deactivation_hook( $pluginFile, array( $this, 'deactivate' ) );

		add_action( 'init', array( $this, 'init' ) );
	}

	public function init() {
		$this->register_mega_menu_post_type();
		// admin
		add_action( 'rest_api_init', array( $this, 'register_rest_routes' ) );

		add_filter( 'manage_devmcee_mega_menu_posts_columns', array( $this, 'add_shortcode_column' ) );
		add_action( 'manage_devmcee_mega_menu_posts_custom_column', array( $this, 'add_shortcode_data' ), 10, 2 );
		add_filter( 'post_row_actions', array( $this, 'remove_quick_edit' ), 10, 2 );

		add_action( 'edit_form_after_title', array( $this, 'add_react_root_element' ) );
		add_action( 'admin_enqueue_scripts', array( $this, 'enqueue_admin_scripts' ) );

		add_action('wp_enqueue_scripts', array($this,'enqueue_frontend_scripts'), 1);

		add_shortcode( $this->post_type, array( $this, 'process_shortcode' ) );
	}

	public function activate() {
		// Register the menu
		// Clear the permalinks after the post type has been registered.
		flush_rewrite_rules();
	}

	public function deactivate() {
		// Clear the permalinks to remove our post type's rules from the database.
		flush_rewrite_rules();
	}

	function remove_quick_edit( $actions, $post ) {
		if ( $post->post_type === $this->post_type ) {
			unset( $actions['inline hide-if-no-js'] );
		}

		return $actions;
	}
	public function enqueue_frontend_scripts()
	{
		wp_enqueue_script(
			'devmcee-mega-menu-shortcode-script',
			plugin_dir_url($this->pluginFile) . 'public/devmcee-front-menu.js',
			array(), // Ensures React is loaded
			filemtime(plugin_dir_path($this->pluginFile) . 'public/devmcee-front-menu.js'),
			true
		);

		wp_enqueue_style(
			'devmcee-mega-menu-shortcode-style',
			plugin_dir_url( $this->pluginFile ) . 'public/devmcee-front-menu.css',
			array(),
			filemtime( plugin_dir_path( $this->pluginFile ) . 'public/devmcee-front-menu.css' ),
		);
	}

	public function enqueue_admin_scripts() {
		wp_register_script(
			'devmcee-mm-admin-ui-script',
			plugin_dir_url( $this->pluginFile ) . 'build/index.js',
			array( 'wp-element' ), // Ensures React is loaded
			filemtime( plugin_dir_path( $this->pluginFile ) . 'build/index.js' ),
			true
		);

		$postID = get_the_ID();
		$data   = get_post_meta( $postID, $this->post_meta_key, true );

		if ( empty( $data ) ) {
			$data = $this->get_mega_menu_init_data();
			update_post_meta( $postID, $this->post_meta_key, $data );
		}

		wp_localize_script(
			'devmcee-mm-admin-ui-script',
			'devmceeMegaMenuInitData',
			array(
				'languages'       => $this->languageService->get_active_languages(),
				'defaultLanguage' => $this->languageService->get_default_language(),
				'data'            => $data,
				'endpoints'       => array(
					'save' => esc_url_raw( rest_url( $this->endpoint_base . '/save' ) ),
				),
				'customNonce'     => wp_create_nonce( 'wp_rest' ),
				'postID'          => $postID,
			)
		);

		wp_enqueue_script( 'devmcee-mm-admin-ui-script' );
	}

	function register_rest_routes() {
		register_rest_route(
			$this->endpoint_base,
			'/save',
			array(
				'methods'             => \WP_REST_Server::CREATABLE,
				'callback'            => array( $this, 'save_menu' ),
				'permission_callback' => function () {
					return current_user_can( 'edit_posts' );
				},
			)
		);
	}

	function save_menu( \WP_REST_Request $request ) {
		$body    = $request->get_json_params();
		$post_id = $body['postID'];

		if ( empty( $post_id ) ) {
			return rest_ensure_response( 'Invalid post id' );
		}

		$data      = $body['data'];
		$post_type = get_post_type( $post_id );

		if ( $post_type !== $this->post_type ) {
			return rest_ensure_response( 'Invalid post type' );
		}

		$result = update_post_meta( $post_id, $this->post_meta_key, $data );

		if ( $result ) {
			return rest_ensure_response( array( 'message' => 'success' ) );
		}

		return new \WP_REST_Response(
			array(
				'status'        => 422,
				'response'      => 'error',
				'body_response' => 'Failed to save data',
			)
		);
	}

	function register_mega_menu_post_type() {
		$labels = array(
			'name'               => 'Mega Menus',
			'singular_name'      => 'Mega Menu',
			'menu_name'          => 'Mega Menus',
			'name_admin_bar'     => 'Mega Menu',
			'add_new'            => 'Add New',
			'add_new_item'       => 'Add New Menu',
			'new_item'           => 'New Mega Menu',
			'edit_item'          => 'Edit Mega Menu',
			'view_item'          => '',
			'all_items'          => 'All Mega Menus',
			'search_items'       => 'Search Mega Menus',
			'not_found'          => 'No menu found.',
			'not_found_in_trash' => 'No menu found in Trash.',
		);

		$args = array(
			'labels'       => $labels,
			'public'       => true,
			'has_archive'  => false,
			'show_in_rest' => false, // Enable Gutenberg editor
			'supports'     => array( 'title' ),
			'rewrite'      => array( 'slug' => 'devmcee-mega-menu' ),
			'menu_icon'    => 'dashicons-list-view',
		);

		register_post_type( $this->post_type, $args );
	}

	function add_shortcode_column( $columns ) {
		unset( $columns['date'] );
		$columns['shortcode'] = 'Shortcode';
		return $columns;
	}

	function add_shortcode_data( $column, $post_id ) {
		switch ( $column ) {
			case 'shortcode':
				$shortcode = sprintf( '[%s id="%s"]', $this->post_type, $post_id );
				echo esc_html( $shortcode );
				break;
		}
	}

	function add_react_root_element() {
		global $post;
		if ( $this->post_type === $post->post_type ) {
			echo '<div id="devmcee-mega-menu-root"></div>';
		}
	}

	function process_shortcode( $atts ) {
		static $instance = 0;
		$instance++;

		$atts = shortcode_atts(
			array(
				'id' => '',
			),
			$atts,
			$this->post_type
		);

		$args = array(
			'post_type'      => $this->post_type,
			'posts_per_page' => -1,  // Display all
		);

		if ( $atts['id'] ) {
			$args['p'] = $atts['id'];
		}

		$query = new \WP_Query( $args );

		if ( $query->have_posts() ) {
			$output = sprintf('<div class="devmcee-mega-menu-container" data-instance="%d">', $instance);

			while ( $query->have_posts() ) {
				$query->the_post();
				$dbData = get_post_meta( get_the_ID(), $this->post_meta_key, true );

				try {
					MenuDataValidator::validate( $dbData );
				} catch ( \Exception $e ) {
					$output = 'Error: ' . $e->getMessage();
					break;
				}

				try {
					$output .= $this->menuBuilderService->getMenuHtml(
						new MenuDTO( $dbData ),
						$this->languageService->get_current_language(),
						$this->languageService->get_default_language()
					);
				} catch ( \Exception $e ) {
					$output = 'Error: ' . $e->getMessage();
					break;
				}
			}

			wp_reset_postdata();

			$output .= '</div>';
		} else {
			$output = 'No feature lists found.';
		}

		return $output;
	}

	private function get_mega_menu_init_data() {
		$languages = $this->languageService->get_active_languages();
		$localMenu = array();

		foreach ( $languages as $language ) {
			$localMenu[ $language ] = array();
		}

		if ( empty( $localMenu ) ) {
			$localMenu['en'] = array();
		}

		return array(
			'localMenu'           => $localMenu,
			'menuItems'           => new \stdClass(),
			'subMenuItems'        => new \stdClass(),
			'subMenuItemsColumns' => new \stdClass(),
		);
	}
}
