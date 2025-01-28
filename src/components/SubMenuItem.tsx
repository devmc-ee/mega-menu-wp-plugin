import { FC, useState } from 'react';
import { MenuItemForm } from './MenuItemForm';
import { MenuItemFormData, SubMenuItem as SubMenuItemType } from '../app.types';

type SubMenuItemProps = SubMenuItemType & {
	activeSubItemFormUuid: SubMenuItemType['uuid'] | null;
	columnIndex: number;
	onSave: (props: MenuItemFormData) => void;
	onDelete: () => void;
	setFormActive: (uuid: SubMenuItemType['uuid']) => void;
};

export const SubMenuItem: FC<SubMenuItemProps> = ({
	uuid,
	title,
	url,
	classes,
	activeSubItemFormUuid,
	columnIndex,
	setFormActive,
	onSave,
	onDelete,
}: SubMenuItemProps) => {
	const [isEditMode, setIsEditMode] = useState(false);

	return !isEditMode ? (
		<div className="devmcee-mega-menu-builder-content__sub-menu-item">
			<span className="devmcee-mega-menu-builder-content__sub-menu-item-title">
				{title}
			</span>
			<button
				disabled={
					activeSubItemFormUuid !== null &&
					activeSubItemFormUuid !== uuid
				}
				type="button"
				className="devmcee-mega-menu-builder-content-action-button"
				onClick={() => {
					setIsEditMode(true);
					setFormActive(uuid);
				}}
			>
				Edit
			</button>
		</div>
	) : (
		<MenuItemForm
			title={title}
			columnIndex={columnIndex}
			url={url}
			classes={classes}
			uuid={uuid}
			onSave={(props) => {
				onSave(props);
				setIsEditMode(false);
			}}
			onDelete={onDelete}
		/>
	);
};
