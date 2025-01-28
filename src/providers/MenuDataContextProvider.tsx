import { createContext, Dispatch, FC, useReducer } from "react"
import { menuStateReducer } from "../reducers/menuStateReducer";
import { MenuStateAction, MenuState } from "../reducers/menuState.types";
import { MegaMenuInitData } from "../app.types";

// Provided by WordPress wp_localize_script
declare var devmceeMegaMenuInitData: MegaMenuInitData;

type Props = {
  children: React.ReactNode;
}

export const menuInitialState: MenuState = Object.assign({
  subMenuItemsMap: {},
  menuItemsMap: {},
  menuItemsListToLocaleMap: {},
  subMenuItemsColumnsMap: {},
}, devmceeMegaMenuInitData.data);

export const MenuStateContext = createContext<MenuState>(menuInitialState);
export const MenuDispatchContext = createContext<Dispatch<MenuStateAction>>(() => void (0));

export const MenuDataContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(menuStateReducer, menuInitialState);

  return (
    <MenuStateContext.Provider value={state}>
      <MenuDispatchContext.Provider value={dispatch}>
        {children}
      </MenuDispatchContext.Provider>
    </MenuStateContext.Provider>
  )
}