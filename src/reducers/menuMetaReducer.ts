import {
	MenuMetaAction,
	MenuMetaActionType,
	MenuMetaState,
} from './menuMeta.types';

export const menuMetaReducer = (
	state: MenuMetaState,
	action: MenuMetaAction
): MenuMetaState => {
	console.log('[MenuMetaReducer:action]', action);

	switch (action.type) {
		case MenuMetaActionType.ACTIVE_LANGUAGE_TAB_SET: {
			return {
				...state,
				activeLanguageTab: action.payload!,
			};
		}
		case MenuMetaActionType.MENU_ORDER_MODE_ENABLED: {
			return {
				...state,
				orderModeEnabled: true,
			};
		}
		case MenuMetaActionType.MENU_ORDER_MODE_DISABLED: {
			return {
				...state,
				orderModeEnabled: false,
			};
		}
		case MenuMetaActionType.MENU_ORDER_SAVED: {
			return {
				...state,
				orderModeEnabled: false,
				orderSubmitted: true,
			};
		}
		default:
			return state;
	}
};
