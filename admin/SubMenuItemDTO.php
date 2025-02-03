<?php

declare(strict_types=1);

namespace Devmcee\MegaMenu;

class SubMenuItemDTO {

	private readonly string $uuid;
	private readonly string $title;
	private readonly string $description;
	private readonly int $columnIndex;
	private readonly string $url;
	private readonly string $classes;
	private readonly string $subMenuItemsColumnsUuid;

	public function __construct( array $menuItem ) {
		$keys = get_class_vars( self::class );

		foreach ( $keys as $key => $value ) {
			$defaultValue = '';

			if ( $key === 'columnIndex' ) {
				$defaultValue = 0;
			}

			$this->$key = ! $this->isValid( $menuItem, $key ) ? $defaultValue : $menuItem[ $key ];
		}
	}
	public function uid(): string {
		return $this->uuid;
	}

	public function title(): string {
		return $this->title;
	}

	public function url(): string {
		return $this->url;
	}

	public function classes(): ?string {
		return $this->classes;
	}

	public function subMenuItemsColumnsUuid(): string {
		return $this->subMenuItemsColumnsUuid;
	}

	public function description(): string {
		return $this->description;
	}

	public function columnIndex(): int {
		return $this->columnIndex;
	}

	private function isValid( array $data, string $key ): bool {
		return array_key_exists( $key, $data ) && ! empty( $data[ $key ] );
	}
}
