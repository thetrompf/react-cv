import React from 'react';
import { useTranslation } from '../Components/Translate';
import { Article } from '../Components/Article';
import { PageHeader } from '../Components/PageHeader';
import { Section } from '../Components/Section';
import { HorizontalRuler } from '../Components/HorizontalRuler';
import { Container, Row, Cell } from './Employment';

export const Education = () => {
    const header = useTranslation('Education.header');
    return (
        <Article>
            <PageHeader />
            <Section>
                <h1>{header}</h1>
                <HorizontalRuler />
                <Container>
                    <Row>
                        <Cell bold={true}>2009-2012</Cell>
                        <Cell>Aarhus Universitet</Cell>
                        <Cell strike={true}>Bs.Cs</Cell>
                    </Row>
                    <Row>
                        <Cell bold={true}>2006-2009</Cell>
                        <Cell>Herning</Cell>
                        <Cell>HTX</Cell>
                    </Row>
                    <Row>
                        <Cell bold={true}>2005-2006</Cell>
                        <Cell>Silkborg Skolen</Cell>
                        <Cell>10. klasse</Cell>
                    </Row>
                </Container>
            </Section>
        </Article>
    );
};
