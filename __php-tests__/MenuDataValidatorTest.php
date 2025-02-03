<?php

declare(strict_types=1);

namespace Devmcee\MegaMenu;

use PHPUnit\Framework\TestCase;
use InvalidArgumentException;
use PHPUnit\Framework\Attributes\CoversClass;
use PHPUnit\Framework\Attributes\Test;

#[CoversClass(MenuDataValidator::class)]
class MenuDataValidatorTest extends TestCase
{
  #[Test]
  public function testEmptyData()
  {
    $this->expectException(InvalidArgumentException::class);
    MenuDataValidator::validate([]);
  }
  #[Test]
  public function testInvalidKeys()
  {
    // missing keys
    $this->expectException(InvalidArgumentException::class);
    MenuDataValidator::validate([
      'menuItems' => [],
    ]);

    // invalid keys
    $this->expectException(InvalidArgumentException::class);
    MenuDataValidator::validate([
      'menuItems2' => [],
      'localMenu' => [],
      'subMenuItems2' => [],
      'subMenuItemsColumns' => []
    ]);

    // invalid values
    $this->expectException(InvalidArgumentException::class);
    MenuDataValidator::validate([
      'menuItems' => null,
      'localMenu' => [],
      'subMenuItems' => [],
      'subMenuItemsColumns' => []
    ]);
    $this->expectException(InvalidArgumentException::class);
    MenuDataValidator::validate([
      'menuItems' => '',
      'localMenu' => [],
      'subMenuItems' => [],
      'subMenuItemsColumns' => []
    ]);

    $this->expectException(InvalidArgumentException::class);
    MenuDataValidator::validate([
      'menuItems' => true,
      'localMenu' => [],
      'subMenuItems' => [],
      'subMenuItemsColumns' => []
    ]);
  }
}
