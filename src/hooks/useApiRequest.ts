import { useMemo } from 'react';
import { EndpointName, MegaMenuData } from '../app.types';
import { useMenuMetaState } from './useMenuMetaState';

export const useApiRequest = () => {
	const { state: metaState } = useMenuMetaState();

	const { customNonce, postID, endpoints } = metaState;

	const url = useMemo(() => endpoints[EndpointName.SAVE], [endpoints]);

	const sendRequest = async (data: MegaMenuData) => {
		const response = await fetch(url, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'X-WP-Nonce': customNonce,
			},
			body: JSON.stringify({
				data,
				postID,
			}),
		});

		if (!response.ok) {
			throw new Error('Network response was not ok.');
		}
		return response.json();
	};

	return {
		sendRequest,
	};
};
