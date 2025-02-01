import { test, expect } from '@playwright/test';

test.describe('Admin: Sub Menu Items', () => {
  test('add, edit, delete sub-item', async ({ page }) => {
    await page.goto('/wp-admin/post.php?post=12&action=edit&lang=en');
    await page.getByTestId('add-menu-item-button').click();
    await expect(page.locator('form.devmcee-mega-menu-builder-menu-item-form')).toBeVisible();

    // creat menu item
    const menuItemTitle = `menu-item-${Date.now()}`;
    await page.getByTestId('menu-item-form__title').scrollIntoViewIfNeeded();
    await expect(page.getByTestId('menu-item-form__title')).toBeVisible();
    await page.getByTestId('menu-item-form__title').fill(menuItemTitle);
    expect(await page.getByTestId('menu-item-form__title').inputValue()).toBe(menuItemTitle);

    await page.getByTestId('menu-item-form__url').fill('/new-menu-item');
    const saveMenuItemButton = page.getByTestId('menu-item-form__save-button');

    await saveMenuItemButton.click();

    await expect(saveMenuItemButton).toBeHidden();
    // open edit form
    await page.getByTestId(`${menuItemTitle}-edit-button`).scrollIntoViewIfNeeded();
    await expect(page.getByTestId(`${menuItemTitle}-edit-button`)).toBeEnabled();
    await expect(page.getByTestId(`${menuItemTitle}-edit-button`)).toBeVisible();
    await page.getByTestId(`${menuItemTitle}-edit-button`).click();

    // add sub-menu items
    const addSubItemsButton = page.getByTestId('add-sub-items-button');
    await expect(addSubItemsButton.first()).toBeVisible();
    await addSubItemsButton.scrollIntoViewIfNeeded();
    await addSubItemsButton.click();

    // add new sub-menu item
    const addSubItemButton = page.getByTestId('sub-items-column-0__add-sub-item-button');
    await expect(addSubItemButton).toBeVisible();
    await addSubItemButton.click();
    await page.getByTestId('sub-menu-item-form').isVisible();
    await expect(page.getByTestId('sub-menu-item-form')).toBeVisible();

    // cancel form
    const formCancelButton = page.getByTestId('sub-menu-item-form__cancel-button');
    await formCancelButton.isVisible();
    await expect(formCancelButton).toBeVisible();
    await expect(formCancelButton).toBeEnabled();
    await expect(formCancelButton).toHaveAccessibleName('Cancel');
    await formCancelButton.click();
    await expect(page.getByTestId('sub-menu-item-form')).toBeHidden();

    // add new sub-menu item again
    await expect(page.getByTestId('sub-items-column-0__add-sub-item-button')).toBeVisible();
    await page.getByTestId('sub-items-column-0__add-sub-item-button').click();
    await page.getByTestId('sub-menu-item-form').isVisible();
    await expect(page.getByTestId('sub-menu-item-form')).toBeVisible();

    // fill form
    const subMenuItemTitle = `sub-menu-item-${Date.now()}`;
    await expect(page.getByTestId('sub-menu-item-form__title')).toBeVisible();
    await expect(page.getByTestId('sub-menu-item-form__description')).toBeVisible();
    await expect(page.getByTestId('sub-menu-item-form__url')).toBeVisible();

    await page.getByTestId('sub-menu-item-form__title').fill(subMenuItemTitle);
    await page.getByTestId('sub-menu-item-form__description').fill(`description-${Date.now()}`);
    await page.getByTestId('sub-menu-item-form__url').fill(`/new-menu-item/${subMenuItemTitle}`);

    // save sub-menu item
    const saveSubMenuItemButton = page.getByTestId('sub-menu-item-form__save-button');
    await expect(saveSubMenuItemButton).toBeVisible();
    await expect(saveSubMenuItemButton).toBeEnabled();

    await saveSubMenuItemButton.click();
    await expect(page.getByTestId('sub-menu-item-form')).toBeHidden();

    // edit sub-menu item
    const subMenuEditButton = page.getByTestId(`sub-menu-item-form-${subMenuItemTitle}__edit-button`);
    await expect(subMenuEditButton).toBeVisible();
    await expect(subMenuEditButton).toBeEnabled();
    await subMenuEditButton.click();
    await expect(page.getByTestId('sub-menu-item-form')).toBeVisible();
    const editedSubMenuItemTitle = subMenuItemTitle + '-edited';

    await page.getByTestId('sub-menu-item-form__title').fill(editedSubMenuItemTitle);
    await saveSubMenuItemButton.click();
    await expect(page.getByTestId('sub-menu-item-form')).toBeHidden();

    // delete sub-menu item
    const subMenuEditedEditButton = page.getByTestId(`sub-menu-item-form-${editedSubMenuItemTitle}__edit-button`)
    await expect(subMenuEditedEditButton).toBeVisible();
    await expect(subMenuEditedEditButton).toBeEnabled();
    await subMenuEditedEditButton.click();
    await expect(page.getByTestId('sub-menu-item-form')).toBeVisible();
    const deleteSubMenuItemButton = page.getByTestId('sub-menu-item-form__delete-button');
    await expect(deleteSubMenuItemButton).toBeVisible();
    await expect(deleteSubMenuItemButton).toBeEnabled();
    await deleteSubMenuItemButton.click();
    await expect(page.getByTestId('sub-menu-item-form')).toBeHidden();
    await expect(subMenuEditedEditButton).toBeHidden();

    // delete menu item
    const deleteMenuItemButton = page.getByTestId(`${menuItemTitle || 'menu-item-form'}__delete-button`);
    await expect(deleteMenuItemButton).toBeVisible();
    await expect(deleteMenuItemButton).toBeEnabled();
    await deleteMenuItemButton.click();
    await expect(page.getByText(menuItemTitle)).toBeHidden();
  })
})
