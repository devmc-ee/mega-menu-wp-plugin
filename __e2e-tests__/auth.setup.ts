import { test as setup, expect } from '@playwright/test';
import path from 'path';

const authFile = path.join( __dirname, '../playwright/.auth/user.json' );

setup( 'authenticate', async ( { page } ) => {
	// Perform authentication steps. Replace these actions with your own.
	await page.goto( '/wp-admin/post.php?post=12&action=edit&lang=en' );

	// Enter credentials.
	await page.locator( '#user_login' ).fill( 'devmcee' );
	await page.locator( '#user_pass' ).fill( 'k7^mF5SRqwv6^6Jjit' );
	await page.locator( '#wp-submit' ).click();
	// Wait until the page receives the cookies.
	//
	// Sometimes login flow sets cookies in the process of several redirects.
	// Wait for the final URL to ensure that the cookies are actually set.
	await page.waitForURL( '/wp-admin/post.php?post=12&action=edit&lang=en' );
	await expect( page ).toHaveTitle( /Edit Mega Menu/ );

	// End of authentication steps.

	await page.context().storageState( { path: authFile } );
} );
