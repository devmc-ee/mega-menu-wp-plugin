import { useMemo } from 'react';
import { MenuItem } from '../app.types';
import { useMenuState } from './useMenuState';
import { useMenuMetaState } from './useMenuMetaState';

export const useMenuItems = () => {
	const {
		state: { menuItemForm, localMenu, menuItems, subMenuItems, subMenuItemsColumns },
		dispatchers: {
			initMenuItemForm,
			initMenuItemFormForEditing,
			removeMenuItemForm,
			deleteMenuItemUuidFromLocalMenu
		}
	} = useMenuState();

	const { state: metaState } = useMenuMetaState();
	const { activeLanguageTab: selectedLanguage } = metaState;

	const activeFormUuid = useMemo(() => menuItemForm?.uuid, [menuItemForm]);
	const setActiveFormUuid = (uuid: MenuItem['uuid']) => initMenuItemFormForEditing(selectedLanguage, uuid);
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
		if (!menuItem.subMenuItemsColumnsUuid) return 0;
		
		return subMenuItemsColumns[menuItem.subMenuItemsColumnsUuid]?.reduce(
			(acc, column) => acc + column.length,
			0
		);
	};

	return {
		menuItems,
		menuItemUuidList: localMenu[selectedLanguage],
		subMenuItemsMap: subMenuItems,
		subMenuItemsColumnsMap: subMenuItemsColumns,
		isNewMenuItemForm: menuItemForm && !menuItemForm?.uuid,
		activeFormUuid,
		addNewMenuItem,
		deletMenuItem,
		setActiveFormUuid,
		getSubMenuItemsAmount,
	};
};

export type UseMegaMenuReturType = ReturnType<typeof useMenuItems>;
