import React from 'react';

export type Locale = 'da_DK' | 'en_GB';

const initialLocale: Locale = 'en_GB';
export const LocaleContext = React.createContext(initialLocale as Locale);
