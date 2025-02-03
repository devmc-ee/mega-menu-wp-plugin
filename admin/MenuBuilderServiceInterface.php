<?php
declare(strict_types=1);

namespace Devmcee\MegaMenu;

interface MenuBuilderServiceInterface {
	public function getMenuHtml(
		MenuDTO $menuData,
		string $currentLanguageCode,
		string $defaultLanguageCode,
	): string;
}
