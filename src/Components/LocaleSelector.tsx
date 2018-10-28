import React, { useMemo } from 'react';
import { Locale } from '../LocaleContext';
import styled from 'styled-components';
import cx from 'classnames';
import { translate } from './Translate';

const Layout = styled.div`
    display: flex;
    flex: 0 0 0px;
    justify-content: space-between;
    min-width: 50px;
    max-height: 18px;

    .flag-icon {
        cursor: pointer;
        transition: box-shadow 300ms;
        box-shadow: 0px 0px 0px 0px lightgray;
    }
    .flag-icon.active {
        box-shadow: 0px 0px 10px 0px lightgray;
    }
`;

interface Props {
    locale: Locale;
    onChange: (locale: Locale) => void;
}

export const LocaleSelector: React.SFC<Props> = props => {
    const handleClick = (locale: Locale) => (e: React.MouseEvent<HTMLImageElement>) => {
        e.preventDefault();
        e.stopPropagation();
        props.onChange(locale);
    };

    return (
        <Layout>
            <span
                className={cx('flag-icon flag-icon-dk', {
                    active: props.locale === 'da_DK',
                })}
                onClick={useMemo(() => handleClick('da_DK'), ['da_DK'])}
                title={translate('LocaleSelector.da_DK.title', props.locale)}
            />
            <span
                className={cx('flag-icon flag-icon-gb', {
                    active: props.locale === 'en_GB',
                })}
                onClick={useMemo(() => handleClick('en_GB'), ['en_GB'])}
                title={translate('LocaleSelector.en_GB.title', props.locale)}
            />
        </Layout>
    );
};
