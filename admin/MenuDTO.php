<?php

declare(strict_types=1);

namespace Devmcee\MegaMenu;

class MenuDTO {

	/** @property array[string[]] $localMenu */
	private array $localMenu;
	private array $menuItems;
	private array $subMenuItems;
	private array $subMenuItemsColumns;

	public function __construct(
		public array $menu_data
	) {
		$this->localMenu = $menu_data['localMenu'];
		$this->setMenuItems( $menu_data['menuItems'] );
		$this->setSubMenuItems( $menu_data['subMenuItems'] );
		$this->subMenuItemsColumns = $menu_data['subMenuItemsColumns'];
	}

	public function localMenu(): array {
		return $this->localMenu;
	}

	/** @property MenuItemDTO[]  */
	public function menuItems(): array {
		return $this->menuItems;
	}
	public function subMenuItems(): array {
		return $this->subMenuItems;
	}
	public function subMenuItemsColumns(): array {
		return $this->subMenuItemsColumns;
	}

	private function setMenuItems( array $menuItemsData ): void {
		foreach ( $menuItemsData as $menuItemUuid => $menuItem ) {
			$this->menuItems[ $menuItemUuid ] = new MenuItemDTO( $menuItem );
		}
	}

	private function setSubMenuItems( array $subMenuItemsData ): void {
		foreach ( $subMenuItemsData as $subMenuItemUuid => $subMenuItem ) {
			$this->subMenuItems[ $subMenuItemUuid ] = new SubMenuItemDTO( $subMenuItem );
		}
	}
}
