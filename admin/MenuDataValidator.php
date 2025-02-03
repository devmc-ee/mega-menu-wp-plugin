<?php

declare(strict_types=1);

namespace Devmcee\MegaMenu;

use InvalidArgumentException;

class MenuDataValidator {

	public static function validate( array $menuData ) {
		if ( empty( $menuData ) ) {
			throw new InvalidArgumentException( 'Empty data' );
		}

		if (
		! array_key_exists( 'menuItems', $menuData ) ||
		! array_key_exists( 'localMenu', $menuData ) ||
		! array_key_exists( 'subMenuItems', $menuData ) ||
		! array_key_exists( 'subMenuItemsColumns', $menuData )
		) {
			throw new InvalidArgumentException( 'Missing required keys' );
		}

		if (
		$menuData['menuItems'] === null
		|| ! is_array( $menuData['menuItems'] )
		|| $menuData['localMenu'] === null
		|| ! is_array( $menuData['localMenu'] )
		|| $menuData['subMenuItems'] === null
		|| ! is_array( $menuData['subMenuItems'] )
		|| $menuData['subMenuItems'] === null
		|| ! is_array( $menuData['subMenuItems'] )
		) {
			throw new InvalidArgumentException( 'Invalid data' );
		}
		return true;
	}
}
