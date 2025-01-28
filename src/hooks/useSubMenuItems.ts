import { useMemo, useState } from 'react';
import {
	MenuItem,
	MenuItemsMap,
	SubMenuItem,
	SubMenuItemsColumnsMap,
	SubMenuItemsMap,
} from '../app.types';

type UseSubMenuItemsProps = {
	menuItemsMap: MenuItemsMap;
	activeFormUuid: MenuItem['uuid'] | null;
	subMenuItemsMap: SubMenuItemsMap;
	subMenuItemsColumnsMap: SubMenuItemsColumnsMap;
};
export const useSubMenuItems = ({
	menuItemsMap,
	activeFormUuid,
	subMenuItemsMap,
	subMenuItemsColumnsMap,
}: UseSubMenuItemsProps) => {
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

	const activeMenuItem = useMemo(
		() => (activeFormUuid ? menuItemsMap[activeFormUuid] : null),
		[activeFormUuid, menuItemsMap]
	);

	const columnsData = useMemo(() => {
		if (!activeMenuItem || !subMenuItemsColumnsMap) return null;
		if (!activeMenuItem.subMenuItemsColumnsUuid) return null;

		return subMenuItemsColumnsMap[activeMenuItem.subMenuItemsColumnsUuid];
	}, [activeMenuItem?.subMenuItemsColumnsUuid, subMenuItemsColumnsMap]);

	const addNewSubItem = (columnIndex: number) => {
		setActiveColumnIndex(columnIndex);
		setNewSubItem({
			title: '',
			url: '',
			description: '',
		});
	};

	const deleteNewSubItem = () => {
		setNewSubItem(null);
		setActiveColumnIndex(null);
	};

	return {
		activeSubMenuItemUuid,
		activeColumnIndex,
		newSubItem,
		addNewSubItem,
		activeMenuItem,
		columnsData,
		deleteNewSubItem,
		setActiveSubMenuItemUuid,
	};
};
