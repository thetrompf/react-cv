import React, { useContext } from 'react';
import { LocaleContext, Locale } from '../LocaleContext';
import da_DK from '../i18n/da_DK';
import en_GB from '../i18n/en_GB';
import { assertNever } from '../Util';

type I18nKey = keyof typeof da_DK | keyof typeof en_GB;

export function translate(i18nKey: I18nKey, locale: Locale): string {
    switch (locale) {
        case 'da_DK':
            return da_DK[i18nKey];
        case 'en_GB':
            return en_GB[i18nKey];
        default:
            return assertNever(locale, `Unknown locale: ${locale}`);
    }
}

interface Props {
    i18nKey: I18nKey;
}

export const useTranslation = (i18nKey: I18nKey) => {
    const locale = useContext<Locale, typeof LocaleContext>(LocaleContext);
    return translate(i18nKey, locale);
};

export const Translate: React.SFC<Props> = props => {
    const translatedValue = useTranslation(props.i18nKey);
    return <span>{translatedValue || props.i18nKey}</span>;
};
