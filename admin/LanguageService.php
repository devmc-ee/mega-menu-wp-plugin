<?php

declare(strict_types=1);

namespace Devmcee\MegaMenu;

class LanguageService implements LanguageServiceInterface
{
  public $languages = [];
  private $sitepress = null; // wpml

  public function __construct()
  { // wpml
    global $sitepress;
    $this->sitepress = $sitepress;

    try {
      if ($this->sitepress !== null) {
        $this->set_active_languages_from_wpml();
      }
    } catch (\Exception $e) {
      // $this->languages = [];
    }

    // TODO: Add support for Polylang
  }
  public function get_active_languages(): array
  {
    return $this->languages;
  }

  public function get_current_language(): string
  {
    $language = '';

    if ($this->sitepress !== null) {
      $language = $this->sitepress->get_current_language();
    }

    return $language;
  }

  public function get_default_language(): string
  {
    $language = '';

    if ($this->sitepress !== null) {
      $language = $this->sitepress->get_default_language();
    }

    return $language;
  }
  private function set_active_languages_from_wpml(): void
  {
    $languages = $this->sitepress->get_active_languages();

    foreach ($languages as $language) {
      $this->languages[] = $language['code'];
    }
  }
}
