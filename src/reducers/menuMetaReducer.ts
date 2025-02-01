import { MenuMetaAction, MenuMetaActionType, MenuMetaState } from "./menuMeta.type";

export const menuMetaReducer = (state: MenuMetaState, action: MenuMetaAction): MenuMetaState => {
  console.log('[MenuMetaReducer:action]', action);

  switch (action.type) {
    case MenuMetaActionType.ACTIVE_LANGUAGE_TAB_SET: {
      return {
        ...state,
        activeLanguageTab: action.payload!,
      };
    }
    default:
      return state;
  }
}