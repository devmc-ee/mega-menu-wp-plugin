import { useContext } from 'react';
import {
	MenuMetaDispatchContext,
	MenuMetaStateContext,
} from '../providers/MenuMetaContextProvider';
import { MenuMetaActionType } from '../reducers/menuMeta.types';
import { LanguageCode } from '../app.types';

export const useMenuMetaState = () => {
	const state = useContext(MenuMetaStateContext);
	const dispatch = useContext(MenuMetaDispatchContext);

	const setActiveLanguageTab = (languageCode: LanguageCode) =>
		dispatch({
			type: MenuMetaActionType.ACTIVE_LANGUAGE_TAB_SET,
			payload: languageCode,
		});

	const enableOrderMode = () => {
		dispatch({ type: MenuMetaActionType.MENU_ORDER_MODE_ENABLED });
	};

	const saveMenuOrder = () => {
		dispatch({ type: MenuMetaActionType.MENU_ORDER_SAVED });
	};

	const disableOrderMode = () => {
		dispatch({ type: MenuMetaActionType.MENU_ORDER_MODE_DISABLED });
	};

	return {
		state,
		dispatchers: {
			setActiveLanguageTab,
			disableOrderMode,
			enableOrderMode,
			saveMenuOrder,
		},
	} as const;
};
