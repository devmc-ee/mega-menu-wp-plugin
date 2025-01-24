import { LanguageCode } from '../app.types';
import './LanguagesTabsBar.scss';

type LanguagesTabsBarProps = {
	languages: LanguageCode[];
	activeLanguageTab: LanguageCode;
	setActiveLanguageTab: ( language: LanguageCode ) => void;
};

export const LanguagesTabsBar = ( {
	languages,
	activeLanguageTab,
	setActiveLanguageTab,
}: LanguagesTabsBarProps ) => {
	return (
		<div className="devmcee-mega-menu-languages-tabs-bar-container">
			{ languages.map( ( language ) => {
				return (
					<button
						key={ language }
						className={ `devmcee-mega-menu-languages-tabs-tab ${
							activeLanguageTab === language
								? 'devmcee-mega-menu-languages-tabs-tab--active'
								: ''
						}` }
						onClick={ () => setActiveLanguageTab( language ) }
						type="button"
					>
						{ language }
					</button>
				);
			} ) }
		</div>
	);
};
