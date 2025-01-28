import { useContext } from "react"
import { MenuDispatchContext, MenuStateContext } from "../providers/MenuDataContextProvider";

export const useMenuState = () => {
  const state = useContext(MenuStateContext);
  const dispatch = useContext(MenuDispatchContext);

  return { state, dispatch } as const;
}