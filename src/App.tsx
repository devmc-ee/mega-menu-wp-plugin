import { FC } from 'react';
import { MegaMenuInitData } from './app.types';
import './app.styles.scss';
import { MegaMenuContainer } from './components/MegaMenuContainer';

// Data passed from PHP
declare var devmceeMegaMenuInitData: MegaMenuInitData;

export const App: FC = () => {
	const { languages, defaultLanguage, data, ...rest } =
		devmceeMegaMenuInitData;

	console.log('devmceeMegaMenuInitData', devmceeMegaMenuInitData);
	return (
		<>
			<div className="devmcee-mega-menu-builder-container">
				<MegaMenuContainer
					defaultLanguage={defaultLanguage || 'en'}
					languages={!languages?.length ? ['en'] : languages}
					data={
						data || {
							menuItemsMap: {},
							menuItemsListToLocaleMap: {},
							subMenuItemsMap: {},
							subMenuItemsColumnsMap: {},
						}
					}
					{...rest}
				/>
			</div>
			<pre>
				{JSON.stringify(
					{
						subMenuItemsMap: data.subMenuItemsMap,
						menuItemsMap: data.menuItemsMap,
						menuItemsListToLocaleMap: data.menuItemsListToLocaleMap,
						subMenuItemsColumnsMap: data.subMenuItemsColumnsMap,
					},
					null,
					2
				)}
			</pre>
		</>
	);
};
