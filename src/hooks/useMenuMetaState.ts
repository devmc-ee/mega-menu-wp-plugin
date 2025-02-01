import { useContext } from "react"
import { MenuMetaDispatchContext, MenuMetaStateContext } from "../providers/MenuMetaContextProvider";
import { MenuMetaActionType } from "../reducers/menuMeta.type";
import { LanguageCode } from "../app.types";

export const useMenuMetaState = () => {
  const state = useContext(MenuMetaStateContext);
  const dispatch = useContext(MenuMetaDispatchContext);

  const setActiveLanguageTab = (languageCode: LanguageCode) => dispatch({
    type: MenuMetaActionType.ACTIVE_LANGUAGE_TAB_SET,
    payload: languageCode
  });

  return {
    state,
    dispatchers: {
      dispatch,
      setActiveLanguageTab
    }
  } as const;
}