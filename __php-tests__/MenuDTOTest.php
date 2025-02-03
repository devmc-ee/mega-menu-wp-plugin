<?php

declare(strict_types=1);

namespace Devmcee\MegaMenu;

use PHPUnit\Framework\TestCase;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\UsesClass;
use PHPUnit\Framework\Attributes\Test;

#[CoversClass(MenuDTO::class)]
#[CoversClass(SubMenuItemDTO::class)]
#[UsesClass(MenuItemDTO::class)]
class MenuDTOTest extends TestCase
{
  private MenuDTO $menuDto;

  protected function setUp(): void
  {
    $this->menuDto = new MenuDTO($this->getMenuData());
  }

  #[Test]
  public function testMenuItems()
  {
    $this->assertIsArray($this->menuDto->menuItems());
    /** @var MenuItemDTO $menuItem */
    $menuItem = $this->menuDto->menuItems()['f60f7e84-bf6b-49bb-af52-1e6fd3c1c553'];
    $this->assertInstanceOf(MenuItemDTO::class, $menuItem);
    $this->assertEquals('Home', $menuItem->title());
    $this->assertEquals('28b0c99c-8a84-49d1-9a6f-dcd540bd9214', $menuItem->subMenuItemsColumnsUuid());
  }

  #[Test]
  public function testSubMenuItems()
  {
    $this->assertIsArray($this->menuDto->subMenuItems());
    /** @var SubMenuItemDTO $subMenuItem */
    $subMenuItem = $this->menuDto->subMenuItems()['10ec7a7b-b85d-4fe7-90d8-fa1ac00a7cde'];
    $this->assertInstanceOf(SubMenuItemDTO::class, $subMenuItem);

    $this->assertEquals('Commercial', $subMenuItem->title(), 'Invalid title');
    $this->assertEquals('commerce', $subMenuItem->description(), 'Invalid description');
    $this->assertEquals('b2ecbe9b-e903-4fe3-b19c-d48e025d13a0',  $subMenuItem->subMenuItemsColumnsUuid(), 'invalid sumItemsSet uuid');
  }

  private function getMenuData(): array
  {
    return [
      'menuItems' => [
        "f60f7e84-bf6b-49bb-af52-1e6fd3c1c553" => [
          "languageCode" => "en",
          "title" => "Home",
          "url" => "/home",
          "subMenuItemsColumnsUuid" => "28b0c99c-8a84-49d1-9a6f-dcd540bd9214",
          "uuid" => "f60f7e84-bf6b-49bb-af52-1e6fd3c1c553"
        ],
        "958a93d0-afcc-4be2-bc9a-5a7261151069" => [
          "languageCode" => "en",
          "title" => "Property Type",
          "url" => "/property-type",
          "subMenuItemsColumnsUuid" => "b2ecbe9b-e903-4fe3-b19c-d48e025d13a0",
          "uuid" => "958a93d0-afcc-4be2-bc9a-5a7261151069"
        ],
      ],
      'localMenu' => [
        'en' => [
          "f60f7e84-bf6b-49bb-af52-1e6fd3c1c553",
          "958a93d0-afcc-4be2-bc9a-5a7261151069"
        ]
      ],
      'subMenuItems' => [
        "10ec7a7b-b85d-4fe7-90d8-fa1ac00a7cde" => [
          "url" => "/property/commercial",
          "description" => "commerce",
          "title" => "Commercial",
          "columnIndex" => 0,
          "subMenuItemsColumnsUuid" => "b2ecbe9b-e903-4fe3-b19c-d48e025d13a0",
          "uuid" => "10ec7a7b-b85d-4fe7-90d8-fa1ac00a7cde"
        ],
        "a8c001ec-4384-40c0-98c1-24976d3fd215" => [
          "url" => "/property/residential",
          "description" => "Property",
          "title" => "Residential",
          "columnIndex" => 1,
          "subMenuItemsColumnsUuid" => "b2ecbe9b-e903-4fe3-b19c-d48e025d13a0",
          "uuid" => "a8c001ec-4384-40c0-98c1-24976d3fd215"
        ],
      ],
      'subMenuItemsColumns' => [
        "b2ecbe9b-e903-4fe3-b19c-d48e025d13a0" => [
          [
            "f737c4e3-343f-494e-90a3-35207817cef9",
            "10ec7a7b-b85d-4fe7-90d8-fa1ac00a7cde",
            "57e41e46-7ccc-4a79-bc3a-0e65cdf695d6"
          ],
          [
            "a8c001ec-4384-40c0-98c1-24976d3fd215",
            "0a17d28b-c453-4071-9dc7-2110651677d4",
            "b778a50b-3a26-413d-890c-acdccd3d9e64"
          ],
          [
            "f59e3e56-fe90-4e75-9db1-e37008ab00ce",
            "be0bc3c2-086d-46a1-afc8-887cbe36081d",
            "681476a0-21be-4787-8b12-8446772cdc2a"
          ]
        ]
      ]
    ];
  }
}
