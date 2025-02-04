<?php

declare(strict_types=1);

namespace Devmcee\MegaMenu;

class MenuBuilderService implements MenuBuilderServiceInterface {

	private array $localMenu = array();
	/** @property MenuItemDTO[] $menuItems */
	private array $menuItems = array();
	/** @property SubMenuItemDTO[] $menuSubItems */
	private array $menuSubItems        = array();
	private array $subMenuItemsColumns = array();

	public function getMenuHtml(
		MenuDTO $menuData,
		string $currentLanguageCode,
		string $defaultLanguageCode
	): string {

		$this->prepareData( $menuData, $currentLanguageCode, $defaultLanguageCode );
		$html = $this->prepareHtml();

		return $html;
	}

	private function prepareData( $menuData, $currentLanguageCode, $defaultLanguageCode ): void {
		$this->localMenu = $this->getLocaMenu( $menuData, $currentLanguageCode, $defaultLanguageCode );

		foreach ( $this->localMenu as $menuItemUuid ) {
			/** @var MenuItemDTO $menuItem */
			$menuItem          = $menuData->menuItems()[ $menuItemUuid ];
			$this->menuItems[$menuItemUuid] = $menuItem;
		}
		$this->subMenuItemsColumns = $menuData->subMenuItemsColumns();
		$this->menuSubItems        = $menuData->subMenuItems();
	}

	/**
	 * @param array $localMenu
	 * @param
	 * @param
	 * @param array $menuSubItemsColumns
	 */
	private function prepareHtml(): string {
		$mainContainer = '
    <nav class="devmcee-mega-menu__container" role="menubar">
        %s
    </nav>';
		$localMenuHtml = $this->getLocaMenuHtml();

		return sprintf( $mainContainer, $localMenuHtml );
	}

	private function getLocaMenuHtml() {
		$container = '<ul class="devmcee-mega-menu">%s</ul>';

		$menuItemContainer = '
      <li class="devmcee-mega-menu__item %s">
        <a class="devmcee-mega-menu__item-link" href="%s" title="">
          %s
        </a>
      </li>
      ';

		$menuItemsHtml = '';

		foreach ( $this->menuItems as $menuItem ) {
			if ( ! $this->hasSubMenuItems( $menuItem ) ) {
				$menuItemsHtml .= sprintf(
					$menuItemContainer,
					$menuItem->classes(),
					$menuItem->url(),
					$menuItem->title(),
				);
			} else {

				$menuItemsHtml .= $this->getMenuItemWithSubMenuesHtml( $menuItem );
			}
		}
		return sprintf( $container, $menuItemsHtml );
	}

	private function hasSubMenuItems( MenuItemDTO $menuItem ): bool {
		$subMenuItemsColumnsUuid = $menuItem->subMenuItemsColumnsUuid();
		if ( empty( $subMenuItemsColumnsUuid ) ) {
			return false;
		}

		$columnsSet = $this->subMenuItemsColumns[ $subMenuItemsColumnsUuid ];

		foreach ( $columnsSet as $column ) {
			if ( ! empty( $column ) ) {
				return true;
			}
		}
		return false;
	}
	private function getMenuItemWithSubMenuesHtml( MenuItemDTO $menuItem ) {
		$container = '
      <li class="devmcee-mega-menu__item devmcee-mega-menu__item-with-sub-menu">
         <details class="devmcee-mega-menu__sub-menu-details">
          <summary class="devmcee-mega-menu__sub-menu-summary">%s
            <svg class="devmcee-mega-menu__sub-menu-summary-icon devmcee-mega-menu__sub-menu-summary-icon--arrow-down"
              width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.9727 19L12.9727 5" stroke="black" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M19.9727 12L12.9727 5L5.97266 12" stroke="black" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
            <svg class="devmcee-mega-menu__sub-menu-summary-icon devmcee-mega-menu__sub-menu-summary-icon--arrow-up"
              width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12.0039 5L12.0039 19" stroke="black" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
              <path d="M19.0039 12L12.0039 19L5.00391 12" stroke="black" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </summary>
          %s
        </details>
      </li>
    ';

		$subMenuItems = $this->getSubMenuItemsHtml( $menuItem );

		return sprintf( $container, $menuItem->title(), $subMenuItems );
	}

	private function getSubMenuItemsHtml( MenuItemDTO $menuItem ) {
		$container = '
       <div class="devmcee-mega-menu__sub-menu-container">
        <div class="devmcee-mega-menu__sub-menu-container--inner">
          %s
        </div>
      </div>
    ';

		$subMenuItemColumns = $this->subMenuItemsColumns[ $menuItem->subMenuItemsColumnsUuid() ];

		$subMenuItemAllColumnsHtml = '';
		foreach ( $subMenuItemColumns as $subMenuItemColumn ) {
			$subMenuItemColumnsHtml = '
        <ul class="devmcee-mega-menu__sub-menu-column">
          %s
        </ul>
      ';
			$subMenuItemsHtml       = '';
			foreach ( $subMenuItemColumn as $subMenuItemUuid ) {
				/** @var SubMenuItemDTO $subMenuItem */
				$subMenuItem          = $this->menuSubItems[ $subMenuItemUuid ];
				$subMenuItemContainer = ' 
          <li class="devmcee-mega-menu__sub-menu-item-container %s">
            <a href="%s" class="devmcee-mega-menu__sub-menu-item">
              <span class="devmcee-mega-menu__sub-menu-item-title">%s</span>
              <span class="devmcee-mega-menu__sub-menu-item-description">%s</span>
            </a>
          </li>';

				$subMenuItemsHtml .= sprintf(
					$subMenuItemContainer,
					$subMenuItem->classes(),
					$subMenuItem->url(),
					$subMenuItem->title(),
					$subMenuItem->description(),
				);
			}

			$subMenuItemAllColumnsHtml .= sprintf( $subMenuItemColumnsHtml, $subMenuItemsHtml );
		}

		return sprintf( $container, $subMenuItemAllColumnsHtml );
	}

	private function getLocaMenu(
		MenuDTO $menuData,
		string $currentLanguageCode,
		string $defaultLanguageCode
	): array {
		$languageCode = array_key_exists( $currentLanguageCode, $menuData->localMenu() )
		? $currentLanguageCode
		: $defaultLanguageCode;

		$localMenu = $menuData->localMenu()[ $languageCode ];

		if ( empty( $localMenu ) ) {
			$localMenu = $menuData->localMenu()[ $defaultLanguageCode ];
		}

		return $localMenu;
	}
}
