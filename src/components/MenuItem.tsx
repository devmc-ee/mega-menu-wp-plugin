import { FC } from 'react';
import {
	MenuItem as MenuItemType,
} from '../app.types';
import './MenuItem.scss';
import { Button } from './buttons/Button';

type MenuItemProps = MenuItemType & {
	activeFormUuid?: MenuItemType['uuid'] | null;
	subMenuItemsAmount: number;
	setActiveFormUuid: (uuid: MenuItemType['uuid']) => void;
};

export const MenuItem: FC<MenuItemProps> = ({
	activeFormUuid,
	setActiveFormUuid: setFormActive,
	title,
	subMenuItemsAmount,
	uuid
}) => {
	return (
		<div className="devmcee-mega-menu-builder-menu-item">
			<div className="devmcee-mega-menu-builder-menu-item-title-container">
				<span className="devmcee-mega-menu-builder-menu-item-title">
					{title}
				</span>
				<Button
					title="Edit"
					disabled={!!activeFormUuid && activeFormUuid !== uuid}
					onClick={() => setFormActive(uuid)}
					testId={`${title}-edit-button`}
				/>
			</div>
			<div className="devmcee-mega-menu-builder-menu-item__sub-title-container">
				{`${subMenuItemsAmount} Sub Items`}
			</div>
		</div>
	);
};
