import {
	MenuItemFormData,
	SubMenuItem as SubMenuItemType,
	SubMenuItemsMap,
} from '../app.types';
import { MenuItemForm } from './MenuItemForm';
import { SubMenuItem } from './SubMenuItem';

type Props = {
	newSubItem:
	| (Omit<SubMenuItemType, 'uuid'> & {
		uuid?: SubMenuItemType['uuid'];
	})
	| null;
	columnIndex: number;
	subMenuItemsMap: SubMenuItemsMap;
	subItemUuidList: SubMenuItemType['uuid'][];
	activeColumnIndex: number | null;
	activeSubMenuItemUuid: SubMenuItemType['uuid'] | null;
	addNewSubItem: (columnIndex: number) => void;
	saveSubMenuItem: (subMenuItem: MenuItemFormData) => void;
	onDeleteSubItem: (
		columnIndex: number,
		uuid?: SubMenuItemType['uuid']
	) => void;
	setActiveSubMenuItemUuid: (
		uuid: SubMenuItemType['uuid'] | null
	) => void;
};

export const SubMenuItemColumn = ({
	newSubItem,
	subItemUuidList,
	columnIndex,
	activeColumnIndex,
	subMenuItemsMap,
	activeSubMenuItemUuid,
	addNewSubItem,
	saveSubMenuItem,
	onDeleteSubItem,
	setActiveSubMenuItemUuid,
}: Props) => {
	return (
		<div className="devmcee-mega-menu-builder-content__sub-menu-column">
			<div className="devmcee-mega-menu-builder-content__sub-menu-column-header">
				<button
					type="button"
					className="devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-content-action-button--add"
					onClick={() => addNewSubItem(columnIndex)}
				>
					Add sub item
				</button>
			</div>
			<div className="devmcee-mega-menu-builder-content__sub-menu-column-content">
				{!newSubItem 
					&& subItemUuidList.length === 0 
					&& 'No sub items'}
				{subItemUuidList.map((uuid) => {
					return (
						<SubMenuItem
							activeSubItemFormUuid={activeSubMenuItemUuid}
							key={uuid}
							columnIndex={columnIndex}
							{...subMenuItemsMap[uuid]}
							onSave={saveSubMenuItem}
							onDelete={() =>
								onDeleteSubItem(columnIndex, uuid)
							}
							setFormActive={setActiveSubMenuItemUuid}
						/>
					);
				})}
				{newSubItem && activeColumnIndex === columnIndex && (
					<div className="devmcee-mega-menu-builder-content__sub-menu-item">
						<MenuItemForm
							onSave={saveSubMenuItem}
							onDelete={() =>
								onDeleteSubItem(columnIndex, newSubItem.uuid)
							}
							title={newSubItem.title}
							url={newSubItem.url}
							columnIndex={columnIndex}
							classes={newSubItem.classes}
							uuid={newSubItem.uuid}
							subMenuItemsColumnsUuid={null}
						/>
					</div>
				)}
			</div>
		</div>
	);
};
