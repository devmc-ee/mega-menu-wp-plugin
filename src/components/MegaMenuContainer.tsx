import { FC } from 'react';
import './MegaMenuContainer.scss';
import { useMegaMenu } from '../hooks/useMegaMenu';
import { MenuItem } from './MenuItem';
import { MenuItemForm } from './MenuItemForm';
import { LanguagesTabsBar } from './LanguagesTabsBar';
import { MegaMenuInitData } from '../app.types';
import { useLanguagesTabsBar } from '../hooks/useLanguagesTabsBar';
import { SubMenuItemsContainer } from './SubMenuItemsContainer';

export const MegaMenuContainer: FC<MegaMenuInitData> = ({
	languages,
	defaultLanguage,
	data,
	endpoints,
	customNonce,
	postID,
}: MegaMenuInitData) => {
	const { activeLanguageTab, setActiveLanguageTab } = useLanguagesTabsBar({
		defaultLanguage,
	});

	const {
		menuItemsListToLocaleMap,
		menuItemsMap,
		subMenuItemsMap,
		subMenuItemsColumnsMap,
		newMenuItem,
		activeFormUuid,
		setActiveFormUuid,
		addNewMenuItem,
		saveMenuItem,
		deletMenuItem,
		createSubItemsColumns,
		deleteSubItemsColumns,
		saveSubItem,
		deleteSubItem,
	} = useMegaMenu({
		languages,
		selectedLanguage: activeLanguageTab,
		data,
		endpoints,
		customNonce,
		postID,
	});

	return (
		<>
			{languages.length && (
				<LanguagesTabsBar
					languages={languages}
					activeLanguageTab={activeLanguageTab}
					setActiveLanguageTab={setActiveLanguageTab}
				/>
			)}
			<div className="devmcee-mega-menu-builder-content-container">
				<div className="devmcee-mega-menu-builder-content__root-menu">
					<div className="devmcee-mega-menu-builder-content-action-bar">
						<button
							type="button"
							className="devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-content-action-button--add"
							onClick={addNewMenuItem}
						>
							Add menu item
						</button>
						<button
							disabled={true}
							type="button"
							className="devmcee-mega-menu-builder-content-action-button devmcee-mega-menu-builder-content-action-button--import"
						>
							Import
						</button>
					</div>
					<div className="devmcee-mega-menu-builder-content-menu-container">
						{menuItemsListToLocaleMap[
							activeLanguageTab || defaultLanguage
						]
							?.values()
							.map((uuid) => {
								return (
									<MenuItem
										key={uuid}
										activeFormUuid={activeFormUuid}
										setActiveFormUuid={setActiveFormUuid}
										{...menuItemsMap[uuid]}
										subMenuItemsMap={subMenuItemsMap}
										subMenuItemsColumns={
											menuItemsMap[uuid].subMenuItemsColumnsUuid
											&& subMenuItemsColumnsMap[
												menuItemsMap[uuid].subMenuItemsColumnsUuid
											]
										}
										onSave={saveMenuItem}
										onDelete={deletMenuItem}
									/>
								);
							})}
						{newMenuItem && (
							<div className="devmcee-mega-menu-builder-menu-item">
								<MenuItemForm
									onDelete={deletMenuItem}
									{...newMenuItem}
									onSave={saveMenuItem}
								/>
							</div>
						)}
					</div>
				</div>
				<div className="devmcee-mega-menu-builder-content__sub-menu">
					<SubMenuItemsContainer
						menuItemsMap={menuItemsMap}
						activeFormUuid={activeFormUuid}
						subMenuItemsMap={subMenuItemsMap}
						subMenuItemsColumnsMap={subMenuItemsColumnsMap}
						onCreateSubItemsColumns={createSubItemsColumns}
						onDeleteSubItemsColumns={deleteSubItemsColumns}
						onSaveSubItem={saveSubItem}
						onDeleteSubItem={deleteSubItem}
					/>
				</div>
			</div>
		</>
	);
};
