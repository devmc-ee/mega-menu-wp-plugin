import {
	ChangeEvent,
	FormEvent,
	useMemo,
	useState,
} from 'react';
import { MenuItem, MenuItemFormData } from '../app.types';

type UseMenuItemFormData = MenuItemFormData & {
	onSave: ( menuItem: MenuItemFormData ) => void;
	onDelete: ( uuid?: MenuItem[ 'uuid' ] ) => void;
};

export const useMenuItemForm = ( {
	title,
	url,
	classes,
	uuid,
	subItemsList,
	onSave,
	onDelete,
}: UseMenuItemFormData ) => {
	const [ form, setForm ] = useState< MenuItemFormData >( {
		title,
		url,
		classes,
		uuid,
		subItemsList,
	} );

	const canSubmit = useMemo(
		() => !! form.title && !! form.url,
		[ form.title, form.url ]
	);
	const headerTitle = useMemo(
		() => ( uuid ? form.title : `${ form.title || 'New item' }` ),
		[ uuid, form.title ]
	);

	const save = (
		event: FormEvent< HTMLButtonElement | HTMLFormElement >
	) => {
		event.preventDefault();

		if ( ! form.title || ! form.url ) {
			return;
		}
		onSave( form );
	};

	const changeField = ( event: ChangeEvent< HTMLInputElement > ) => {
		const { name, value } = event.target;

		setForm( ( prev ) => ( {
			...prev,
			[ name ]: value,
		} ) );
	};

	const deleteItem = () => {
		onDelete( form.uuid );
	};

	return {
		form,
		headerTitle,
		canSubmit,
		save,
		changeField,
		deleteItem,
	};
};
