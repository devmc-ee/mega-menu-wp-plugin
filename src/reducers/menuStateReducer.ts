import { MenuStateAction, MenuState } from "./menuState.types";

export const menuStateReducer = (state: MenuState, action: MenuStateAction): MenuState => {
  switch (action.type) {
    default:
      return state;
  }
}