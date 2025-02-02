import { createContext, Dispatch, FC, useReducer } from 'react';
import { menuStateReducer } from '../reducers/menuStateReducer';
import { MenuStateAction, MenuState } from '../reducers/menuState.types';
import { MegaMenuInitData } from '../app.types';

// Provided by WordPress wp_localize_script
declare let devmceeMegaMenuInitData: MegaMenuInitData;
let extenalData = {
	data: {},
};

if (typeof devmceeMegaMenuInitData !== 'undefined') {
	extenalData = devmceeMegaMenuInitData;
}

type Props = {
	children: React.ReactNode;
};

export const menuInitialState: MenuState = Object.assign(
	{
		menuItemForm: null,
		subMenuItemForm: null,
		subMenuItems: {},
		menuItems: {},
		localMenu: {},
		subMenuItemsColumns: {},
	},
	extenalData?.data || {}
);

export const MenuStateContext = createContext<MenuState>(menuInitialState);
export const MenuDispatchContext = createContext<Dispatch<MenuStateAction>>(
	() => void 0
);

export const MenuDataContextProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(
		menuStateReducer,
		menuInitialState
	);
	return (
		<MenuStateContext.Provider value={state}>
			<MenuDispatchContext.Provider value={dispatch}>
				{children}
			</MenuDispatchContext.Provider>
		</MenuStateContext.Provider>
	);
};
