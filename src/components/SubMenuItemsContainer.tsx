import { FC } from 'react';
import {
	MenuItem,
	MenuItemFormData,
	MenuItemsMap,
	SubMenuItem,
	SubMenuItemsColumnsMap,
	SubMenuItemsMap,
} from '../app.types';
import { useSubMenuItems } from '../hooks/useSubMenuItems';
import './SubMenuItemsContainer.scss';
import { SubMenuItemColumn } from './SubMenuItemColumn';

type Props = {
	menuItemsMap: MenuItemsMap;
	activeFormUuid: MenuItem['uuid'] | null;
	subMenuItemsMap: SubMenuItemsMap;
	subMenuItemsColumnsMap: SubMenuItemsColumnsMap;
	onCreateSubItemsColumns: () => void;
	onDeleteSubItemsColumns: () => void;
	onSaveSubItem: (subItem: MenuItemFormData) => void;
	onDeleteSubItem: (
		columnIndex: number,
		uuid?: SubMenuItem['uuid']
	) => void;
};

export const SubMenuItemsContainer: FC<Props> = ({
	menuItemsMap,
	activeFormUuid,
	subMenuItemsMap,
	subMenuItemsColumnsMap,
	onCreateSubItemsColumns,
	onSaveSubItem,
	onDeleteSubItem,
}: Props) => {
	const {
		activeSubMenuItemUuid,
		activeMenuItem,
		columnsData,
		newSubItem,
		activeColumnIndex,
		addNewSubItem,
		deleteNewSubItem,
		setActiveSubMenuItemUuid,
	} = useSubMenuItems({
		menuItemsMap,
		activeFormUuid,
		subMenuItemsMap,
		subMenuItemsColumnsMap,
	});

	return (
		<div className="devmcee-mega-menu-builder-content__sub-menu-container">
			{!activeMenuItem && (
				<div className="devmcee-mega-menu-builder-content__sub-menu-placeholder">
					Start editing a menu item to see it's sub items
				</div>
			)}
			{activeMenuItem
				&& !activeMenuItem?.subMenuItemsColumnsUuid
				&& (
					<button
						type="button"
						className="devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-content-action-button--add"
						onClick={onCreateSubItemsColumns}
					>
						Add sub items
					</button>
				)}
			{activeMenuItem
				&& columnsData?.length
				&& columnsData.map((subItemUuidList, i) => {
					return (
						<SubMenuItemColumn
							key={i}
							columnIndex={i}
							activeSubMenuItemUuid={activeSubMenuItemUuid}
							activeColumnIndex={activeColumnIndex}
							subItemUuidList={subItemUuidList}
							newSubItem={newSubItem}
							subMenuItemsMap={subMenuItemsMap}
							setActiveSubMenuItemUuid={
								setActiveSubMenuItemUuid
							}
							saveSubMenuItem={(...props) => {
								deleteNewSubItem();
								onSaveSubItem(...props);
							}}
							addNewSubItem={addNewSubItem}
							onDeleteSubItem={(...props) => {
								deleteNewSubItem();
								onDeleteSubItem(...props);
							}}
						/>
					);
				})}
		</div>
	);
};
