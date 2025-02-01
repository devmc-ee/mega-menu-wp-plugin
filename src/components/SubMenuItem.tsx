import { FC } from 'react';
import { SubMenuItem as SubMenuItemType } from '../app.types';
import { Button } from './buttons/Button';
import './SubMenuItem.scss';

type SubMenuItemProps = SubMenuItemType & {
	activeSubItemFormUuid?: SubMenuItemType['uuid'] | null;
	columnIndex: number;
	setFormActive: (uuid: SubMenuItemType['uuid']) => void;
};

export const SubMenuItem: FC<SubMenuItemProps> = ({
	uuid,
	title,
	activeSubItemFormUuid,
	setFormActive,
}: SubMenuItemProps) => {
	return (
		<div className="devmcee-mega-menu-builder-content__sub-menu-item">
			<span className="devmcee-mega-menu-builder-content__sub-menu-item-title">
				{title}
			</span>
			<Button
				title='Edit'
				onClick={() => setFormActive(uuid)}
				disabled={!!activeSubItemFormUuid && activeSubItemFormUuid !== uuid}
				testId={`sub-menu-item-form-${title}__edit-button`}
			/>
		</div>
	)
};
