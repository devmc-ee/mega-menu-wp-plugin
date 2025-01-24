import { FC, useState } from 'react';
import { MenuItemFormData, MenuItem as MenuItemType } from '../app.types';
import { MenuItemForm } from './MenuItemForm';
import './MenuItem.scss';

type MenuItemProps = MenuItemType & {
	activeFormUuid: MenuItemType[ 'uuid' ] | null;
	setActiveFormUuid: ( uuid: MenuItemType[ 'uuid' ] ) => void;
	onSave: ( menuItem: MenuItemFormData ) => void;
	onDelete: ( uuid?: MenuItemType[ 'uuid' ] ) => void;
};

export const MenuItem: FC< MenuItemProps > = ( {
	activeFormUuid,
	setActiveFormUuid: setFormActive,
	onDelete,
	onSave,
	title,
	subItemsList,
	...rest
} ) => {
	const [ isEditMode, setIsEditMode ] = useState( false );

	return (
		<div className="devmcee-mega-menu-builder-menu-item">
			{ ! isEditMode ? (
				<>
					<div className="devmcee-mega-menu-builder-menu-item-title-container">
						<span className="devmcee-mega-menu-builder-menu-item-title">
							{ title }
						</span>
						<button
							disabled={
								activeFormUuid !== null &&
								activeFormUuid !== rest.uuid
							}
							type="button"
							className="devmcee-mega-menu-builder-content-action-button"
							onClick={ () => {
								setIsEditMode( true );
								setFormActive( rest.uuid );
							} }
						>
							Edit
						</button>
					</div>
					<div className="devmcee-mega-menu-builder-menu-item-sub-title-container">
						{ subItemsList.length > 0 &&
							`${ subItemsList.length } sub items` }
					</div>
				</>
			) : (
				<MenuItemForm
					title={ title }
					subItemsList={ subItemsList }
					{ ...rest }
					onSave={ ( props ) => {
						onSave( props );
						setIsEditMode( false );
					} }
					onDelete={ onDelete }
				/>
			) }
		</div>
	);
};
