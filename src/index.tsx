import { createRoot } from '@wordpress/element';
import { App } from './App';
import { MenuDataContextProvider } from './providers/MenuDataContextProvider';
import { MenuMetaContextProvider } from './providers/MenuMetaContextProvider';

document.addEventListener('DOMContentLoaded', () => {
	const rootElement = document.getElementById('devmcee-mega-menu-root');

	if (rootElement) {
		const root = createRoot(rootElement);
		root.render(
			<MenuMetaContextProvider>
				<MenuDataContextProvider>
					<App />
				</MenuDataContextProvider>
			</MenuMetaContextProvider>
		);
	}
});
