import { FC } from 'react';
import './app.styles.scss';
import { MenuContainer } from './components/MenuContainer';
import { MenuDataPrinter } from './components/MenuDataPrinter';

export const App: FC = () => {
	return (
		<>
			<div className="devmcee-mega-menu-builder-container">
				<MenuContainer />
			</div>
			<MenuDataPrinter />
		</>
	);
};
