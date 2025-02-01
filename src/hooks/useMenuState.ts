import { useContext } from "react"
import { MenuDispatchContext, MenuStateContext } from "../providers/MenuDataContextProvider";
import { MenuItemForm, MenuStateActionType, SubMenuItemForm } from "../reducers/menuState.types";
import { LanguageCode, MenuItem, SubMenuItem, SubMenuItemsColumns, UUID, ValueOf } from "../app.types";

export const useMenuState = () => {
  const state = useContext(MenuStateContext);
  const dispatch = useContext(MenuDispatchContext);

  const initMenuItemForm = (languageCode: LanguageCode) => {
    dispatch({
      type: MenuStateActionType.MENU_ITEM_FORM_INITED,
      payload: { languageCode }
    })
  };

  const initMenuItemFormForEditing = (languageCode: LanguageCode, uuid: MenuItem['uuid']) => {
    dispatch({
      type: MenuStateActionType.MENU_ITEM_FORM_INITED_FOR_EDITING,
      payload: { languageCode, uuid }
    })
  };

  const removeMenuItemForm = () => dispatch({ type: MenuStateActionType.MENU_ITEM_FORM_REMOVED });

  const addMenuItemUuidToLocalMenu = (uuid: UUID, locale: LanguageCode) => {
    dispatch({
      type: MenuStateActionType.MENU_ITEM_UUID_ADDED_TO_LOCAL_MENU,
      payload: { uuid, languageCode: locale }
    })
  }

  const deleteMenuItemUuidFromLocalMenu = (uuid: UUID, locale: LanguageCode) => {
    dispatch({
      type: MenuStateActionType.MENU_ITEM_UUID_DELETED_FROM_LOCAL_MENU,
      payload: { uuid, languageCode: locale }
    })
  }

  const changeMenuItemFieldValue = (fieldName: keyof MenuItemForm, value: ValueOf<MenuItemForm>) => {
    dispatch({
      type: MenuStateActionType.MENU_ITEM_FORM_FIELD_CHANGED,
      payload: { fieldName, value }
    })
  }

  const saveMenuItem = () => {
    dispatch({ type: MenuStateActionType.MENU_ITEM_SAVED });
  }

  const removeMenuItem = () => {
    dispatch({ type: MenuStateActionType.MENU_ITEM_REMOVED });
  }

  const initSubMenuItemColumns = (uuid: keyof SubMenuItemsColumns) => { 
    dispatch({
      type: MenuStateActionType.SUB_MENU_ITEMS_COLUMNS_INITED,
      payload: { uuid }
    })
  }

  const initSubMenuItemForm = (columnIndex: number) => {
    dispatch({
      type: MenuStateActionType.SUB_MENU_ITEM_FORM_INITED,
      payload: { columnIndex }
    })
  }
  const initSubMenuItemFormForEditing = (uuid: SubMenuItem['uuid']) => {
    dispatch({
      type: MenuStateActionType.SUB_MENU_ITEM_FORM_INITED_FOR_EDITING,
      payload: { uuid }
    })
  }
  
  const removeSubMenuItemForm = () => {
    dispatch({ type: MenuStateActionType.SUB_MENU_ITEM_FORM_REMOVED });
  };
  
  const changeSubMenuItemFieldValue = (fieldName: keyof SubMenuItemForm, value: ValueOf<SubMenuItemForm>) => {
    dispatch({
      type: MenuStateActionType.SUB_MENU_ITEM_FORM_FIELD_CHANGED,
      payload: { fieldName, value }
    });
  };
  
  const saveSubMenuItem = () => {
    dispatch({ type: MenuStateActionType.SUB_MENU_ITEM_FORM_SAVED });
  };

  const removeSubMenuItem = () => {
    dispatch({ type: MenuStateActionType.SUB_MENU_ITEM_REMOVED });
  };

  return {
    state,
    dispatchers: {
      saveMenuItem,
      saveSubMenuItem,
      removeMenuItem,
      removeSubMenuItem,
      initMenuItemForm,
      initSubMenuItemForm,
      removeMenuItemForm,
      removeSubMenuItemForm,
      addMenuItemUuidToLocalMenu,
      deleteMenuItemUuidFromLocalMenu,
      changeMenuItemFieldValue,
      changeSubMenuItemFieldValue,
      initMenuItemFormForEditing,
      initSubMenuItemFormForEditing,
      initSubMenuItemColumns
    }
  } as const;
}