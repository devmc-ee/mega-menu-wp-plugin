import { test, expect } from '@playwright/test';

test( 'admin menu page has title', async ( { page } ) => {
	await page.goto( '/wp-admin/post.php?post=12&action=edit&lang=en' );
	await expect( page ).toHaveTitle( /Edit Mega Menu/ );
} );

test( 'open and delete menu item form', async ( { page } ) => {
	await page.goto( '/wp-admin/post.php?post=12&action=edit&lang=en' );
	await page
		.getByTestId( 'menu-items-action-bar__add-menu-item-button' )
		.click( { force: true } );
	await expect(
		page.locator( 'form.devmcee-mega-menu-builder-menu-item-form' )
	).toBeVisible();
	// cancel form
	await expect(
		page.getByTestId( 'menu-item-form__delete-button' )
	).toBeDisabled();
	await page
		.getByTestId( 'menu-item-form__cancel-button' )
		.click( { force: true } );
	await expect(
		page.locator( 'form.devmcee-mega-menu-builder-menu-item-form' )
	).toBeHidden();
} );

test( 'add nem menu item, edit menu item, delete item', async ( { page } ) => {
	const title = `menu-item-${ Date.now() }`;
	await page.goto( '/wp-admin/post.php?post=12&action=edit&lang=en' );

	// add new menu item
	await page
		.getByTestId( 'menu-items-action-bar__add-menu-item-button' )
		.click( { force: true } );
	await expect( page.locator( '_react=MenuItemForm' ) ).toBeVisible();

	expect(
		await page.getByTestId( 'menu-item-form__save-button' ).isDisabled()
	).toBeTruthy();

	await page.getByTestId( 'menu-item-form__title' ).fill( title );
	expect(
		await page.getByTestId( 'menu-item-form__title' ).inputValue()
	).toBe( title );

	expect(
		await page.getByTestId( 'menu-item-form__save-button' ).isDisabled()
	).toBeTruthy();

	await page.getByTestId( 'menu-item-form__url' ).fill( '/new-menu-item' );
	await expect(
		page.getByTestId( 'menu-item-form__save-button' )
	).toBeEnabled();
	await page.getByTestId( 'menu-item-form__save-button' ).click();

	// open edit form
	await expect( page.locator( '_react=MenuItemForm' ) ).toBeHidden();
	await expect( page.getByTestId( `${ title }-edit-button` ) ).toBeVisible();
	await page.getByTestId( `${ title }-edit-button` ).click();

	// expect to see data in form
	await page.locator( '_react=MenuItemForm' ).isVisible();
	await expect( page.locator( '_react=MenuItemForm' ) ).toBeVisible();
	const titleInput = page.getByTestId( 'menu-item-form__title' );
	await titleInput.isVisible();
	const urlInput = page.getByTestId( 'menu-item-form__url' );
	await urlInput.isVisible();
	await expect( titleInput ).toBeVisible();
	await expect( urlInput ).toBeVisible();

	await titleInput.fill( title + '2' );
	await urlInput.fill( '/new-menu-item2' );

	// cancel edit
	await page
		.getByTestId( 'menu-item-form__cancel-button' )
		.click( { force: true } );
	await expect(
		page.locator( 'form.devmcee-mega-menu-builder-menu-item-form' )
	).toBeHidden();

	// open edit again
	await page.getByTestId( `${ title }-edit-button` ).scrollIntoViewIfNeeded();
	await expect( page.getByTestId( `${ title }-edit-button` ) ).toBeVisible();
	await page.getByTestId( `${ title }-edit-button` ).click( { force: true } );
	await expect(
		page.getByTestId( 'menu-item-form__cancel-button' )
	).toBeVisible();
	await page.locator( '_react=MenuItemForm' ).isVisible();

	// no changes
	expect( await page.getByTestId( 'menu-item-form__url' ).inputValue() ).toBe(
		'/new-menu-item'
	);

	// delete
	const deleteButton = page.getByTestId( `${ title }__delete-button` );
	await deleteButton.isVisible();
	await expect( deleteButton ).toBeVisible();
	await expect( deleteButton ).toBeEnabled();
	await deleteButton.click( { force: true } );

	await expect(
		page.locator( 'form.devmcee-mega-menu-builder-menu-item-form' )
	).toBeHidden();
	expect( await page.getByTestId( `${ title }-edit-button` ).count() ).toBe(
		0
	);
} );
