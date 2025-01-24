import { FC } from 'react';
import { MenuItem, MenuItemFormData } from '../app.types';
import { useMenuItemForm } from '../hooks/useMenuItemForm';
import './MenuItemForm.scss';

export type Props = MenuItemFormData & {
	onSave: ( menuItem: MenuItemFormData ) => void;
	onDelete: ( uuid?: MenuItem[ 'uuid' ] ) => void;
};

export const MenuItemForm: FC< Props > = ( {
	onSave,
	onDelete,
	...rest
}: Props ) => {
	const { headerTitle, canSubmit, form, save, changeField, deleteItem } =
		useMenuItemForm( { onSave, onDelete, ...rest } );

	return (
		<form
			autoComplete="off"
			onSubmit={ save }
			className="devmcee-mega-menu-builder-menu-item-form"
		>
			<div className="devmcee-mega-menu-builder-menu-item-form-title-bar">
				<span className="devmcee-mega-menu-builder-menu-item-form-title">
					{ headerTitle }
				</span>
				<span></span>
			</div>

			<div className="devmcee-mega-menu-builder-menu-item-form__fields-container">
				<input
					required={ true }
					type="text"
					name="title"
					placeholder="title"
					value={ form.title }
					onChange={ changeField }
				/>
				<input
					required={ true }
					type="text"
					name="url"
					placeholder="url"
					value={ form.url }
					onChange={ changeField }
				/>
				<input
					type="text"
					name="classes"
					placeholder="classes"
					value={ form.classes }
					onChange={ changeField }
				/>
			</div>

			<div className="devmcee-mega-menu-builder-menu-item-form__footer-actions-container">
				<button
					onClick={ deleteItem }
					type="button"
					className="devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-content-action-button--delete"
				>
					Delete
				</button>
				<button
					type="submit"
					disabled={ ! canSubmit }
					className="devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-menu-item-action-button"
					onSubmit={ save }
				>
					Save
				</button>
			</div>
		</form>
	);
};
