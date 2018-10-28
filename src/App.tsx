import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Sidebar } from './Components/Sidebar';
import { Topbar } from './Components/Topbar';
import styled from 'styled-components';
import { Pages } from './Components/Pages';
import { LocaleContext, Locale } from './LocaleContext';
import { LocaleSelector } from './Components/LocaleSelector';

const MainLayout = styled.div`
    display: flex;
    flex: 1 1 0;
    flex-direction: column;
`;

const ContentLayout = styled.div`
    display: flex;
    flex: 1 1 0;
`;

const initialLocale: Locale | null = window.localStorage.getItem('cv-locale') as Locale | null;

export const App = () => {
    const [locale, setLocale] = useState<Locale>(initialLocale || 'en_GB');
    const setAndStoreLocale = useMemo(
        () => (locale: Locale) => {
            window.localStorage.setItem('cv-locale', locale);
            setLocale(locale);
        },
        [initialLocale],
    );
    return (
        <Router>
            <LocaleContext.Provider value={locale}>
                <MainLayout>
                    <Topbar>
                        <LocaleSelector locale={locale} onChange={setAndStoreLocale} />
                    </Topbar>
                    <ContentLayout>
                        <Sidebar />
                        <Pages />
                    </ContentLayout>
                </MainLayout>
            </LocaleContext.Provider>
        </Router>
    );
};
