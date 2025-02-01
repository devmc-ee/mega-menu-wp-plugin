import { FC } from "react";
import { useMenuItems } from "../hooks/useMenuItems";
import { Button } from "./buttons/Button";

export const MenuItemsActionBar: FC = () => {
  const {
    addNewMenuItem,
  } = useMenuItems();

  return (
    <div className="devmcee-mega-menu-builder-content-action-bar">
      <Button
        title='Add menu item'
        testId="add-menu-item-button"
        onClick={addNewMenuItem}
      />
      <Button
        title='Import'
        testId="import-menu-items-button"
        onClick={addNewMenuItem}
        disabled={true}
      />
    </div>
  )
}