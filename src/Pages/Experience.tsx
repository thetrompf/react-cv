import React from 'react';
import { useTranslation } from '../Components/Translate';
import { Article } from '../Components/Article';
import { PageHeader } from '../Components/PageHeader';
import { Section } from '../Components/Section';
import { Tagline } from '../Components/Tagline';
import { ArticleBody } from '../Components/ArticleBody';
import { HorizontalRuler } from '../Components/HorizontalRuler';

export const Experience = () => {
    const header = useTranslation('Experience.header');
    const tagline = useTranslation('Experience.tagline');
    const body = useTranslation('Experience.body');
    return (
        <Article>
            <PageHeader />
            <Section>
                <h1>{header}</h1>
                <HorizontalRuler />
                <Tagline>{tagline}</Tagline>
                <ArticleBody>{body}</ArticleBody>
            </Section>
        </Article>
    );
};
