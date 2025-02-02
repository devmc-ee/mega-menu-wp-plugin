import { LanguageCode, MegaMenuInitData, ValueOf } from '../app.types';

export type MenuMetaState = Omit<MegaMenuInitData, 'data'> & {
	activeLanguageTab: LanguageCode;
	orderModeEnabled: boolean;
	orderSubmitted: boolean;
};

const ACTIVE_LANGUAGE_TAB_SET = 'meta/ACTIVE_LANGUAGE_TAB_SET';
const MENU_ORDER_MODE_ENABLED = 'meta/MENU_ORDER_MODE_ENABLED';
const MENU_ORDER_MODE_DISABLED = 'meta/MENU_ORDER_MODE_DISABLED';
const MENU_ORDER_SAVED = 'meta/MENU_ORDER_SAVED';

export const MenuMetaActionType = {
	ACTIVE_LANGUAGE_TAB_SET,
	MENU_ORDER_MODE_ENABLED,
	MENU_ORDER_MODE_DISABLED,
	MENU_ORDER_SAVED,
} as const;

export type MenuMetaActionType = ValueOf<typeof MenuMetaActionType>;
export type MenuMetaActionTypeWithoutPayload =
	| typeof MENU_ORDER_SAVED
	| typeof MENU_ORDER_MODE_ENABLED
	| typeof MENU_ORDER_MODE_DISABLED;

export type MenuMetaActionPayload = LanguageCode;

export type MenuMetaActionGeneric<
	T extends MenuMetaActionType,
	P extends MenuMetaActionPayload,
> = T extends MenuMetaActionTypeWithoutPayload
	? { type: T }
	: { type: T; payload: P };

export type MenuMetaAction = MenuMetaActionGeneric<
	MenuMetaActionType,
	MenuMetaActionPayload
>;
