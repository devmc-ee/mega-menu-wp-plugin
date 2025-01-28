import { UUID } from 'node:crypto';

export type ValueOf<T> = T[keyof T];
export type MegaMenuData = {
	menuItemsListToLocaleMap: MenuItemsListToLocaleMap;
	menuItemsMap: MenuItemsMap;
	subMenuItemsMap: SubMenuItemsMap;
	subMenuItemsColumnsMap: SubMenuItemsColumnsMap;
};

export type LanguageCode = string;

export const EndpointName = {
	SAVE: 'save',
} as const;

export type EndpointName = ValueOf<typeof EndpointName>;
export type EndpointMap =  Record<EndpointName, string>;

export type MegaMenuInitData = {
	languages: LanguageCode[];
	defaultLanguage: LanguageCode;
	data: MegaMenuData;
	endpoints:EndpointMap;
	customNonce: string;
	postID: number;
};

export type MenuItemBase = {
	uuid: UUID;
	title: string;
	url: string;
	classes?: string;
};

export type SubMenuItemsColumn = SubMenuItem['uuid'][];

export type MenuItem = MenuItemBase & {
	subMenuItemsColumnsUuid: keyof SubMenuItemsColumnsMap | null;
};

export type MenuItemsMap = Record<MenuItem['uuid'], MenuItem>;
export type MenuItemsList = MenuItem['uuid'][];

export type MenuItemsListToLocaleMap = Record<LanguageCode, MenuItemsList>;

export type SubMenuItem = MenuItemBase & {
	description: string;
};

export type SubMenuItemsMap = Record<SubMenuItem['uuid'], SubMenuItem>;
export type SubMenuItemsColumnsMap = Record<UUID, SubMenuItemsColumn[]>;

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
export type UnknownAction<T extends string, P> = {
  type: T;
  payload: P;
}
