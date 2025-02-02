import {
	MenuStateAction,
	MenuState,
	MenuStateActionType,
	LocalMenuUpdateActionPayload,
	MenuItemFormChangePayload,
	MenuItemFormInitActionPayload,
	MenuItemFormInitForEditingPayload,
	SubMenuItemColumnsInitActionPayload,
	SubMenuItemFormInitActionPayload,
	SubMenuItemFormChangeActionPayload,
	SubMenuItemFormInitForEditingPayload,
	MenuItemReorderActionPayload,
	SubMenuItemReorderActionPayload,
} from './menuState.types';

export const menuStateReducer = (
	state: MenuState,
	action: MenuStateAction
): MenuState => {
	console.log('[MenuStateReducer:action]', action);

	switch (action.type) {
		case MenuStateActionType.MENU_ITEM_FORM_INITED: {
			const { languageCode } =
				action.payload as MenuItemFormInitActionPayload;
			return {
				...state,
				menuItemForm: {
					isSubmitted: false,
					languageCode,
					title: '',
					url: '',
					subMenuItemsColumnsUuid: null,
				},
			};
		}
		case MenuStateActionType.MENU_ITEM_FORM_INITED_FOR_EDITING: {
			const { languageCode, uuid } =
				action.payload as MenuItemFormInitForEditingPayload;

			const menuItem = state.menuItems[uuid];

			return {
				...state,
				menuItemForm: {
					...menuItem,
					isSubmitted: false,
					languageCode,
				},
			};
		}
		case MenuStateActionType.MENU_ITEM_FORM_REMOVED: {
			return {
				...state,
				menuItemForm: null,
			};
		}
		case MenuStateActionType.MENU_ITEM_FORM_FIELD_CHANGED: {
			if (!state.menuItemForm) {
				return state;
			}

			const { fieldName, value } =
				action.payload as MenuItemFormChangePayload;

			return {
				...state,
				menuItemForm: {
					...state.menuItemForm,
					[fieldName]: value,
					isSubmitted: false,
				},
			};
		}
		case MenuStateActionType.MENU_ITEM_UUID_ADDED_TO_LOCAL_MENU: {
			const { languageCode: locale, uuid } =
				action.payload as LocalMenuUpdateActionPayload;

			const localMenu = new Set(state.localMenu[locale]);
			localMenu.add(uuid);

			return {
				...state,
				localMenu: {
					...state.localMenu,
					[locale]: [...localMenu],
				},
			};
		}
		case MenuStateActionType.MENU_ITEM_UUID_DELETED_FROM_LOCAL_MENU: {
			const { languageCode: locale, uuid } =
				action.payload as LocalMenuUpdateActionPayload;

			return {
				...state,
				localMenu: {
					...state.localMenu,
					[locale]: [
						...state.localMenu[locale].filter(
							(_uuid) => _uuid !== uuid
						),
					],
				},
			};
		}
		case MenuStateActionType.MENU_ITEM_SAVED: {
			if (!state.menuItemForm) {
				return state;
			}
			// save on edit if uuid exists, otherwise - new item
			const uuid = state.menuItemForm.uuid || crypto.randomUUID();

			const localMenu = new Set(
				state.localMenu[state.menuItemForm.languageCode]
			);
			localMenu.add(uuid);

			const { isSubmitted, ...menuItemsForm } = state.menuItemForm;

			return {
				...state,
				menuItemForm: {
					...state.menuItemForm,
					isSubmitted: true,
				},
				localMenu: {
					...state.localMenu,
					[state.menuItemForm.languageCode]: [...localMenu],
				},
				menuItems: {
					...state.menuItems,
					[uuid]: {
						...menuItemsForm,
						uuid,
					},
				},
			};
		}
		case MenuStateActionType.MENU_ITEM_REMOVED: {
			if (!state.menuItemForm || !state.menuItemForm.uuid) {
				return state;
			}

			const uuid = state.menuItemForm.uuid;
			const languageCode = state.menuItemForm.languageCode;

			const { [uuid]: _, ...menuItems } = state.menuItems;
			return {
				...state,
				menuItemForm: {
					...state.menuItemForm,
					isSubmitted: true,
				},
				localMenu: {
					...state.localMenu,
					[languageCode]: [
						...state.localMenu[languageCode].filter(
							(_uuid) => _uuid !== uuid
						),
					],
				},
				menuItems,
			};
		}
		case MenuStateActionType.SUB_MENU_ITEMS_COLUMNS_INITED: {
			if (!state.menuItemForm) {
				return state;
			}
			const { uuid } =
				action.payload as SubMenuItemColumnsInitActionPayload;

			return {
				...state,
				menuItemForm: {
					...state.menuItemForm,
					subMenuItemsColumnsUuid: uuid,
				},
				subMenuItemsColumns: {
					...state.subMenuItemsColumns,
					[uuid]: [[], [], []],
				},
			};
		}
		case MenuStateActionType.SUB_MENU_ITEM_FORM_INITED: {
			if (!state.menuItemForm) {
				return state;
			}
			const { columnIndex } =
				action.payload as SubMenuItemFormInitActionPayload;

			return {
				...state,
				subMenuItemForm: {
					url: '',
					description: '',
					title: '',
					isSubmitted: false,
					columnIndex,
					subMenuItemsColumnsUuid:
						state.menuItemForm.subMenuItemsColumnsUuid!,
				},
			};
		}
		case MenuStateActionType.SUB_MENU_ITEM_FORM_INITED_FOR_EDITING: {
			if (!state.menuItemForm) {
				return state;
			}
			const { uuid: subMenuItemUuid } =
				action.payload as SubMenuItemFormInitForEditingPayload;

			return {
				...state,
				subMenuItemForm: {
					...state.subMenuItems[subMenuItemUuid],
					isSubmitted: false,
				},
			};
		}
		case MenuStateActionType.SUB_MENU_ITEM_FORM_REMOVED: {
			return {
				...state,
				subMenuItemForm: null,
			};
		}
		case MenuStateActionType.SUB_MENU_ITEM_FORM_FIELD_CHANGED: {
			if (!state.subMenuItemForm) {
				return state;
			}
			const { fieldName, value } =
				action.payload as SubMenuItemFormChangeActionPayload;

			return {
				...state,
				subMenuItemForm: {
					...state.subMenuItemForm,
					[fieldName]: value,
					isSubmitted: false,
				},
			};
		}
		case MenuStateActionType.SUB_MENU_ITEM_FORM_SAVED: {
			if (!state.subMenuItemForm || !state.menuItemForm) {
				return state;
			}

			const {
				menuItems,
				menuItemForm,
				subMenuItemForm,
				subMenuItemsColumns,
			} = state;

			const { isSubmitted, ...submittedSubMenuItemForm } =
				state.subMenuItemForm;
			const subMenuItemUuid =
				submittedSubMenuItemForm.uuid || crypto.randomUUID();

			const menuItem = menuItems[menuItemForm.uuid!];

			const column = new Set(
				subMenuItemsColumns[menuItemForm.subMenuItemsColumnsUuid!][
				subMenuItemForm.columnIndex
				]
			);
			column.add(subMenuItemUuid);
			subMenuItemsColumns[menuItemForm.subMenuItemsColumnsUuid!][
				subMenuItemForm.columnIndex
			] = [...column];

			return {
				...state,
				menuItems: {
					...state.menuItems,
					[menuItem.uuid]: {
						...menuItem,
						subMenuItemsColumnsUuid:
							menuItemForm.subMenuItemsColumnsUuid,
					},
				},
				subMenuItemForm: {
					...submittedSubMenuItemForm,
					isSubmitted: true,
				},
				subMenuItems: {
					...state.subMenuItems,
					[subMenuItemUuid]: {
						...submittedSubMenuItemForm,
						uuid: subMenuItemUuid,
					},
				},
				subMenuItemsColumns: {
					...subMenuItemsColumns,
				},
			};
		}
		case MenuStateActionType.SUB_MENU_ITEM_REMOVED: {
			const {
				menuItemForm,
				subMenuItemForm,
				subMenuItemsColumns,
				subMenuItems,
			} = state;
			if (
				!subMenuItemForm ||
				!subMenuItemForm.uuid ||
				!menuItemForm
			) {
				return state;
			}

			const { [subMenuItemForm.uuid]: _, ...newSubMenuItems } =
				subMenuItems;

			subMenuItemsColumns[menuItemForm.subMenuItemsColumnsUuid!][
				subMenuItemForm.columnIndex
			] = subMenuItemsColumns[menuItemForm.subMenuItemsColumnsUuid!][
				subMenuItemForm.columnIndex
			].filter((uuid) => uuid !== subMenuItemForm.uuid);

			return {
				...state,
				subMenuItemForm: {
					...subMenuItemForm,
					isSubmitted: true,
				},
				subMenuItems: {
					...newSubMenuItems,
				},
				subMenuItemsColumns: {
					...subMenuItemsColumns,
				},
			};
		}
		case MenuStateActionType.MENU_ITEM_MOVED_UP: {
			const { uuid, languageCode } =
				action.payload as MenuItemReorderActionPayload;
			const { localMenu } = state;

			const index = localMenu[languageCode].indexOf(uuid);

			if (index === 0) {
				return state;
			}

			const newLocalMenu = [...localMenu[languageCode]];

			const prev = newLocalMenu[index - 1];
			newLocalMenu[index - 1] = uuid;
			newLocalMenu[index] = prev;

			return {
				...state,
				localMenu: {
					...localMenu,
					[languageCode]: newLocalMenu,
				},
			};
		}
		case MenuStateActionType.MENU_ITEM_MOVED_DOWN: {
			const { uuid, languageCode } =
				action.payload as MenuItemReorderActionPayload;
			const { localMenu } = state;

			const index = localMenu[languageCode].indexOf(uuid);

			if (index === localMenu[languageCode].length - 1) {
				return state;
			}

			const newLocalMenu = [...localMenu[languageCode]];

			const next = newLocalMenu[index + 1];
			newLocalMenu[index + 1] = uuid;
			newLocalMenu[index] = next;

			return {
				...state,
				localMenu: {
					...localMenu,
					[languageCode]: newLocalMenu,
				},
			};
		}
		case MenuStateActionType.SUB_MENU_ITEM_MOVED_UP: {
			const { uuid, columnIndex, subMenuItemsColumnsUuid } =
				action.payload as SubMenuItemReorderActionPayload;
			const { subMenuItemsColumns } = state;

			const column =
				subMenuItemsColumns[subMenuItemsColumnsUuid][columnIndex];
			const index = column.indexOf(uuid);

			if (index === 0) {
				return state;
			}

			const newColumn = [...column];
			const prev = newColumn[index - 1];
			newColumn[index - 1] = uuid;
			newColumn[index] = prev;

			subMenuItemsColumns[subMenuItemsColumnsUuid][columnIndex] =
				newColumn;
			return {
				...state,
				subMenuItemsColumns: {
					...subMenuItemsColumns,
					[subMenuItemsColumnsUuid]: [
						...subMenuItemsColumns[subMenuItemsColumnsUuid],
					],
				},
			};
		}

		case MenuStateActionType.SUB_MENU_ITEM_MOVED_DOWN: {
			const { uuid, columnIndex, subMenuItemsColumnsUuid } =
				action.payload as SubMenuItemReorderActionPayload;
			const { subMenuItemsColumns } = state;

			const column =
				subMenuItemsColumns[subMenuItemsColumnsUuid][columnIndex];
			const index = column.indexOf(uuid);

			if (index === column.length - 1) {
				return state;
			}

			const newColumn = [...column];
			const next = newColumn[index + 1];
			newColumn[index + 1] = uuid;
			newColumn[index] = next;

			subMenuItemsColumns[subMenuItemsColumnsUuid][columnIndex] =
				newColumn;

			return {
				...state,
				subMenuItemsColumns: {
					...subMenuItemsColumns,
					[subMenuItemsColumnsUuid]: [
						...subMenuItemsColumns[subMenuItemsColumnsUuid],
					],
				},
			};
		}
		default:
			return state;
	}
};
