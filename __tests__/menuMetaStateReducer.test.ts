import { EndpointName } from '../src/app.types';
import {
	MenuMetaActionType,
	MenuMetaState,
} from '../src/reducers/menuMeta.types';
import { menuMetaReducer } from '../src/reducers/menuMetaReducer';
import { describe, it, expect } from '@jest/globals';

describe('menuMetaStateReducer', () => {
	const initialState: MenuMetaState = {
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
	};

	it('should return the initial state', () => {
		const state = menuMetaReducer(initialState, {
			// @ts-ignore
			type: 'unknown',
			// @ts-ignore
			payload: {},
		});
		expect(state).toEqual(initialState);
	});

	describe(MenuMetaActionType.ACTIVE_LANGUAGE_TAB_SET, () => {
		it('should set active language tab', () => {
			const state = menuMetaReducer(initialState, {
				type: MenuMetaActionType.ACTIVE_LANGUAGE_TAB_SET,
				payload: 'fr',
			});

			expect(state.activeLanguageTab).toEqual('fr');
		});
	});

	describe(MenuMetaActionType.MENU_ORDER_MODE_ENABLED, () => {
		it('should enable menu items order change', () => {
			const state = menuMetaReducer(initialState, {
				type: MenuMetaActionType.MENU_ORDER_MODE_ENABLED,
			});

			expect(state.orderModeEnabled).toEqual(true);
		});
	});
	describe(MenuMetaActionType.MENU_ORDER_MODE_DISABLED, () => {
		it('should disable menu items order change', () => {
			const state = menuMetaReducer(
				{
					...initialState,
					orderModeEnabled: true,
				},
				{
					type: MenuMetaActionType.MENU_ORDER_MODE_DISABLED,
				}
			);

			expect(state.orderModeEnabled).toEqual(false);
		});
	});
	describe(MenuMetaActionType.MENU_ORDER_SAVED, () => {
		it('should save menu with new order', () => {
			const state = menuMetaReducer(
				{
					...initialState,
					orderModeEnabled: true,
					orderSubmitted: false,
				},
				{
					type: MenuMetaActionType.MENU_ORDER_SAVED,
				}
			);

			expect(state.orderModeEnabled).toEqual(false);
			expect(state.orderSubmitted).toEqual(true);
		});
	});
});
