import { MegaMenuInitData, UnknownAction, ValueOf } from "../app.types";

export type MenuMetaState = Omit<MegaMenuInitData, 'data'> & {

}

export const MenuMetaActionType = {
  UNKNOWN: 'unknown',
} as const;

export type MenuMetaActionType = ValueOf<typeof MenuMetaActionType>;

export type MenuMetaAction =
  | UnknownAction<MenuMetaActionType, unknown>

