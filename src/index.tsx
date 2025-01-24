import { createRoot } from '@wordpress/element';
import { App } from './App';

document.addEventListener( 'DOMContentLoaded', () => {
	const rootElement = document.getElementById( 'devmcee-mega-menu-root' );

	if ( rootElement ) {
		const root = createRoot( rootElement );
		root.render( <App /> );
	}
} );
