import React from 'react';
import { useTranslation, I18nKey } from '../Components/Translate';
import { Article } from '../Components/Article';
import { PageHeader } from '../Components/PageHeader';
import { Section } from '../Components/Section';
import { Tagline } from '../Components/Tagline';
import { HorizontalRuler } from '../Components/HorizontalRuler';
import styled from 'styled-components';

const List = styled.ol`
    counter-reset: item;
`;
const ListItem = styled.li`
    display: block;
    &::before {
        font-weight: 600;
        content: counter(item) '. ';
        counter-increment: item;
    }
`;

const legend: I18nKey[] = [
    'Skillset.legend.Basic knowledge',
    'Skillset.legend.Knowledge',
    'Skillset.legend.Experience',
    'Skillset.legend.Advanced',
    'Skillset.legend.Expert',
];

const skills: { [key: string]: I18nKey } = {
    'Skillset.technology.Javascript.title': 'Skillset.technology.Javascript.body',
    'Skillset.technology.HTML.title': 'Skillset.technology.HTML.body',
    'Skillset.technology.CSS.title': 'Skillset.technology.CSS.body',
    'Skillset.technology.PHP.title': 'Skillset.technology.PHP.body',
    'Skillset.technology.SQL.title': 'Skillset.technology.SQL.body',
    'Skillset.technology.Docker.title': 'Skillset.technology.Docker.body',
    'Skillset.technology.GraphQL.title': 'Skillset.technology.GraphQL.body',
    'Skillset.technology.Bash.title': 'Skillset.technology.Bash.body',
    'Skillset.technology.ElasticSearch.title': 'Skillset.technology.ElasticSearch.body',
    'Skillset.technology.Java.title': 'Skillset.technology.Java.body',
    'Skillset.technology.Dart.title': 'Skillset.technology.Dart.body',
    'Skillset.technology.C#.title': 'Skillset.technology.C#.body',
    'Skillset.technology.Python.title': 'Skillset.technology.Python.body',
    'Skillset.technology.C / C++.title': 'Skillset.technology.C / C++.body',
    'Skillset.technology.OCaml / ReasonML.title': 'Skillset.technology.OCaml / ReasonML.body',
    'Skillset.technology.Elm.title': 'Skillset.technology.Elm.body',
};

const Card = styled.div`
    margin-top: 15px;
    .card-header {
        font-weight: 600;
    }
`;

export const Skillset = () => {
    const header = useTranslation('Skillset.header');
    const tagline = useTranslation('Skillset.tagline');
    return (
        <Article>
            <PageHeader />
            <Section>
                <h1>{header}</h1>
                <HorizontalRuler />
                <Tagline>{tagline}</Tagline>
                <List>
                    {legend.map(l => (
                        <ListItem key={l}>{useTranslation(l)}</ListItem>
                    ))}
                </List>
                {(Object.keys(skills) as I18nKey[]).map(skill => {
                    return (
                        <Card key={skill}>
                            <div className="card-header">{useTranslation(skill)}</div>
                            <div>{useTranslation(skills[skill])}</div>
                        </Card>
                    );
                })}
            </Section>
        </Article>
    );
};
