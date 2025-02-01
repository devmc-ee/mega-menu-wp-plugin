import { ChangeEvent, FormEvent, useMemo } from 'react';
import { useMenuState } from './useMenuState';
import { MenuItemForm } from '../reducers/menuState.types';

export const useMenuItemForm = () => {
	const {
		state: {
			menuItemForm,
		},
		dispatchers: {
			changeMenuItemFieldValue,
			saveMenuItem,
			removeMenuItem,
			removeMenuItemForm,
			initSubMenuItemColumns
		}
	} = useMenuState();

	const canSubmit = useMemo(
		() => menuItemForm && menuItemForm.title && menuItemForm.url,
		[menuItemForm?.title, menuItemForm?.url]
	);

	const headerTitle = useMemo(
		() => {
			if (!menuItemForm) {
				return '';
			}

			return menuItemForm.uuid ? menuItemForm.title : `${menuItemForm.title || 'New item'}`
		},
		[menuItemForm?.uuid, menuItemForm?.title]
	);

	const save = async (
		event: FormEvent<HTMLButtonElement | HTMLFormElement>
	) => {
		event.preventDefault();

		if (
			!menuItemForm?.title
			|| !menuItemForm?.url
		) {
			return;
		}

		saveMenuItem();
	};

	const changeField = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;

		changeMenuItemFieldValue(name as keyof MenuItemForm, value);
	};

	const deleteItem = () => {
		if (!menuItemForm?.uuid) {
			return removeMenuItemForm();
		}

		return removeMenuItem()
	};

	const closeForm = () => {
		removeMenuItemForm();
	};
	
	const addSubMenuItemColumns = () => {
		initSubMenuItemColumns(crypto.randomUUID());
	}
	
	return {
		form: menuItemForm,
		headerTitle,
		canSubmit,
		save,
		changeField,
		deleteItem,
		closeForm,
		addSubMenuItemColumns
	};
};
