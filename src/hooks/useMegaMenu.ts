import { useEffect, useState } from 'react';
import {
	EndpointName,
	LanguageCode,
	MegaMenuInitData,
	MenuItem,
	MenuItemFormData,
	MenuItemsListToLocaleMap,
	MenuItemsMap,
	SubMenuItem,
	SubMenuItemsColumnsMap,
	SubMenuItemsMap,
} from '../app.types';

type UseMegaMenu = {
	languages: LanguageCode[];
	selectedLanguage: LanguageCode;
	endpoints: MegaMenuInitData['endpoints'];
	customNonce: MegaMenuInitData['customNonce'];
	postID: MegaMenuInitData['postID'];
	data: MegaMenuInitData['data'];
};

type SendRequestProps = {
	menuItemsListToLocaleMap: MenuItemsListToLocaleMap;
	menuItemsMap: MenuItemsMap;
	subMenuItemsMap: SubMenuItemsMap;
	subMenuItemsColumnsMap: SubMenuItemsColumnsMap;
	onSuccess: () => void;
};

export const useMegaMenu = ({
	languages,
	selectedLanguage,
	endpoints,
	customNonce,
	postID,
	data,
}: UseMegaMenu) => {
	const [newMenuItem, setNewMenuItem] = useState<Omit<
		MenuItem,
		'uuid'
	> | null>(null);
	const [menuItemsMap, setMenuItemsMap] = useState<MenuItemsMap>(
		data.menuItemsMap || {}
	);
	const [menuItemsListToLocaleMap, setMenuItemsListToLocaleMap] =
		useState<MenuItemsListToLocaleMap>(
			data.menuItemsListToLocaleMap || {}
		);
	const [subMenuItemsMap, setSubMenuItems] = useState<SubMenuItemsMap>(
		data?.subMenuItemsMap || {}
	);
	const [subMenuItemsColumnsMap, setSubMenuItemsColumnsMap] =
		useState<SubMenuItemsColumnsMap>(
			data?.subMenuItemsColumnsMap || {}
		);

	const [activeFormUuid, setActiveFormUuid] = useState<
		MenuItem['uuid'] | null
	>(null);

	const addNewMenuItem = () => {
		setNewMenuItem({
			title: '',
			url: '',
			subMenuItemsColumnsUuid: null,
		});
	};

	const sendRequest = ({
		menuItemsListToLocaleMap,
		menuItemsMap,
		subMenuItemsMap,
		subMenuItemsColumnsMap,
		onSuccess,
	}: SendRequestProps) => {
		fetch(endpoints[EndpointName.SAVE], {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-WP-Nonce': customNonce,
			},
			body: JSON.stringify({
				data: {
					menuItemsListToLocaleMap,
					menuItemsMap,
					subMenuItemsMap,
					subMenuItemsColumnsMap,
				},
				postID,
			}),
		})
			.then((response) => {
				if (response.ok) {
					return response.json();
				}

				throw new Error('Network response was not ok.');
			})
			.then((data) => {
				console.log(data);
				onSuccess();
			})
			.catch((error) => console.error(error));
	};

	const saveMenuItem = (menuItem: MenuItemFormData) => {
		const uuid = menuItem.uuid || crypto.randomUUID();
		const newMenuItemsListToLocaleMap = updateMenuItemsListToLocaleMap(
			menuItemsListToLocaleMap,
			uuid
		);
		const newMenuItemsMap = updateMenuItemsMap(
			menuItemsMap,
			menuItem,
			uuid
		);

		sendRequest({
			menuItemsListToLocaleMap: newMenuItemsListToLocaleMap,
			menuItemsMap: newMenuItemsMap,
			subMenuItemsMap,
			subMenuItemsColumnsMap: subMenuItemsColumnsMap,
			onSuccess: () => {
				setMenuItemsListToLocaleMap(newMenuItemsListToLocaleMap);
				setMenuItemsMap(newMenuItemsMap);

				setNewMenuItem(null);
				setActiveFormUuid(null);
			},
		});
	};

	const updateMenuItemsListToLocaleMap = (
		prev: MenuItemsListToLocaleMap,
		uuid: MenuItem['uuid']
	) => {
		const prevItems = new Set(prev[selectedLanguage]);
		prevItems.add(uuid);

		return {
			...prev,
			[selectedLanguage]: [...prevItems],
		};
	};

	const updateMenuItemsMap = (
		prev: MenuItemsMap,
		menuItem: Omit<MenuItem, 'uuid'>,
		uuid: MenuItem['uuid']
	) => ({
		...prev,
		[uuid]: {
			...menuItem,
			uuid,
		},
	});

	const deleteItemInMenuItemsListToLocaleMap = (
		prev: MenuItemsListToLocaleMap,
		uuid: MenuItem['uuid']
	) => {
		const prevItems = new Set(prev[selectedLanguage]);
		prevItems.delete(uuid);

		return {
			...prev,
			[selectedLanguage]: [...prevItems],
		};
	};

	const deleteItemInMenuItemsMap = (
		prev: MenuItemsMap,
		uuid: MenuItem['uuid']
	) => {
		const { [uuid]: _, ...rest } = prev;
		return rest;
	};

	const deleteSubMenuItemsColumnsMapItem = (
		prev: SubMenuItemsColumnsMap,
		uuid: MenuItem['subMenuItemsColumnsUuid']
	) => {
		if (!uuid) return prev;

		const { [uuid]: _, ...rest } = prev;
		return rest;
	};

	const deletMenuItem = (uuid?: MenuItem['uuid']) => {
		setActiveFormUuid(null);

		if (!uuid) {
			setNewMenuItem(null);
			return;
		}

		const newMenuItemsListToLocaleMap =
			deleteItemInMenuItemsListToLocaleMap(
				menuItemsListToLocaleMap,
				uuid
			);
		const newMenuItemsMap = deleteItemInMenuItemsMap(menuItemsMap, uuid);
		const newSubMenuItemsColumnsMap = deleteSubMenuItemsColumnsMapItem(
			subMenuItemsColumnsMap,
			menuItemsMap[uuid].subMenuItemsColumnsUuid
		);

		sendRequest({
			menuItemsListToLocaleMap: newMenuItemsListToLocaleMap,
			menuItemsMap: newMenuItemsMap,
			subMenuItemsMap: subMenuItemsMap,
			subMenuItemsColumnsMap: newSubMenuItemsColumnsMap,
			onSuccess: () => {
				setMenuItemsListToLocaleMap(newMenuItemsListToLocaleMap);
				setMenuItemsMap(newMenuItemsMap);
				setSubMenuItemsColumnsMap(newSubMenuItemsColumnsMap);
			},
		});
	};

	const createSubItemsColumns = () => {
		const uuid = crypto.randomUUID();

		setSubMenuItemsColumnsMap((prev) => ({
			...prev,
			[uuid]: [[], [], []],
		}));

		if (activeFormUuid) {
			setMenuItemsMap((prev) => ({
				...prev,
				[activeFormUuid]: {
					...prev[activeFormUuid],
					subMenuItemsColumnsUuid: uuid,
				},
			}));
		}
	};
	const deleteSubItemsColumns = () => { };

	const updateSubMenuItemsMap = (
		prev: SubMenuItemsMap,
		subMenuItem: MenuItemFormData
	) => {
		const { uuid } = subMenuItem;

		return {
			...prev,
			[uuid!]: {
				...subMenuItem,
			},
		};
	};

	const updateSubMenuItemsColumnsMap = (
		prev: SubMenuItemsColumnsMap,
		subMenuItem: MenuItemFormData
	) => {
		const { uuid, columnIndex } = subMenuItem;
		const activeFormColumnsUuid =
			menuItemsMap[activeFormUuid!].subMenuItemsColumnsUuid;
		prev[activeFormColumnsUuid!][columnIndex!].push(uuid!);

		return {
			...prev,
			[activeFormColumnsUuid!]: [...prev[activeFormColumnsUuid!]],
		};
	};

	const saveSubItem = (subMenuItem: MenuItemFormData) => {
		subMenuItem.uuid = subMenuItem.uuid || crypto.randomUUID();

		const newSubMenuItemsMap = updateSubMenuItemsMap(
			subMenuItemsMap,
			subMenuItem
		);
		const newSubMenuItemsColumnsMap = updateSubMenuItemsColumnsMap(
			subMenuItemsColumnsMap,
			subMenuItem
		);
		sendRequest({
			menuItemsListToLocaleMap,
			menuItemsMap,
			subMenuItemsMap: newSubMenuItemsMap,
			subMenuItemsColumnsMap: subMenuItemsColumnsMap,
			onSuccess: () => {
				setSubMenuItems(newSubMenuItemsMap);
				setSubMenuItemsColumnsMap(newSubMenuItemsColumnsMap);
			},
		});
	};

	const deleteSubMenuItemsMapItem = (
		prev: SubMenuItemsMap,
		uuid: SubMenuItem['uuid']
	) => {
		const { [uuid]: _, ...rest } = prev;

		return {
			...rest,
		};
	};

	const deleteSubMenuItemFromColoumn = (
		prev: SubMenuItemsColumnsMap,
		uuid: SubMenuItem['uuid'],
		columnIndex: number
	) => {
		const activeFormColumnsUuid =
			menuItemsMap[activeFormUuid!].subMenuItemsColumnsUuid;

		const newSubMenuItemsList = prev[activeFormColumnsUuid!][
			columnIndex!
		].filter((_uuid) => _uuid !== uuid);

		return {
			...prev,
			[activeFormColumnsUuid!]: [...newSubMenuItemsList],
		};
	};

	const deleteSubItem = (
		columnIndex: number,
		uuid?: SubMenuItem['uuid']
	) => {
		if (!uuid) return;

		const newSubMenuItemsMap = deleteSubMenuItemsMapItem(
			subMenuItemsMap,
			uuid
		);
		const newSubMenuItemsColumnsMap = deleteSubMenuItemFromColoumn(
			subMenuItemsColumnsMap,
			uuid,
			columnIndex
		);

		sendRequest({
			menuItemsListToLocaleMap,
			menuItemsMap,
			subMenuItemsMap: newSubMenuItemsMap,
			subMenuItemsColumnsMap: subMenuItemsColumnsMap,
			onSuccess: () => {
				setSubMenuItems(newSubMenuItemsMap);
				setSubMenuItemsColumnsMap(newSubMenuItemsColumnsMap);
			},
		});
	};

	useEffect(() => {
		if (languages.length) {
			const menuItemsListToLocalEntities = languages.map((lang) => [
				lang,
				data?.menuItemsListToLocaleMap[lang] || [],
			]);
			setMenuItemsListToLocaleMap(
				Object.fromEntries(menuItemsListToLocalEntities)
			);
		}
	}, [languages, data.menuItemsListToLocaleMap]);

	return {
		menuItemsMap,
		menuItemsListToLocaleMap,
		subMenuItemsMap: subMenuItemsMap,
		subMenuItemsColumnsMap,
		newMenuItem,
		activeFormUuid,
		createSubItemsColumns,
		deleteSubItemsColumns,
		saveSubItem,
		deleteSubItem,
		addNewMenuItem,
		saveMenuItem,
		deletMenuItem,
		setActiveFormUuid,
	};
};

export type UseMegaMenuReturType = ReturnType<typeof useMegaMenu>;
