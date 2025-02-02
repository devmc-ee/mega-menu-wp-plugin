import { FC } from 'react';
import { useMenuItems } from '../hooks/useMenuItems';
import { MenuItem } from './MenuItem';
import { MenuItemForm } from './forms/MenuItemForm';

export const MenuItemsContainer: FC = () => {
	const {
		menuItemUuidList,
		menuItems,
		isNewMenuItemForm: isNewMenuItemForm,
		activeFormUuid,
		menuOrderModeEnabled,
		moveMenuItemUp,
		moveMenuItemDown,
		getSubMenuItemsAmount,
		setActiveFormUuid,
	} = useMenuItems();

	return (
		<div className="devmcee-mega-menu-builder-content-menu-container">
			{menuItemUuidList.map((uuid, i) => {
				return !activeFormUuid || activeFormUuid !== uuid ? (
					<MenuItem
						key={uuid}
						activeFormUuid={activeFormUuid}
						setActiveFormUuid={setActiveFormUuid}
						menuOrderModeEnabled={menuOrderModeEnabled}
						isMoveUpAllowed={i > 0}
						isMoveDownAllowed={i < menuItemUuidList.length - 1}
						moveUp={moveMenuItemUp}
						moveDown={moveMenuItemDown}
						{...menuItems[uuid]}
						subMenuItemsAmount={getSubMenuItemsAmount(uuid)}
					/>
				) : (
					<div className="devmcee-mega-menu-builder-menu-item">
						<MenuItemForm
							subMenuItemsAmount={getSubMenuItemsAmount(uuid)}
						/>
					</div>
				);
			})}
			{isNewMenuItemForm && (
				<div className="devmcee-mega-menu-builder-menu-item">
					<MenuItemForm />
				</div>
			)}
		</div>
	);
};
