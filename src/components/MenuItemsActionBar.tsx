import { FC } from 'react';
import { useMenuItems } from '../hooks/useMenuItems';
import { Button } from './buttons/Button';

export const MenuItemsActionBar: FC = () => {
	const {
		menuOrderModeEnabled,
		addNewMenuItem,
		saveMenuOrder,
		enableOrderMode,
		disableOrderMode,
	} = useMenuItems();

	return (
		<div className="devmcee-mega-menu-builder-content-action-bar">
			{!menuOrderModeEnabled && (
				<Button
					disabled={menuOrderModeEnabled}
					title="Add menu item"
					testId="menu-items-action-bar__add-menu-item-button"
					onClick={addNewMenuItem}
				/>
			)}
			{menuOrderModeEnabled && <span>Re-Order Mode:</span>}
			{menuOrderModeEnabled && (
				<Button
					title={'Cancel'}
					testId="menu-items-action-bar__toggle-order-mode-button"
					onClick={disableOrderMode}
					theme="danger"
				/>
			)}

			{!menuOrderModeEnabled && (
				<Button
					title={'Re-Order'}
					testId="menu-items-action-bar__toggle-order-mode-button"
					onClick={enableOrderMode}
				/>
			)}
			{menuOrderModeEnabled && (
				<Button
					title="Save"
					testId="menu-items-action-bar__save-order-button"
					onClick={saveMenuOrder}
				/>
			)}
		</div>
	);
};
