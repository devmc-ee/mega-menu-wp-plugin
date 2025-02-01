export type ValueOf<T> = T[keyof T];
export type MegaMenuData = {
	localMenu: LocalMenu;
	menuItems: MenuItems;
	subMenuItems: SubMenuItems;
	subMenuItemsColumns: SubMenuItemsColumns;
};

export type LanguageCode = string;

export const EndpointName = {
	SAVE: 'save',
} as const;

export type EndpointName = ValueOf<typeof EndpointName>;
export type EndpointMap = Record<EndpointName, string>;

export type MegaMenuInitData = {
	languages: LanguageCode[];
	defaultLanguage: LanguageCode;
	data: MegaMenuData;
	endpoints: EndpointMap;
	customNonce: string;
	postID: number;
};

export type MenuItemBase = {
	uuid: UUID;
	title: string;
	url: string;
	classes?: string;
};

export type SubMenuItemsList = SubMenuItem['uuid'][];

export type MenuItem = MenuItemBase & {
	languageCode: LanguageCode,
	subMenuItemsColumnsUuid: keyof SubMenuItemsColumns | null;
};

export type MenuItems = Record<MenuItem['uuid'], MenuItem>;
export type MenuItemsList = MenuItem['uuid'][];

export type LocalMenu = Record<LanguageCode, MenuItemsList>;

export type SubMenuItem = MenuItemBase & {
	description: string;
	columnIndex: number;
};

export type SubMenuItems = Record<SubMenuItem['uuid'], SubMenuItem>;
export type SubMenuItemsColumns = Record<UUID, SubMenuItemsList[]>;

export type MenuItemFormData = Omit<MenuItem, 'uuid'> & {
	uuid?: MenuItem['uuid'];
	description?: string;
	columnIndex?: number;
};

export type SaveMenuRequestBody = {
	data: MegaMenuData;
	postID: number;
};

// reducers
export type Action<T extends string, P extends unknown> = {
	type: T;
	payload: P;
}

export type UUID = `${string}-${string}-${string}-${string}-${string}`;