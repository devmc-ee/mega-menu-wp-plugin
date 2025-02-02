import { FC, useEffect } from 'react';
import { useMenuState } from '../hooks/useMenuState';
import { useApiRequest } from '../hooks/useApiRequest';
import { useMenuMetaState } from '../hooks/useMenuMetaState';

type Props = {
	children: React.ReactNode;
};

export const ApiServiceProvider: FC<Props> = ({ children }) => {
	const {
		state,
		dispatchers: {
			removeMenuItemForm: closeMenuItemForm,
			removeSubMenuItemForm: closeSubMenuItemForm,
		},
	} = useMenuState();

	const {
		state: { orderSubmitted },
	} = useMenuMetaState();

	const { sendRequest } = useApiRequest();

	useEffect(() => {
		const isMenuItemFormSubmitted = state.menuItemForm?.isSubmitted;
		const isSubMenuItemFormSubmitted = state.subMenuItemForm?.isSubmitted;

		if (isMenuItemFormSubmitted || isSubMenuItemFormSubmitted) {
			sendRequest({
				menuItems: state.menuItems,
				subMenuItems: state.subMenuItems,
				localMenu: state.localMenu,
				subMenuItemsColumns: state.subMenuItemsColumns,
			}).then(() => {
				if (!isSubMenuItemFormSubmitted) {
					closeMenuItemForm();
				}
				closeSubMenuItemForm();
			});
		}
	}, [
		state.menuItemForm?.isSubmitted,
		state.subMenuItemForm?.isSubmitted,
	]);

	useEffect(() => {
		if (orderSubmitted) {
			sendRequest({
				menuItems: state.menuItems,
				subMenuItems: state.subMenuItems,
				localMenu: state.localMenu,
				subMenuItemsColumns: state.subMenuItemsColumns,
			});
		}
	}, [orderSubmitted, state]);

	return children;
};
