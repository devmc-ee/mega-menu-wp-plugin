import { FC } from 'react';
import './MenuItemForm.scss';
import { Button } from '../buttons/Button';
import { useSubMenuItemForm } from '../../hooks/useSubMenuItemForm';

export const SubMenuItemForm: FC = () => {
	const {
		headerTitle,
		canSubmit,
		form,
		save,
		changeField,
		deleteItem,
		closeForm,
	} = useSubMenuItemForm();

	return (
		<form
			autoComplete="off"
			onSubmit={save}
			data-TestId="sub-menu-item-form"
			className="devmcee-mega-menu-builder-menu-item-form"
		>
			<div className="devmcee-mega-menu-builder-menu-item-form-title-bar">
				<span className="devmcee-mega-menu-builder-menu-item-form-title">
					{headerTitle}
				</span>
				<Button
					title="Cancel"
					testId="sub-menu-item-form__cancel-button"
					onClick={closeForm}
				/>
			</div>

			<div className="devmcee-mega-menu-builder-menu-item-form__fields-container">
				<input
					required={true}
					type="text"
					name="title"
					data-TestId="sub-menu-item-form__title"
					placeholder="title"
					value={form?.title}
					onChange={changeField}
				/>
				<textarea
					required={true}
					name="description"
					placeholder="description"
					data-TestId="sub-menu-item-form__description"
					value={form?.description}
					onChange={changeField}
				></textarea>
				<input
					required={true}
					type="text"
					data-TestId="sub-menu-item-form__url"
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
					title="Delete"
					disabled={!form?.uuid}
					onClick={deleteItem}
					testId={`sub-menu-item-form__delete-button`}
					theme="danger"
				/>
				<Button
					title="Save"
					testId="sub-menu-item-form__save-button"
					onClick={save}
					type="submit"
					disabled={!canSubmit}
				/>
			</div>
		</form>
	);
};
