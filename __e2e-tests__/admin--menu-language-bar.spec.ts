import { test, expect } from '@playwright/test';

test( 'language tabs are switching', async ( { page } ) => {
	await page.goto( '/wp-admin/post.php?post=12&action=edit&lang=en' );
	// assume there are these 2 languages
	const enButton = page.getByTestId( 'language-tab--en' );
	const etButton = page.getByTestId( 'language-tab--et' );
	expect( enButton ).toBeVisible();
	expect( enButton ).toHaveText( 'en' );
	expect( enButton ).toHaveClass(
		'devmcee-mega-menu-languages-tabs-tab devmcee-mega-menu-languages-tabs-tab--active'
	);

	expect( etButton ).toBeVisible();
	expect( etButton ).toHaveText( 'et' );
	await etButton.click( { force: true } );
	expect( etButton ).toHaveClass(
		'devmcee-mega-menu-languages-tabs-tab devmcee-mega-menu-languages-tabs-tab--active'
	);
} );
