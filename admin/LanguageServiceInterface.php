<?php
declare(strict_types=1);

namespace Devmcee\MegaMenu;

interface LanguageServiceInterface {
	public function get_active_languages(): array;
	public function get_current_language(): string;
	public function get_default_language(): string;
}
