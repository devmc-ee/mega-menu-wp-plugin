import { FC } from "react";
import { useMenuItems } from "../hooks/useMenuItems";
import { MenuItem } from "./MenuItem";
import { MenuItemForm } from "./forms/MenuItemForm";

export const MenuItemsContainer: FC = () => {
  const {
    menuItemUuidList,
    menuItems,
    isNewMenuItemForm: isNewMenuItemForm,
    activeFormUuid,
    getSubMenuItemsAmount,
    setActiveFormUuid,
  } = useMenuItems();

  return (
    <div className="devmcee-mega-menu-builder-content-menu-container">
      {menuItemUuidList
        .map((uuid) => {
          return (!activeFormUuid || activeFormUuid !== uuid) ? (
            <MenuItem
              key={uuid}
              activeFormUuid={activeFormUuid}
              setActiveFormUuid={setActiveFormUuid}
              {...menuItems[uuid]}
              subMenuItemsAmount={getSubMenuItemsAmount(uuid)}
            />
          ) : (
            <div className="devmcee-mega-menu-builder-menu-item">
              <MenuItemForm subMenuItemsAmount={getSubMenuItemsAmount(uuid)} />
            </div>);
        })}
      {(isNewMenuItemForm) && (
        <div className="devmcee-mega-menu-builder-menu-item">
          <MenuItemForm />
        </div>
      )}
    </div>
  );
}