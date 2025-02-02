import { createContext, Dispatch, FC, useReducer } from 'react';
import { EndpointName, MegaMenuInitData } from '../app.types';
import { menuMetaReducer } from '../reducers/menuMetaReducer';
import { MenuMetaAction, MenuMetaState } from '../reducers/menuMeta.types';

// Provided by WordPress wp_localize_script
declare const devmceeMegaMenuInitData: MegaMenuInitData;

let externalMetaData = {};

if (typeof devmceeMegaMenuInitData !== 'undefined') {
	const { data: _, ...meta } = devmceeMegaMenuInitData;
	externalMetaData = meta;
}

type Props = {
	children: React.ReactNode;
};

export const menuMetaInitialState: MenuMetaState = Object.assign(
	{
		languages: [],
		defaultLanguage: 'en',
		activeLanguageTab: 'en',
		endpoints: {
			[EndpointName.SAVE]: '',
		},
		customNonce: '',
		postID: 0,
		orderModeEnabled: false,
		orderSubmitted: false,
	},
	externalMetaData
);

export const MenuMetaStateContext =
	createContext<MenuMetaState>(menuMetaInitialState);
export const MenuMetaDispatchContext = createContext<
	Dispatch<MenuMetaAction>
>(() => void 0);

export const MenuMetaContextProvider: FC<Props> = ({ children }) => {
	const [state, dispatch] = useReducer(
		menuMetaReducer,
		menuMetaInitialState
	);

	return (
		<MenuMetaStateContext.Provider value={state}>
			<MenuMetaDispatchContext.Provider value={dispatch}>
				{children}
			</MenuMetaDispatchContext.Provider>
		</MenuMetaStateContext.Provider>
	);
};
