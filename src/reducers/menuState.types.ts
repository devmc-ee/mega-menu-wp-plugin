import { Action, LanguageCode, MegaMenuData, MenuItem, SubMenuItem, SubMenuItemsColumns, ValueOf } from "../app.types";

export type MenuState = MegaMenuData & {
  menuItemForm: MenuItemForm | null;
  subMenuItemForm: SubMenuItemForm | null;
}

export const MenuStateActionType = {
  MENU_ITEM_FORM_INITED: 'menu/MENU_ITEM_FORM_INITED',
  MENU_ITEM_FORM_INITED_FOR_EDITING: 'menu/MENU_ITEM_FORM_INITED_FOR_EDITING',
  MENU_ITEM_FORM_REMOVED: 'menu/MENU_ITEM_FORM_REMOVED',
  MENU_ITEM_FORM_FIELD_CHANGED: 'menu/MENU_ITEM_FORM_FIELD_CHANGED',
  MENU_ITEM_UUID_ADDED_TO_LOCAL_MENU: 'menu/MENU_ITEM_UUID_ADDED_TO_LOCAL_MENU',
  MENU_ITEM_UUID_DELETED_FROM_LOCAL_MENU: 'menu/MENU_ITEM_UUID_DELETED_FROM_LOCAL_MENU',
  MENU_ITEM_SAVED: 'menu/MENU_ITEM_SAVED',
  MENU_ITEM_REMOVED: 'menu/MENU_ITEM_REMOVED',
  SUB_MENU_ITEMS_COLUMNS_INITED: 'menu/SUB_MENU_ITEMS_COLUMNS_INITED',
  SUB_MENU_ITEM_FORM_INITED: 'menu/SUB_MENU_ITEM_FORM_INITED',
  SUB_MENU_ITEM_FORM_INITED_FOR_EDITING: 'menu/SUB_MENU_ITEM_FORM_INITED_FOR_EDITING',
  SUB_MENU_ITEM_FORM_REMOVED: 'menu/SUB_MENU_ITEM_FORM_REMOVED',
  SUB_MENU_ITEM_FORM_FIELD_CHANGED: 'menu/SUB_MENU_ITEM_FORM_FIELD_CHANGED',
  SUB_MENU_ITEM_FORM_SAVED: 'menu/SUB_MENU_ITEM_FORM_SAVED',
  SUB_MENU_ITEM_REMOVED: 'menu/SUB_MENU_ITEM_REMOVED',
} as const;

export type LocalMenuUpdateActionPayload = {
  languageCode: LanguageCode,
  uuid: MenuItem['uuid'],
}
export type MenuItemFormInitForEditingPayload = LocalMenuUpdateActionPayload;

export type MenuItemFormChangePayload = {
  fieldName: Required<keyof MenuItemForm>,
  value: Required<ValueOf<MenuItemForm>>,
}

export type MenuItemFormInitActionPayload = {
  languageCode: LanguageCode;
}

export type SubMenuItemColumnsInitActionPayload = {
  uuid: keyof SubMenuItemsColumns
}

export type SubMenuItemFormInitActionPayload = {
  columnIndex: number;
}

export type SubMenuItemFormChangeActionPayload = {
  fieldName: Required<keyof SubMenuItemForm>,
  value: Required<ValueOf<SubMenuItemForm>>,
}

export type SubMenuItemFormInitForEditingPayload = {
  uuid: SubMenuItem['uuid'];
}

export type MenuStateActionType = ValueOf<typeof MenuStateActionType>;
export type MenuStateActionPayload =
  | MenuItem
  | LocalMenuUpdateActionPayload
  | MenuItemFormChangePayload
  | MenuItemFormInitActionPayload
  | MenuItemFormInitForEditingPayload
  | SubMenuItemColumnsInitActionPayload
  | SubMenuItemFormInitActionPayload
  | SubMenuItemFormChangeActionPayload
  | SubMenuItemFormInitForEditingPayload
  | undefined;

type ActionTypeWithoutPayload =
  | 'menu/MENU_ITEM_FORM_REMOVED'
  | 'menu/MENU_ITEM_SAVED'
  | 'menu/MENU_ITEM_REMOVED'
  | 'menu/SUB_MENU_ITEM_FORM_REMOVED'
  | 'menu/SUB_MENU_ITEM_FORM_SAVED'
  | 'menu/SUB_MENU_ITEM_REMOVED';

export type MenuStateActionGeneric<T extends MenuStateActionType, P extends MenuStateActionPayload> =
  T extends ActionTypeWithoutPayload
  ? { type: T }
  : { type: T; payload: P; }

export type LocalMenuUpdateAction = Action<MenuStateActionType, LocalMenuUpdateActionPayload>;
export type MenuStateAction = MenuStateActionGeneric<MenuStateActionType, MenuStateActionPayload>;

export type MenuItemForm = Omit<MenuItem, 'uuid'>
  & {
    isSubmitted: boolean,
    languageCode: LanguageCode,
    uuid?: MenuItem['uuid']
  };

export type SubMenuItemForm = Omit<SubMenuItem, 'uuid'> & {
  uuid?: SubMenuItem['uuid']
  isSubmitted: boolean
}