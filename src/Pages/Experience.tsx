import React from 'react';
import { useTranslation } from '../Components/Translate';
import { Article } from '../Components/Article';
import { PageHeader } from '../Components/PageHeader';
import { Section } from '../Components/Section';

export const Experience = () => {
    const header = useTranslation('Experience.header');
    return (
        <Article>
            <PageHeader />
            <Section>
                <h1>{header}</h1>
            </Section>
        </Article>
    );
};
