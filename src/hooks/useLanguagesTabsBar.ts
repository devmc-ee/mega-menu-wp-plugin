import { useState } from 'react';

type UseLanguagesTabsBarProps = {
	defaultLanguage: string;
};

export const useLanguagesTabsBar = ( {
	defaultLanguage,
}: UseLanguagesTabsBarProps ): UseLanguagesTabsBarReturnType => {
	const [ activeLanguageTab, setActiveLanguageTab ] =
		useState( defaultLanguage );

	return {
		activeLanguageTab,
		setActiveLanguageTab,
	};
};

type UseLanguagesTabsBarReturnType = {
	activeLanguageTab: string;
	setActiveLanguageTab: ( language: string ) => void;
};
