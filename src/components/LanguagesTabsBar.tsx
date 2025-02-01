import { useMenuMetaState } from '../hooks/useMenuMetaState';
import './LanguagesTabsBar.scss';

export const LanguagesTabsBar = () => {
	const { state, dispatchers: { setActiveLanguageTab } } = useMenuMetaState();
	const { languages, activeLanguageTab } = state;

	return (
		<div className="devmcee-mega-menu-languages-tabs-bar-container">
			{languages.map((language) => {
				return (
					<button
						key={language}
						data-TestId={`language-tab--${language}`}
						className={`devmcee-mega-menu-languages-tabs-tab ${activeLanguageTab === language
								? 'devmcee-mega-menu-languages-tabs-tab--active'
								: ''
							}`}
						onClick={() => setActiveLanguageTab(language)}
						type="button"
					>
						{language}
					</button>
				);
			})}
		</div>
	);
};
