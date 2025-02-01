import { FC } from 'react';
import './MegaMenuContainer.scss';
import { LanguagesTabsBar } from './LanguagesTabsBar';
import { SubMenuItemsContainer } from './SubMenuItemsContainer';
import { MenuItemsContainer } from './MenuItemsContainer';
import { MenuItemsActionBar } from './MenuItemsActionBar';

export const MenuContainer: FC = () => (
	<>
		<LanguagesTabsBar />
		<div className="devmcee-mega-menu-builder-content-container">
			<div className="devmcee-mega-menu-builder-content__root-menu">
				<MenuItemsActionBar />
				<MenuItemsContainer />
			</div>
			<div className="devmcee-mega-menu-builder-content__sub-menu">
				<SubMenuItemsContainer />
			</div>
		</div>
	</>
);
