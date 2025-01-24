import { useEffect, useState } from 'react';
import {
	LanguageCode,
	MenuItem,
	MenuItemFormData,
	MenuItemsListToLocaleMap,
	MenuItemsMap,
	SubMenuItemsMap,
} from '../app.types';

type UseMegaMenu = {
	languages: LanguageCode[];
	selectedLanguage: LanguageCode;
};

export const useMegaMenu = ( { languages, selectedLanguage }: UseMegaMenu ) => {
	const [ newMenuItem, setNewMenuItem ] = useState< Omit<
		MenuItem,
		'uuid'
	> | null >( null );
	const [ menuItemsMap, setMenuItemsMap ] = useState< MenuItemsMap >( {} );
	const [ menuItemsListToLocaleMap, setMenuItemsListToLocaleMap ] =
		useState< MenuItemsListToLocaleMap >( {} );
	const [ subMenuItemsMap, setSubMenuItems ] = useState< SubMenuItemsMap >(
		{}
	);
	const [ activeFormUuid, setActiveFormUuid ] = useState<
		MenuItem[ 'uuid' ] | null
	>( null );

	const addNewMenuItem = () => {
		setNewMenuItem( {
			title: '',
			url: '',
			subItemsList: [],
		} );
	};

	const saveMenuItem = ( menuItem: MenuItemFormData ) => {
		const uuid = menuItem.uuid || crypto.randomUUID();
		// send request to server -> save it in db
		setMenuItemsListToLocaleMap( ( prev ) => {
			const prevItems = new Set( prev[ selectedLanguage ] );
			prevItems.add( uuid );

			return {
				...prev,
				[ selectedLanguage ]: [ ...prevItems ],
			};
		} );
		setMenuItemsMap( ( prev ) => ( {
			...prev,
			[ uuid ]: {
				...menuItem,
				uuid,
			},
		} ) );
		setNewMenuItem( null );
		setActiveFormUuid( null );
		// add menu item to menuItemsMap & menuItemsList
	};

	const deletMenuItem = ( uuid?: MenuItem[ 'uuid' ] ) => {
		setActiveFormUuid( null );

		if ( ! uuid ) {
			setNewMenuItem( null );
			return;
		}
		// send request to server -> delete it from db
		setMenuItemsListToLocaleMap( ( prev ) => {
			const prevItems = new Set( prev[ selectedLanguage ] );
			prevItems.delete( uuid );

			return {
				...prev,
				[ selectedLanguage ]: [ ...prevItems ],
			};
		} );

		setMenuItemsMap( ( prev ) => {
			const { [ uuid ]: _, ...rest } = prev;
			return rest;
		} );
	};

	useEffect( () => {
		if ( languages.length ) {
			const menuItemsListToLocalEntities = languages.map( ( lang ) => [
				lang,
				new Set< MenuItem[ 'uuid' ] >(),
			] );
			setMenuItemsListToLocaleMap(
				Object.fromEntries( menuItemsListToLocalEntities )
			);
		}
	}, [ languages ] );

	return {
		menuItemsMap,
		menuItemsListToLocaleMap,
		subMenuItemsMap: subMenuItemsMap,
		newMenuItem,
		activeFormUuid,
		addNewMenuItem,
		saveMenuItem,
		deletMenuItem,
		setActiveFormUuid,
	};
};

export type UseMegaMenuReturType = ReturnType< typeof useMegaMenu >;
