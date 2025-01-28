import { createContext, Dispatch, FC, useReducer } from "react"
import { MenuStateAction } from "../reducers/menuState.types";
import { EndpointName, MegaMenuInitData } from "../app.types";
import { menuMetaReducer } from "../reducers/menuMetaReducer";
import { MenuMetaState } from "../reducers/menuMeta.type";

// Provided by WordPress wp_localize_script
declare var devmceeMegaMenuInitData: MegaMenuInitData;

type Props = {
  children: React.ReactNode;
}

const {['data']: _, ...meta} =  devmceeMegaMenuInitData;

export const menuMetaInitialState: MenuMetaState = Object.assign({
  languages: [],
  defaultLanguage: 'en',
  endpoints: {
    [EndpointName.SAVE]: '',
  },
  customNonce: "",
  postID: 0
}, meta);

export const MenuMetaStateContext = createContext<MenuMetaState>(menuMetaInitialState);
export const MenuMetaDispatchContext = createContext<Dispatch<MenuStateAction>>(() => void (0));

export const MenuMetaContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(menuMetaReducer, menuMetaInitialState);

  return (
    <MenuMetaStateContext.Provider value={state}>
      <MenuMetaDispatchContext.Provider value={dispatch}>
        {children}
      </MenuMetaDispatchContext.Provider>
    </MenuMetaStateContext.Provider>
  )
}