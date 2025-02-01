import { useMemo } from "react";
import { SubMenuItemsList } from "../app.types";
import { useMenuState } from "./useMenuState";

type Props = {
  subItemUuidList: SubMenuItemsList;
};

export const useSubMenuItemColumn = ({ subItemUuidList }: Props) => {
  const {
    state: { subMenuItems: allSubMenuItems, subMenuItemForm },
    dispatchers: { initSubMenuItemForm, initSubMenuItemFormForEditing },
  } = useMenuState();

  const subMenuItems = useMemo(
    () => subItemUuidList.map((uuid) => allSubMenuItems[uuid]),
    [allSubMenuItems, subItemUuidList]
  );

  return {
    subMenuItems,
    subMenuItemForm,
    initSubMenuItemForm,
    initSubMenuItemFormForEditing,
  };
}