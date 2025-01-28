import { FC } from 'react';
import './app.styles.scss';
import { MegaMenuContainer } from './components/MegaMenuContainer';
import { useMenuState } from './hooks/useMenuState';
import { useMenuMetaState } from './hooks/useMenuMetaState';

export const App: FC = () => {
	const { state: initData } = useMenuState()
	const { state: metaState } = useMenuMetaState();

	const { languages, defaultLanguage, ...rest } = metaState;

	return (
		<>
			<div className="devmcee-mega-menu-builder-container">
				<MegaMenuContainer
					defaultLanguage={defaultLanguage || 'en'}
					languages={!languages?.length ? ['en'] : languages}
					data={initData}
					{...rest}
				/>
			</div>
			<details>
				<summary>Data</summary>
				<pre>
					{JSON.stringify(
						initData,
						null,
						2
					)}

				</pre>
			</details>
			<details>
				<summary>Meta</summary>
				<pre>
					{JSON.stringify(
						metaState,
						null,
						2
					)}

				</pre>
			</details>
		</>
	);
};
