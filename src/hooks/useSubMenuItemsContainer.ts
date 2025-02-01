import { useMemo, useState } from 'react';
import { SubMenuItem } from '../app.types';
import { useMenuState } from './useMenuState';

export const useSubMenuItemsContainer = () => {
	const {
		state: {
			menuItemForm,
			subMenuItemsColumns
		},
	} = useMenuState();

	const [newSubItem, setNewSubItem] = useState<Omit<
		SubMenuItem,
		'uuid'
	> | null>(null);

	const [activeColumnIndex, setActiveColumnIndex] = useState<
		number | null
	>(null);

	const [activeSubMenuItemUuid, setActiveSubMenuItemUuid] = useState<
		SubMenuItem['uuid'] | null
	>(null);

	const columnsData = useMemo(() => {
		if (!menuItemForm || !subMenuItemsColumns) return null;
		if (!menuItemForm.subMenuItemsColumnsUuid) return null;

		return subMenuItemsColumns[menuItemForm.subMenuItemsColumnsUuid];
	}, [menuItemForm?.subMenuItemsColumnsUuid, subMenuItemsColumns]);

	const addNewSubItem = (columnIndex: number) => {
		setActiveColumnIndex(columnIndex);
	};

	const deleteNewSubItem = () => {
		setNewSubItem(null);
		setActiveColumnIndex(null);
	};

	return {
		activeSubMenuItemUuid,
		activeColumnIndex,
		newSubItem,
		activeMenuItem: menuItemForm,
		columnsData,
		addNewSubItem,
		deleteNewSubItem,
		setActiveSubMenuItemUuid,
	};
};
