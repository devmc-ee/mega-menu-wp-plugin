import { FC, useMemo, useState } from 'react';
import {
	MenuItemFormData,
	MenuItem as MenuItemType,
	SubMenuItemsColumn,
	SubMenuItemsMap,
} from '../app.types';
import { MenuItemForm } from './MenuItemForm';
import './MenuItem.scss';

type MenuItemProps = MenuItemType & {
	activeFormUuid: MenuItemType['uuid'] | null;
	subMenuItemsMap: SubMenuItemsMap;
	subMenuItemsColumns: SubMenuItemsColumn[] | null;
	setActiveFormUuid: (uuid: MenuItemType['uuid']) => void;
	onSave: (menuItem: MenuItemFormData) => void;
	onDelete: (uuid?: MenuItemType['uuid']) => void;
};

export const MenuItem: FC<MenuItemProps> = ({
	activeFormUuid,
	setActiveFormUuid: setFormActive,
	onDelete,
	onSave,
	title,
	subMenuItemsMap,
	subMenuItemsColumns,
	subMenuItemsColumnsUuid,
	...rest
}) => {
	const [isEditMode, setIsEditMode] = useState(false);

	const subMenuItemsAmount = useMemo(
		() =>
			subMenuItemsColumns?.reduce(
				(acc, column) => acc + column.length,
				0
			) || 0,
		[subMenuItemsColumns]
	);

	return (
		<div className="devmcee-mega-menu-builder-menu-item">
			{!isEditMode ? (
				<>
					<div className="devmcee-mega-menu-builder-menu-item-title-container">
						<span className="devmcee-mega-menu-builder-menu-item-title">
							{title}
						</span>
						<button
							disabled={
								activeFormUuid !== null &&
								activeFormUuid !== rest.uuid
							}
							type="button"
							className="devmcee-mega-menu-builder-content-action-button"
							onClick={() => {
								setIsEditMode(true);
								setFormActive(rest.uuid);
							}}
						>
							Edit
						</button>
					</div>
					<div className="devmcee-mega-menu-builder-menu-item__sub-title-container">
						{subMenuItemsColumnsUuid &&
							`Sub items amount: ${subMenuItemsAmount}`}
					</div>
				</>
			) : (
				<MenuItemForm
					title={title}
					subMenuItemsColumnsUuid={subMenuItemsColumnsUuid}
					{...rest}
					onSave={(props) => {
						onSave(props);
						setIsEditMode(false);
					}}
					onDelete={onDelete}
				/>
			)}
		</div>
	);
};
