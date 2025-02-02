import { beforeEach, describe, expect, it, jest } from '@jest/globals';
import { useMenuState } from '../src/hooks/useMenuState';

import { act, renderHook } from '@testing-library/react';
import { MenuDataContextProvider } from '../src/providers/MenuDataContextProvider';
import { ApiServiceProvider } from '../src/providers/ApiServiceProvider';

describe('useApiRequest', () => {
	beforeEach(() => {
		global.fetch = jest.fn(() =>
			Promise.resolve({
				ok: true,
				statusText: 'ok',
				status: 200,
				json: () =>
					Promise.resolve({
						message: 'success',
					}),
			} as Response)
		);
	});

	it('Should send request with the menu state data', async () => {
		//@ts-ignore
		const wrapper = ({ children }) => (
			<MenuDataContextProvider>
				<ApiServiceProvider>{children}</ApiServiceProvider>
			</MenuDataContextProvider>
		);

		const { result: useMenuResult } = renderHook(() => useMenuState(), {
			wrapper,
		});
		act(() => {
			useMenuResult.current.dispatchers.initMenuItemForm('en');
			useMenuResult.current.dispatchers.changeMenuItemFieldValue(
				'title',
				'test title'
			);
			useMenuResult.current.dispatchers.changeMenuItemFieldValue(
				'url',
				'/test-url'
			);
			useMenuResult.current.dispatchers.saveMenuItem();
		});

		expect(fetch).toBeCalledWith('', {
			body: JSON.stringify({
				data: {
					menuItems: useMenuResult.current.state.menuItems,
					subMenuItems: useMenuResult.current.state.subMenuItems,
					localMenu: useMenuResult.current.state.localMenu,
					subMenuItemsColumns:
						useMenuResult.current.state.subMenuItemsColumns,
				},
				postID: 0,
			}),
			headers: {
				'Content-Type': 'application/json',
				'X-WP-Nonce': '',
			},
			method: 'POST',
		});
	});
});
