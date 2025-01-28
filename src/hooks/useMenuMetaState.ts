import { useContext } from "react"
import { MenuMetaDispatchContext, MenuMetaStateContext } from "../providers/MenuMetaContextProvider";

export const useMenuMetaState = () => {
  const state = useContext(MenuMetaStateContext);
  const dispatch = useContext(MenuMetaDispatchContext);

  return { state, dispatch } as const;
}