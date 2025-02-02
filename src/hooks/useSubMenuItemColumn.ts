import { useMemo } from 'react';
import { SubMenuItem, SubMenuItemsList } from '../app.types';
import { useMenuState } from './useMenuState';
import { useMenuMetaState } from './useMenuMetaState';

type Props = {
	subItemUuidList: SubMenuItemsList;
};

export const useSubMenuItemColumn = ({ subItemUuidList }: Props) => {
	const {
		state: { subMenuItems: allSubMenuItems, subMenuItemForm },
		dispatchers: {
			initSubMenuItemForm,
			initSubMenuItemFormForEditing,
			moveSubMenuItemUp,
			moveSubMenuItemDown,
		},
	} = useMenuState();

	const {
		state: { orderModeEnabled },
	} = useMenuMetaState();

	const subMenuItems = useMemo(
		() => subItemUuidList.map((uuid) => allSubMenuItems[uuid]),
		[allSubMenuItems, subItemUuidList]
	);

	const reorderSubMenuItemUp = (uuid: SubMenuItem['uuid']) => {
		const { columnIndex, subMenuItemsColumnsUuid } = allSubMenuItems[uuid];

		moveSubMenuItemUp(uuid, columnIndex, subMenuItemsColumnsUuid);
	};

	const reorderSubMenuItemDown = (uuid: SubMenuItem['uuid']) => {
		const { columnIndex, subMenuItemsColumnsUuid } = allSubMenuItems[uuid];

		moveSubMenuItemDown(uuid, columnIndex, subMenuItemsColumnsUuid);
	};

	return {
		subMenuItems,
		subMenuItemForm,
		orderModeEnabled,
		moveSubMenuItemUp: reorderSubMenuItemUp,
		moveSubMenuItemDown: reorderSubMenuItemDown,
		initSubMenuItemForm,
		initSubMenuItemFormForEditing,
	};
};
