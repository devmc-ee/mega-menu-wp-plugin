import { FC } from 'react';
import { useMenuItemForm } from '../../hooks/useMenuItemForm';
import './MenuItemForm.scss';
import { Button } from '../buttons/Button';

type Props = {
	subMenuItemsAmount?: number;
};

export const MenuItemForm: FC<Props> = ({
	subMenuItemsAmount
}) => {
	const {
		headerTitle,
		canSubmit,
		form,
		save,
		changeField,
		deleteItem,
		closeForm,
		addSubMenuItemColumns
	} = useMenuItemForm();

	return (
		<form
			autoComplete="off"
			onSubmit={save}
			className="devmcee-mega-menu-builder-menu-item-form"
		>
			<div className="devmcee-mega-menu-builder-menu-item-form-title-bar">
				<span className="devmcee-mega-menu-builder-menu-item-form-title">
					{headerTitle}
				</span>
				<Button
					title="Cancel"
					testId='menu-item-form__cancel-button'
					onClick={closeForm}
				/>
			</div>

			<div className="devmcee-mega-menu-builder-menu-item-form__fields-container">
				<input
					required={true}
					type="text"
					name="title"
					data-TestId="menu-item-form__title"
					placeholder="title"
					value={form?.title}
					onChange={changeField}
				/>

				<input
					required={true}
					type="text"
					data-TestId="menu-item-form__url"
					name="url"
					placeholder="url"
					value={form?.url}
					onChange={changeField}
				/>
				<input
					type="text"
					name="classes"
					placeholder="classes"
					value={form?.classes}
					onChange={changeField}
				/>
			</div>

			<div className="devmcee-mega-menu-builder-menu-item-form__footer-actions-container">
				<Button
					title='Delete'
					disabled={!form?.uuid || !!subMenuItemsAmount && subMenuItemsAmount > 0}
					onClick={deleteItem}
					testId={`${form?.title || 'menu-item-form'}__delete-button`}
					classes='devmcee-mega-menu-builder-content-action-button--delete'
				/>
				{form?.uuid && !form?.subMenuItemsColumnsUuid && (
					<Button
						title="Add sub items"
						onClick={addSubMenuItemColumns}
						testId='add-sub-items-button'
					/>)}
				<Button
					title='Save'
					testId='menu-item-form__save-button'
					onClick={save}
					type="submit"
					disabled={!canSubmit}
				/>
			</div>
		</form>
	);
};
