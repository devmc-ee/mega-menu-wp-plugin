import { FC, useEffect } from "react"
import { useMenuState } from "../hooks/useMenuState";
import { useApiRequest } from "../hooks/useApiRequest";

type Props = {
  children: React.ReactNode;
}

export const ApiServiceProvider: FC<Props> = ({ children }) => {
  const {
    state,
    dispatchers: {
      removeMenuItemForm: closeMenuItemForm,
      removeSubMenuItemForm: closeSubMenuItemForm
    }
  } = useMenuState();
  const { sendRequest } = useApiRequest();

  useEffect(() => {
    const isMenuItemFormSubmitted = state.menuItemForm?.isSubmitted;
    const isSubMenuItemFormSubmitted = state.subMenuItemForm?.isSubmitted;

    if (isMenuItemFormSubmitted || isSubMenuItemFormSubmitted) {
      sendRequest({
        menuItems: state.menuItems,
        subMenuItems: state.subMenuItems,
        localMenu: state.localMenu,
        subMenuItemsColumns: state.subMenuItemsColumns,
      }).then(() => {
        if (!isSubMenuItemFormSubmitted) {
          closeMenuItemForm();
        }
        closeSubMenuItemForm();
      });
    }
  }, [state.menuItemForm?.isSubmitted, state.subMenuItemForm?.isSubmitted]);
  return children;
}