import { MegaMenuData, ValueOf } from "../app.types";

export type MenuState = MegaMenuData & {

}

export type UnknownAction<T extends string, P> = {
  type: T;
  payload: P;
}

export const MenuStateActionType = {
  UNKNOWN: 'unknown',
} as const;

export type MenuStateActionType = ValueOf<typeof MenuStateActionType>;

export type MenuStateAction =
  | UnknownAction<MenuStateActionType, unknown>
