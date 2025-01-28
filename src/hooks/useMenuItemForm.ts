import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import { MenuItem, MenuItemFormData } from '../app.types';

type UseMenuItemFormData = Omit<
	MenuItemFormData,
	'subMenuItemsColumnsUuid'
> & {
	columnIndex?: number;
	subMenuItemsColumnsUuid?: MenuItem['subMenuItemsColumnsUuid'];
	onSave: (menuItem: MenuItemFormData) => void;
	onDelete: (uuid?: MenuItem['uuid']) => void;
};

export const useMenuItemForm = ({
	title,
	url,
	classes,
	uuid,
	subMenuItemsColumnsUuid,
	description,
	columnIndex,
	onSave,
	onDelete,
}: UseMenuItemFormData) => {
	const [form, setForm] = useState<MenuItemFormData>({
		title,
		url,
		classes,
		uuid,
		description,
		subMenuItemsColumnsUuid: subMenuItemsColumnsUuid || null,
		columnIndex,
	});

	const isSubMenu = useMemo(
		() => typeof columnIndex === 'number',
		[columnIndex]
	);

	const canSubmit = useMemo(
		() =>
			!isSubMenu
				? !!form.title && !!form.url
				: !!form.title && !!form.url && !!form.description,
		[form.title, form.url, form.description]
	);

	const headerTitle = useMemo(
		() => (uuid ? form.title : `${form.title || 'New item'}`),
		[uuid, form.title]
	);

	const save = (
		event: FormEvent<HTMLButtonElement | HTMLFormElement>
	) => {
		event.preventDefault();

		if (
			!form.title ||
			!form.url ||
			(isSubMenu && !form.description)
		) {
			return;
		}

		onSave(form);
	};

	const changeField = (
		event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = event.target;

		setForm((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const deleteItem = () => {
		onDelete(form.uuid);
	};

	useEffect(() => {
		setForm((prev) => ({
			...prev,
			subMenuItemsColumnsUuid: subMenuItemsColumnsUuid || null,
		}));
	}, [subMenuItemsColumnsUuid]);
	return {
		form,
		headerTitle,
		canSubmit,
		save,
		changeField,
		deleteItem,
	};
};
