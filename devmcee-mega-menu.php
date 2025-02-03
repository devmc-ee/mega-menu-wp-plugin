<?php

declare(strict_types=1);

/*
 * Plugin Name:       Mega Menu
 * Plugin URI:        https://devmc.ee/wp/plugins/devmcee-mega-menu
 * Description:       Creates a responsive mega menu, optimized for both desktop and mobile devices.
 * Version:           0.1.0
 * Requires PHP:      8.2
 * Author:            DevMCee
 * Author URI:        https://devmc.ee/
 * License:           GPL v2 or later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       devmcee-mega-menu
 * Domain Path:       /translations
 *
 */


if (! defined('ABSPATH')) {
  exit; // Exit if accessed directly
}

require_once __DIR__ . '/vendor/autoload.php';

use Devmcee\MegaMenu\LanguageService;
use Devmcee\MegaMenu\MegaMenuPlugin;
use Devmcee\MegaMenu\MenuBuilderService;

$plugin = new MegaMenuPlugin(__FILE__, new LanguageService(), new MenuBuilderService());
