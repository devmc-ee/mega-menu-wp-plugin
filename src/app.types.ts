import { UUID } from 'node:crypto';

export type MegaMenuData = {};

export type LanguageCode = string;

export type MegaMenuInitData = {
	languages: LanguageCode[];
	defaultLanguage: LanguageCode;
	data: MegaMenuData;
};

export type MenuItemBase = {
	uuid: UUID;
	title: string;
	url: string;
	classes?: string;
};

export type MenuItem = MenuItemBase & {
	subItemsList: SubMenuItem[ 'uuid' ][];
};

export type MenuItemsMap = Record< MenuItem[ 'uuid' ], MenuItem >;
export type MenuItemsList = MenuItem[ 'uuid' ][];

export type MenuItemsListToLocaleMap = Record< LanguageCode, MenuItemsList >;

export type SubMenuItem = MenuItemBase & {
	description: string;
};

export type SubMenuItemsMap = Record< SubMenuItem[ 'uuid' ], SubMenuItem >;

export type MenuItemFormData = Omit< MenuItem, 'uuid' > & {
	uuid?: MenuItem[ 'uuid' ];
};
