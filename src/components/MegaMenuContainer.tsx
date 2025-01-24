import { FC } from 'react';
import './MegaMenuContainer.scss';
import { useMegaMenu } from '../hooks/useMegaMenu';
import { MenuItem } from './MenuItem';
import { MenuItemForm } from './MenuItemForm';
import { LanguagesTabsBar } from './LanguagesTabsBar';
import { MegaMenuInitData, MenuItem as MenuItemType } from '../app.types';
import { useLanguagesTabsBar } from '../hooks/useLanguagesTabsBar';

export const MegaMenuContainer: FC< MegaMenuInitData > = ( {
	languages,
	defaultLanguage,
}: MegaMenuInitData ) => {
	const { activeLanguageTab, setActiveLanguageTab } = useLanguagesTabsBar( {
		defaultLanguage,
	} );

	const {
		menuItemsListToLocaleMap,
		menuItemsMap,
		subMenuItemsMap,
		newMenuItem,
		activeFormUuid,
		setActiveFormUuid,
		addNewMenuItem,
		saveMenuItem,
		deletMenuItem,
	} = useMegaMenu( { languages, selectedLanguage: activeLanguageTab } );

	return (
		<>
			{ languages.length && (
				<LanguagesTabsBar
					languages={ languages }
					activeLanguageTab={ activeLanguageTab }
					setActiveLanguageTab={ setActiveLanguageTab }
				/>
			) }
			<div className="devmcee-mega-menu-builder-content-container">
				<div className="devmcee-mega-menu-builder-content__root-menu">
					<div className="devmcee-mega-menu-builder-content-action-bar">
						<button
							type="button"
							className="devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-content-action-button--add"
							onClick={ addNewMenuItem }
						>
							Add menu item
						</button>
						<button
							disabled={ true }
							type="button"
							className="devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-content-action-button--import"
						>
							Import
						</button>
					</div>
					<div className="devmcee-mega-menu-builder-content-menu-container">
						{ menuItemsListToLocaleMap[
							activeLanguageTab || defaultLanguage
						]
							?.values()
							.map( ( uuid ) => {
								return (
									<MenuItem
										key={ uuid }
										activeFormUuid={ activeFormUuid }
										setActiveFormUuid={ setActiveFormUuid }
										{ ...menuItemsMap[ uuid ] }
										onSave={ saveMenuItem }
										onDelete={ deletMenuItem }
									/>
								);
							} ) }
						{ newMenuItem && (
							<div className="devmcee-mega-menu-builder-menu-item">
								<MenuItemForm
									onDelete={ deletMenuItem }
									{ ...newMenuItem }
									onSave={ saveMenuItem }
								/>
							</div>
						) }
					</div>
				</div>
				<div className="devmcee-mega-menu-builder-content__sub-menu">
					<pre>
						{ JSON.stringify(
							{
								menuItemsListToLocaleMap,
								menuItemsMap,
								subMenuItemsMap: subMenuItemsMap,
								newMenuItem,
							},
							null,
							2
						) }
					</pre>
				</div>
			</div>
		</>
	);
};
