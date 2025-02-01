import { LanguageCode, MegaMenuInitData, Action, ValueOf } from "../app.types";

export type MenuMetaState = Omit<MegaMenuInitData, 'data'> & {
  activeLanguageTab: LanguageCode;
}

export const MenuMetaActionType = {
  ACTIVE_LANGUAGE_TAB_SET: 'meta/ACTIVE_LANGUAGE_TAB_SET',
} as const;

export type MenuMetaActionType = ValueOf<typeof MenuMetaActionType>;
export type MenuMetaActionPayload =
  | LanguageCode;

export type MenuMetaAction =
  | Action<MenuMetaActionType, MenuMetaActionPayload>

