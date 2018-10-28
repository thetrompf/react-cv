import React from 'react';
import { PageHeader } from '../Components/PageHeader';
import { Article } from '../Components/Article';
import { useTranslation } from '../Components/Translate';
import { Section } from '../Components/Section';

export const BaseInfo = () => {
    const header = useTranslation('BaseInfo.header');
    return (
        <Article>
            <PageHeader />
            <Section>
                <h1>{header}</h1>
            </Section>
        </Article>
    );
};
