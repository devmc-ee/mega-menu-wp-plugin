import { UUID } from '../src/app.types';
import {
	LocalMenuUpdateAction,
	MenuItemForm,
	MenuState,
	MenuStateActionType,
} from '../src/reducers/menuState.types';
import { menuStateReducer } from '../src/reducers/menuStateReducer';
import { describe, it, expect } from '@jest/globals';
import { randomUUID } from 'crypto';

describe('menuStateReducer', () => {
	const initialState: MenuState = {
		menuItemForm: null,
		subMenuItemForm: null,
		subMenuItems: {},
		menuItems: {},
		localMenu: {},
		subMenuItemsColumns: {},
	};

	const menuItemFormInitState: MenuItemForm = {
		isSubmitted: false,
		languageCode: 'en',
		title: '',
		url: '',
		subMenuItemsColumnsUuid: null,
	};

	it('should return the initial state', () => {
		const state = menuStateReducer(initialState, {
			//@ts-ignore
			type: 'unknown',
			//@ts-ignore
			payload: {},
		});
		expect(state).toEqual(initialState);
	});

	describe(`${MenuStateActionType.MENU_ITEM_FORM_INITED} - ${MenuStateActionType.MENU_ITEM_FORM_REMOVED}`, () => {
		it('should return state with default menuItemForm values', () => {
			const state1 = menuStateReducer(initialState, {
				type: MenuStateActionType.MENU_ITEM_FORM_INITED,
				payload: {
					languageCode: 'en',
				},
			});
			expect(state1.menuItemForm).toEqual(menuItemFormInitState);

			const state2 = menuStateReducer(state1, {
				type: MenuStateActionType.MENU_ITEM_FORM_REMOVED,
			});
			expect(state2.menuItemForm).toEqual(null);
		});
	});

	describe(`${MenuStateActionType.MENU_ITEM_FORM_INITED_FOR_EDITING}`, () => {
		it('should return state with default menuItemForm values', () => {
			const uuid = randomUUID();
			const initState = {
				...initialState,
				menuItems: {
					[uuid]: {
						uuid,
						languageCode: 'en',
						title: 'Title',
						url: 'https://example.com',
						subMenuItemsColumnsUuid: null,
					},
				},
			};
			const state1 = menuStateReducer(initState, {
				type: MenuStateActionType.MENU_ITEM_FORM_INITED_FOR_EDITING,
				payload: {
					languageCode: 'en',
					uuid,
				},
			});

			expect(state1.menuItemForm).toEqual({
				isSubmitted: false,
				languageCode: 'en',
				title: 'Title',
				url: 'https://example.com',
				subMenuItemsColumnsUuid: null,
				uuid,
			});
		});
	});

	describe(MenuStateActionType.MENU_ITEM_FORM_FIELD_CHANGED, () => {
		it('should return state with updated menuItemForm values', () => {
			const state1 = menuStateReducer(
				{ ...initialState, menuItemForm: menuItemFormInitState },
				{
					type: MenuStateActionType.MENU_ITEM_FORM_FIELD_CHANGED,
					payload: {
						fieldName: 'title',
						value: 'New Title',
					},
				}
			);

			expect(state1.menuItemForm?.title).toBe('New Title');

			const state2 = menuStateReducer(state1, {
				type: MenuStateActionType.MENU_ITEM_FORM_FIELD_CHANGED,
				payload: {
					fieldName: 'url',
					value: 'https://example.com',
				},
			});

			expect(state2.menuItemForm?.title).toBe('New Title');
			expect(state2.menuItemForm?.url).toBe('https://example.com');
			expect(state2.menuItemForm?.isSubmitted).toBe(false);
		});
	});

	describe(MenuStateActionType.MENU_ITEM_UUID_ADDED_TO_LOCAL_MENU, () => {
		const uuid1 = randomUUID();
		const uuid2 = randomUUID();

		const initState = {
			...initialState,
			localMenu: {
				en: [uuid1],
			},
		};

		const getLocalMenuUpdateAction = (
			uuid: UUID
		): LocalMenuUpdateAction => ({
			type: MenuStateActionType.MENU_ITEM_UUID_ADDED_TO_LOCAL_MENU,
			payload: {
				languageCode: 'en',
				uuid,
			},
		});

		it('should return updated state of the localMenu', () => {
			const state1 = menuStateReducer(
				initState,
				getLocalMenuUpdateAction(uuid1)
			);

			expect(state1.localMenu).toEqual({
				en: [uuid1],
			});

			const state2 = menuStateReducer(
				state1,
				getLocalMenuUpdateAction(uuid2)
			);

			expect(state2.localMenu).toEqual({
				en: [uuid1, uuid2],
			});
		});
	});

	describe(
		MenuStateActionType.MENU_ITEM_UUID_DELETED_FROM_LOCAL_MENU,
		() => {
			const uuid1 = randomUUID();
			const uuid2 = randomUUID();

			const initState = {
				...initialState,
				localMenu: {
					en: [uuid1, uuid2],
				},
			};

			const getLocalMenuDeleteAction = (
				uuid: UUID
			): LocalMenuUpdateAction => ({
				type: MenuStateActionType.MENU_ITEM_UUID_DELETED_FROM_LOCAL_MENU,
				payload: {
					languageCode: 'en',
					uuid,
				},
			});

			it('should return updated state of the localMenu', () => {
				const state1 = menuStateReducer(
					initState,
					getLocalMenuDeleteAction(uuid1)
				);

				expect(state1.localMenu).toEqual({
					en: [uuid2],
				});

				const state2 = menuStateReducer(
					state1,
					getLocalMenuDeleteAction(uuid2)
				);

				expect(state2.localMenu).toEqual({
					en: [],
				});
			});
		}
	);

	describe(MenuStateActionType.MENU_ITEM_SAVED, () => {
		const initState: MenuState = {
			...initialState,
			localMenu: {
				en: [],
			},
			menuItemForm: {
				isSubmitted: false,
				languageCode: 'en',
				title: 'New Title',
				url: 'https://example.com',
				subMenuItemsColumnsUuid: null,
			},
		};

		it('should save menu item from form to localMenu & menuItems ', () => {
			const state1 = menuStateReducer(initState, {
				type: MenuStateActionType.MENU_ITEM_SAVED,
			});

			const menutItems = Object.values(state1.menuItems);
			const { uuid, ...rest } = menutItems[0];

			expect(menutItems.length).toBe(1);
			expect(menutItems[0]).toHaveProperty('uuid');
			// @ts-ignore - not desired injection of isSubmitted from form
			expect(menutItems[0].isSubmitted).toBeUndefined();

			const { isSubmitted, ...menuItemForm } =
				state1.menuItemForm as MenuItemForm;

			expect(rest).toEqual({
				...menuItemForm,
			});

			expect(state1.localMenu).toEqual({
				en: [uuid],
			});

			expect(state1.menuItemForm?.isSubmitted).toBe(true);

			const state2 = menuStateReducer(state1, {
				type: MenuStateActionType.MENU_ITEM_FORM_FIELD_CHANGED,
				payload: {
					fieldName: 'url',
					value: 'https://localhost.com',
				},
			});
			expect(state2.menuItemForm?.isSubmitted).toBe(false);
		});
	});

	describe(MenuStateActionType.MENU_ITEM_REMOVED, () => {
		const uuid = randomUUID();
		const initState: MenuState = {
			...initialState,
			menuItems: {
				[uuid]: {
					uuid,
					languageCode: 'en',
					title: 'New Title',
					url: 'https://example.com',
					subMenuItemsColumnsUuid: null,
				},
			},
			localMenu: {
				en: [uuid],
			},
			menuItemForm: {
				uuid,
				isSubmitted: false,
				languageCode: 'en',
				title: 'New Title',
				url: 'https://example.com',
				subMenuItemsColumnsUuid: null,
			},
		};

		it('should remove menu item from localMenu & menuItems ', () => {
			const state = menuStateReducer(initState, {
				type: MenuStateActionType.MENU_ITEM_REMOVED,
			});

			expect(uuid in state.menuItems).toBeFalsy();
			expect(state.localMenu.en.includes(uuid)).toBeFalsy();

			expect(state.menuItemForm?.isSubmitted).toBe(true);
		});
	});

	describe(MenuStateActionType.SUB_MENU_ITEMS_COLUMNS_INITED, () => {
		const uuid = randomUUID();
		const columnsSetUuid = randomUUID();

		const initState: MenuState = {
			...initialState,
			menuItems: {
				[uuid]: {
					uuid,
					languageCode: 'en',
					title: 'New Title',
					url: 'https://example.com',
					subMenuItemsColumnsUuid: null,
				},
			},
			localMenu: {
				en: [uuid],
			},
			menuItemForm: {
				uuid,
				isSubmitted: false,
				languageCode: 'en',
				title: 'New Title',
				url: 'https://example.com',
				subMenuItemsColumnsUuid: null,
			},
		};

		it('should add subMenuItemColumnsUuid to menuItemForm and subMenuItemsColumns', () => {
			const state = menuStateReducer(initState, {
				type: MenuStateActionType.SUB_MENU_ITEMS_COLUMNS_INITED,
				payload: {
					uuid: columnsSetUuid,
				},
			});

			expect(state.menuItemForm?.subMenuItemsColumnsUuid).toBe(
				columnsSetUuid
			);
			expect(columnsSetUuid in state.subMenuItemsColumns).toBeTruthy();
		});
	});

	describe(MenuStateActionType.SUB_MENU_ITEM_FORM_INITED, () => {
		const uuid = randomUUID();
		const columnsSetUuid = randomUUID();

		const initState: MenuState = {
			...initialState,
			menuItems: {
				[uuid]: {
					uuid,
					languageCode: 'en',
					title: 'New Title',
					url: 'https://example.com',
					subMenuItemsColumnsUuid: null,
				},
			},
			menuItemForm: {
				uuid,
				isSubmitted: false,
				languageCode: 'en',
				title: 'New Title',
				url: 'https://example.com',
				subMenuItemsColumnsUuid: columnsSetUuid,
			},
			subMenuItemsColumns: {
				[columnsSetUuid]: [[], [], []],
			},
		};

		it('should add init submenu item data to subMenuItemForm', () => {
			const state = menuStateReducer(initState, {
				type: MenuStateActionType.SUB_MENU_ITEM_FORM_INITED,
				payload: {
					columnIndex: 1,
				},
			});

			expect(state.subMenuItemForm?.columnIndex).toBe(1);
		});
	});

	describe(MenuStateActionType.SUB_MENU_ITEM_FORM_INITED_FOR_EDITING, () => {
		const uuid = randomUUID();
		const columnsSetUuid = randomUUID();
		const subMenuItemUuid = randomUUID();

		const initState: MenuState = {
			...initialState,
			menuItems: {
				[uuid]: {
					uuid,
					languageCode: 'en',
					title: 'New Title',
					url: 'https://example.com',
					subMenuItemsColumnsUuid: null,
				},
			},
			menuItemForm: {
				uuid,
				isSubmitted: false,
				languageCode: 'en',
				title: 'New Title',
				url: 'https://example.com',
				subMenuItemsColumnsUuid: columnsSetUuid,
			},
			subMenuItems: {
				[subMenuItemUuid]: {
					uuid: subMenuItemUuid,
					title: 'New Sub Title',
					description: 'Description',
					url: 'https://example.com/sub-item',
					columnIndex: 1,
					subMenuItemsColumnsUuid: columnsSetUuid,
				},
			},
			subMenuItemsColumns: {
				[columnsSetUuid]: [[], [subMenuItemUuid], []],
			},
		};

		it('should add data from subMenuItems to subMenuItemForm ', () => {
			const state = menuStateReducer(initState, {
				type: MenuStateActionType.SUB_MENU_ITEM_FORM_INITED_FOR_EDITING,
				payload: {
					uuid: subMenuItemUuid,
				},
			});

			expect(state.subMenuItemForm).toEqual({
				uuid: subMenuItemUuid,
				title: 'New Sub Title',
				description: 'Description',
				url: 'https://example.com/sub-item',
				columnIndex: 1,
				isSubmitted: false,
				subMenuItemsColumnsUuid: columnsSetUuid,
			});
		});
	});

	describe(MenuStateActionType.SUB_MENU_ITEM_FORM_REMOVED, () => {
		const uuid = randomUUID();
		const columnsSetUuid = randomUUID();

		const initState: MenuState = {
			...initialState,
			menuItems: {
				[uuid]: {
					uuid,
					languageCode: 'en',
					title: 'New Title',
					url: 'https://example.com',
					subMenuItemsColumnsUuid: null,
				},
			},
			menuItemForm: {
				uuid,
				isSubmitted: false,
				languageCode: 'en',
				title: 'New Title',
				url: 'https://example.com',
				subMenuItemsColumnsUuid: columnsSetUuid,
			},
			subMenuItemForm: {
				isSubmitted: false,
				title: 'New Sub Title',
				description: 'Description',
				url: 'https://example.com/sub-item',
				columnIndex: 1,
				subMenuItemsColumnsUuid: columnsSetUuid,
			},
			subMenuItemsColumns: {
				[columnsSetUuid]: [[], [], []],
			},
		};

		it('should should remove subMenuItemForm', () => {
			const state = menuStateReducer(initState, {
				type: MenuStateActionType.SUB_MENU_ITEM_FORM_REMOVED,
			});

			expect(state.subMenuItemForm).toBeNull();
		});
	});

	describe(MenuStateActionType.SUB_MENU_ITEM_FORM_FIELD_CHANGED, () => {
		const uuid = randomUUID();
		const columnsSetUuid = randomUUID();

		const initState: MenuState = {
			...initialState,
			menuItems: {
				[uuid]: {
					uuid,
					languageCode: 'en',
					title: 'New Title',
					url: 'https://example.com',
					subMenuItemsColumnsUuid: null,
				},
			},
			menuItemForm: {
				uuid,
				isSubmitted: false,
				languageCode: 'en',
				title: 'New Title',
				url: 'https://example.com',
				subMenuItemsColumnsUuid: columnsSetUuid,
			},
			subMenuItemForm: {
				isSubmitted: false,
				title: 'New Sub Title',
				description: 'Description',
				url: 'https://example.com/sub-item',
				columnIndex: 1,
				subMenuItemsColumnsUuid: columnsSetUuid,
			},
			subMenuItemsColumns: {
				[columnsSetUuid]: [[], [], []],
			},
		};

		it('should change value of subMenuItemForm', () => {
			const state = menuStateReducer(initState, {
				type: MenuStateActionType.SUB_MENU_ITEM_FORM_FIELD_CHANGED,
				payload: {
					fieldName: 'url',
					value: 'https://localhost.com/sub-item',
				},
			});

			expect(state.subMenuItemForm?.url).toBe(
				'https://localhost.com/sub-item'
			);
		});
	});

	describe(MenuStateActionType.SUB_MENU_ITEM_FORM_SAVED, () => {
		const menuItemUuid = randomUUID();
		const columnsSetUuid = randomUUID();
		const subMenuItemUuid = randomUUID();

		const initState: MenuState = {
			...initialState,
			menuItems: {
				[menuItemUuid]: {
					uuid: menuItemUuid,
					languageCode: 'en',
					title: 'New Title',
					url: 'https://example.com',
					subMenuItemsColumnsUuid: null,
				},
			},
			menuItemForm: {
				uuid: menuItemUuid,
				isSubmitted: false,
				languageCode: 'en',
				title: 'New Title',
				url: 'https://example.com',
				subMenuItemsColumnsUuid: columnsSetUuid,
			},
			subMenuItemForm: {
				isSubmitted: false,
				title: 'New Sub Title',
				description: 'Description',
				url: 'https://example.com/sub-item',
				columnIndex: 1,
				subMenuItemsColumnsUuid: columnsSetUuid,
			},
			subMenuItemsColumns: {
				[columnsSetUuid]: [[], [], []],
			},
		};

		it('should save new subMenuItem', () => {
			const state1 = menuStateReducer(initState, {
				type: MenuStateActionType.SUB_MENU_ITEM_FORM_SAVED,
			});

			expect(state1.subMenuItemForm?.isSubmitted).toBeTruthy();
			expect(
				state1.menuItems[menuItemUuid].subMenuItemsColumnsUuid
			).toBe(columnsSetUuid);
			const { uuid: _subMenuItemUuid, ...subMenuItem } = Object.values(
				state1.subMenuItems
			)[0];
			expect(subMenuItem).toEqual({
				title: 'New Sub Title',
				description: 'Description',
				url: 'https://example.com/sub-item',
				columnIndex: 1,
				subMenuItemsColumnsUuid: columnsSetUuid,
			});
			expect(
				state1.subMenuItemsColumns[columnsSetUuid][1]
			).toContain(_subMenuItemUuid);
		});

		it('should save edited subMenuItem', () => {
			const state1 = menuStateReducer(
				{
					...initState,
					subMenuItems: {
						[subMenuItemUuid]: {
							uuid: subMenuItemUuid,
							title: 'New Sub Title',
							description: 'Description',
							url: 'https://example.com/sub-item',
							columnIndex: 1,
							subMenuItemsColumnsUuid: columnsSetUuid,
						},
					},
					subMenuItemForm: {
						isSubmitted: false,
						uuid: subMenuItemUuid,
						title: 'New Sub Title',
						description: 'Description',
						url: 'https://example.com/sub-item',
						columnIndex: 1,
						subMenuItemsColumnsUuid: columnsSetUuid,
					},
					subMenuItemsColumns: {
						[columnsSetUuid]: [[], [subMenuItemUuid], []],
					},
				},
				{
					type: MenuStateActionType.SUB_MENU_ITEM_FORM_SAVED,
				}
			);

			expect(state1.subMenuItemForm?.isSubmitted).toBeTruthy();
			expect(
				state1.subMenuItemsColumns[columnsSetUuid][1].length
			).toBe(1);
		});
	});

	describe(MenuStateActionType.SUB_MENU_ITEM_REMOVED, () => {
		const menuItemUuid = randomUUID();
		const columnsSetUuid = randomUUID();
		const subMenuItemUuid = randomUUID();

		const initState: MenuState = {
			...initialState,
			menuItems: {
				[menuItemUuid]: {
					uuid: menuItemUuid,
					languageCode: 'en',
					title: 'New Title',
					url: 'https://example.com',
					subMenuItemsColumnsUuid: columnsSetUuid,
				},
			},
			menuItemForm: {
				uuid: menuItemUuid,
				isSubmitted: false,
				languageCode: 'en',
				title: 'New Title',
				url: 'https://example.com',
				subMenuItemsColumnsUuid: columnsSetUuid,
			},
			subMenuItemForm: {
				uuid: subMenuItemUuid,
				isSubmitted: false,
				title: 'New Sub Title',
				description: 'Description',
				url: 'https://example.com/sub-item',
				columnIndex: 1,
				subMenuItemsColumnsUuid: columnsSetUuid,
			},
			subMenuItems: {
				[subMenuItemUuid]: {
					uuid: subMenuItemUuid,
					title: 'New Sub Title',
					description: 'Description',
					url: 'https://example.com/sub-item',
					columnIndex: 1,
					subMenuItemsColumnsUuid: columnsSetUuid,
				},
			},
			subMenuItemsColumns: {
				[columnsSetUuid]: [[], [subMenuItemUuid], []],
			},
		};

		it('should remove subMenuItem', () => {
			const state = menuStateReducer(initState, {
				type: MenuStateActionType.SUB_MENU_ITEM_REMOVED,
			});
			const {
				subMenuItemForm,
				subMenuItems,
				menuItemForm,
				subMenuItemsColumns,
			} = state;

			expect(subMenuItemForm!.isSubmitted).toBeTruthy();
			expect(subMenuItemUuid in subMenuItems).toBeFalsy();
			expect(
				subMenuItemsColumns[menuItemForm!.subMenuItemsColumnsUuid!][
				subMenuItemForm!.columnIndex
				]
			).not.toContain(subMenuItemUuid);
		});
	});

	describe(`${MenuStateActionType.MENU_ITEM_MOVED_UP}-${MenuStateActionType.MENU_ITEM_MOVED_DOWN}`, () => {
		const menuItemUuid1 = randomUUID();
		const menuItemUuid2 = randomUUID();
		const columnsSetUuid = randomUUID();

		const initState: MenuState = {
			...initialState,
			menuItems: {
				[menuItemUuid1]: {
					uuid: menuItemUuid1,
					languageCode: 'en',
					title: 'New Title',
					url: 'https://example.com',
					subMenuItemsColumnsUuid: columnsSetUuid,
				},
				[menuItemUuid2]: {
					uuid: menuItemUuid2,
					languageCode: 'en',
					title: 'New Title 2',
					url: 'https://example.com',
					subMenuItemsColumnsUuid: columnsSetUuid,
				},
			},
			localMenu: {
				en: [menuItemUuid1, menuItemUuid2],
			},
		};

		it('should move menuItem2 to the 1st position', () => {
			const state = menuStateReducer(initState, {
				type: MenuStateActionType.MENU_ITEM_MOVED_UP,
				payload: {
					uuid: menuItemUuid2,
					languageCode: 'en',
				},
			});

			const { localMenu } = state;
			expect(localMenu.en[0]).toBe(menuItemUuid2);
			expect(localMenu.en[1]).toBe(menuItemUuid1);
		});

		it('should move menuItem1 to the 2nd position', () => {
			const state = menuStateReducer(initState, {
				type: MenuStateActionType.MENU_ITEM_MOVED_DOWN,
				payload: {
					uuid: menuItemUuid1,
					languageCode: 'en',
				},
			});

			const { localMenu } = state;
			expect(localMenu.en[0]).toBe(menuItemUuid2);
			expect(localMenu.en[1]).toBe(menuItemUuid1);
		});
	});

	describe(`${MenuStateActionType.SUB_MENU_ITEM_MOVED_UP}-${MenuStateActionType.SUB_MENU_ITEM_MOVED_DOWN}`, () => {
		const menuItemUuid1 = randomUUID();
		const subMenuItemUuid1 = randomUUID();
		const subMenuItemUuid2 = randomUUID();
		const columnsSetUuid = randomUUID();

		const initState: MenuState = {
			...initialState,
			menuItems: {
				[menuItemUuid1]: {
					uuid: menuItemUuid1,
					languageCode: 'en',
					title: 'New Title',
					url: 'https://example.com',
					subMenuItemsColumnsUuid: columnsSetUuid,
				},
			},
			subMenuItems: {
				[subMenuItemUuid1]: {
					uuid: subMenuItemUuid1,
					title: 'Sub Item 1',
					description: 'Description',
					url: 'https://example.com/sub-item1',
					columnIndex: 1,
					subMenuItemsColumnsUuid: columnsSetUuid,
				},
				[subMenuItemUuid2]: {
					uuid: subMenuItemUuid2,
					title: 'Sub Item 2',
					description: 'Description',
					url: 'https://example.com/sub-item2',
					columnIndex: 1,
					subMenuItemsColumnsUuid: columnsSetUuid,
				},
			},
			subMenuItemsColumns: {
				[columnsSetUuid]: [
					[],
					[subMenuItemUuid1, subMenuItemUuid2],
					[],
				],
			},
			localMenu: {
				en: [menuItemUuid1],
			},
		};

		it('should move subMenuItem up', () => {
			const state = menuStateReducer(initState, {
				type: MenuStateActionType.SUB_MENU_ITEM_MOVED_UP,
				payload: {
					uuid: subMenuItemUuid2,
					columnIndex: 1,
					subMenuItemsColumnsUuid: columnsSetUuid,
				},
			});

			const { subMenuItemsColumns } = state;
			const subMenuItems = subMenuItemsColumns[columnsSetUuid][1];

			expect(subMenuItems[0]).toBe(subMenuItemUuid2);
			expect(subMenuItems[1]).toBe(subMenuItemUuid1);
		});

		it('should move subMenuItem down', () => {
			const state = menuStateReducer(initState, {
				type: MenuStateActionType.SUB_MENU_ITEM_MOVED_DOWN,
				payload: {
					uuid: subMenuItemUuid1,
					columnIndex: 1,
					subMenuItemsColumnsUuid: columnsSetUuid,
				},
			});

			const { subMenuItemsColumns } = state;
			const subMenuItems = subMenuItemsColumns[columnsSetUuid][1];

			expect(subMenuItems[0]).toBe(subMenuItemUuid2);
			expect(subMenuItems[1]).toBe(subMenuItemUuid1);
		});
	});
});
