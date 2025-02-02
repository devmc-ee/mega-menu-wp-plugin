import { useMemo } from 'react';
import { MenuItem } from '../app.types';
import { useMenuState } from './useMenuState';
import { useMenuMetaState } from './useMenuMetaState';

export const useMenuItems = () => {
	const {
		state: {
			menuItemForm,
			localMenu,
			menuItems,
			subMenuItems,
			subMenuItemsColumns,
			subMenuItemForm,
		},
		dispatchers: {
			initMenuItemForm,
			initMenuItemFormForEditing,
			removeMenuItemForm,
			deleteMenuItemUuidFromLocalMenu,
			moveMenuItemUp,
			moveMenuItemDown,
		},
	} = useMenuState();

	const {
		state: { activeLanguageTab: selectedLanguage, orderModeEnabled },
		dispatchers: { enableOrderMode, disableOrderMode, saveMenuOrder },
	} = useMenuMetaState();

	const activeFormUuid = useMemo(
		() => menuItemForm?.uuid,
		[menuItemForm]
	);
	const setActiveFormUuid = (uuid: MenuItem['uuid']) =>
		initMenuItemFormForEditing(selectedLanguage, uuid);
	const addNewMenuItem = () => initMenuItemForm(selectedLanguage);

	const deletMenuItem = async (uuid?: MenuItem['uuid']) => {
		if (!uuid) {
			removeMenuItemForm();
			return;
		}

		deleteMenuItemUuidFromLocalMenu(uuid, selectedLanguage);
	};

	const getSubMenuItemsAmount = (uuid: MenuItem['uuid']): number => {
		const menuItem = menuItems[uuid];
		if (!menuItem.subMenuItemsColumnsUuid) {
			return 0;
		}

		return subMenuItemsColumns[menuItem.subMenuItemsColumnsUuid]?.reduce(
			(acc, column) => acc + column.length,
			0
		);
	};

	const disableOrderModeWithReaload = () => {
		disableOrderMode();
		window.location.reload();
	};

	const reorderMenuItemUp = (uuid: MenuItem['uuid']) => {
		moveMenuItemUp(uuid, selectedLanguage);
	};

	const reorderMenuItemDown = (uuid: MenuItem['uuid']) => {
		moveMenuItemDown(uuid, selectedLanguage);
	};

	return {
		menuItems,
		menuItemUuidList: localMenu[selectedLanguage],
		subMenuItemsMap: subMenuItems,
		subMenuItemsColumnsMap: subMenuItemsColumns,
		isNewMenuItemForm: menuItemForm && !menuItemForm?.uuid,
		activeFormUuid,
		menuOrderModeEnabled: orderModeEnabled,
		isAllowedToEnableOrderMode: !menuItemForm && !subMenuItemForm,
		moveMenuItemUp: reorderMenuItemUp,
		moveMenuItemDown: reorderMenuItemDown,
		saveMenuOrder,
		addNewMenuItem,
		deletMenuItem,
		setActiveFormUuid,
		getSubMenuItemsAmount,
		enableOrderMode,
		disableOrderMode: disableOrderModeWithReaload,
	};
};

export type UseMegaMenuReturType = ReturnType<typeof useMenuItems>;
