<?php

declare(strict_types=1);

namespace Devmcee\MegaMenu;

class MegaMenuPlugin
{
  public $post_type = 'devmcee_mega_menu';

  public function __construct(protected string $pluginFile, private LanguageServiceInterface $languageService)
  {
    register_activation_hook($pluginFile, array($this, 'activate'));
    register_deactivation_hook($pluginFile, array($this, 'deactivate'));

    add_action('init', array($this, 'init'));
  }

  public function init()
  {
    // Register the menu
    $this->register_mega_menu_post_type();
    // admin
    add_filter('manage_devmcee_mega_menu_posts_columns', array($this, 'add_shortcode_column'));
    add_action('manage_devmcee_mega_menu_posts_custom_column', array($this, 'add_shortcode_data'), 10, 2);
    add_filter('post_row_actions', array($this, 'remove_quick_edit'), 10, 2);

    add_action('edit_form_after_title',  array($this, 'add_react_root_element'));
    add_action('admin_enqueue_scripts', array($this, 'enqueue_admin_scripts'));
    add_shortcode($this->post_type, array($this, 'process_shortcode'));
  }

  public function activate()
  {
    // Trigger our function that registers the custom post type plugin.
    // Clear the permalinks after the post type has been registered.
    flush_rewrite_rules();
  }

  public function deactivate()
  {
    // Clear the permalinks to remove our post type's rules from the database.
    flush_rewrite_rules();
  }

  function remove_quick_edit($actions, $post)
  {
    if ($post->post_type === $this->post_type) {
      unset($actions['inline hide-if-no-js']);
    }

    return $actions;
  }

  public function enqueue_admin_scripts()
  {
    wp_register_script(
      'devmcee-mm-admin-ui-script',
      plugin_dir_url($this->pluginFile) . 'build/index.js',
      ['wp-element'], // Ensures React is loaded
      filemtime(plugin_dir_path($this->pluginFile) . 'build/index.js'),
      true
    );

    wp_localize_script('devmcee-mm-admin-ui-script', 'devmceeMegaMenuInitData', [
      'languages' => $this->languageService->get_active_languages(),
      'defaultLanguage' => $this->languageService->get_default_language(),
      'data' => array('menuItemsListToLocaleMap' => []),
    ]);
    
    wp_enqueue_script('devmcee-mm-admin-ui-script');
  }

  function register_mega_menu_post_type()
  {
    $labels = array(
      'name'               => 'Mega Menus',
      'singular_name'      => 'Mega Menu',
      'menu_name'          => 'Mega Menus',
      'name_admin_bar'     => 'Mega Menu',
      'add_new'            => 'Add New',
      'add_new_item'       => 'Add New Menu',
      'new_item'           => 'New Mega Menu',
      'edit_item'          => 'Edit Mega Menu',
      'view_item'          => 'View Mega Menu',
      'all_items'          => 'All Mega Menus',
      'search_items'       => 'Search Mega Menus',
      'not_found'          => 'No menu found.',
      'not_found_in_trash' => 'No menu found in Trash.',
    );

    $args = array(
      'labels'             => $labels,
      'public'             => true,
      'has_archive'        => false,
      'show_in_rest'       => false, // Enable Gutenberg editor
      'supports'           => array('title',),
      'rewrite'            => array('slug' => 'devmcee-mega-menu'),
      'menu_icon'          => 'dashicons-list-view'
    );

    register_post_type($this->post_type, $args);
  }

  function add_shortcode_column($columns)
  {
    unset($columns['date']);
    $columns['shortcode'] = 'Shortcode';
    return $columns;
  }

  function add_shortcode_data($column, $post_id)
  {
    switch ($column) {
      case 'shortcode':
        $shortcode = sprintf('[%s id="%s"]', $this->post_type, $post_id);
        echo esc_html($shortcode);
        break;
    }
  }

  function add_react_root_element()
  {
    global $post;
    if ($this->post_type === $post->post_type) {
      echo '<div id="devmcee-mega-menu-root"></div>';
    }
  }

  function process_shortcode($atts)
  {
    $atts = shortcode_atts(
      array(
        'id' => '',  // Specific feature list ID
      ),
      $atts,
      $this->post_type
    );

    // Query feature lists (if 'id' is provided, fetch that specific list)
    $args = array(
      'post_type'      => $this->post_type,
      'posts_per_page' => -1,  // Display all
    );

    if ($atts['id']) {
      $args['p'] = $atts['id'];  // Query by specific feature list ID
    }

    $query = new \WP_Query($args);


    // Check if there are feature lists
    if ($query->have_posts()) {
      $output = '<div class="devmcee-mega-menu-container">';

      while ($query->have_posts()) {
        $query->the_post();

        $output .= $this->languageService->get_current_language();
      }

      wp_reset_postdata();
      $output .= '</div>';
    } else {
      $output = 'No feature lists found.';
    }

    return $output;
  }
}
