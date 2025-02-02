import { FC } from 'react';

import { useSubMenuItemsContainer } from '../hooks/useSubMenuItemsContainer';
import './SubMenuItemsContainer.scss';
import { SubMenuItemColumn } from './SubMenuItemColumn';

export const SubMenuItemsContainer: FC = () => {
	const { activeMenuItem, columnsData } = useSubMenuItemsContainer();

	return (
		<div className="devmcee-mega-menu-builder-content__sub-menu-container">
			{(!activeMenuItem ||
				(activeMenuItem && !activeMenuItem.uuid)) && (
					<div className="devmcee-mega-menu-builder-content__sub-menu-placeholder">
						{!activeMenuItem
							? ``
							: `Save menu item to add sub items`}
					</div>
				)}
			{activeMenuItem && columnsData?.length &&
				columnsData.map((subItemUuidList, i) => {
					return (
						<SubMenuItemColumn
							key={i}
							columnIndex={i}
							subItemUuidList={subItemUuidList}
						/>
					);
				})}
		</div>
	);
};
