import { FC } from 'react';
import { MenuItem as MenuItemType } from '../app.types';
import './MenuItem.scss';
import { Button } from './buttons/Button';
import { ArrowUpButton } from './buttons/ArrowUpButton';
import { ArrowDownButton } from './buttons/ArrowDownButton';

type MenuItemProps = MenuItemType & {
	activeFormUuid?: MenuItemType['uuid'] | null;
	subMenuItemsAmount: number;
	setActiveFormUuid: (uuid: MenuItemType['uuid']) => void;
	menuOrderModeEnabled: boolean;
	isMoveUpAllowed: boolean;
	isMoveDownAllowed: boolean;
	moveUp: (uuid: MenuItemType['uuid']) => void;
	moveDown: (uuid: MenuItemType['uuid']) => void;
};

export const MenuItem: FC<MenuItemProps> = ({
	activeFormUuid,
	setActiveFormUuid: setFormActive,
	title,
	subMenuItemsAmount,
	uuid,
	isMoveUpAllowed,
	isMoveDownAllowed,
	menuOrderModeEnabled,
	moveUp,
	moveDown,
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
				<span>{`${subMenuItemsAmount} Sub Items`}</span>
				{menuOrderModeEnabled && (
					<div className="devmcee-mega-menu-builder-menu-item__re-order-buttons-container">
						{isMoveUpAllowed && (
							<ArrowUpButton
								disabled={!isMoveUpAllowed}
								onClick={() => moveUp(uuid)}
							/>
						)}
						{isMoveDownAllowed && (
							<ArrowDownButton
								disabled={!isMoveDownAllowed}
								onClick={() => moveDown(uuid)}
							/>
						)}
					</div>
				)}
			</div>
		</div>
	);
};
