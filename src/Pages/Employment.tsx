import React from 'react';
import { useTranslation } from '../Components/Translate';
import { Article } from '../Components/Article';
import { PageHeader } from '../Components/PageHeader';
import { Section } from '../Components/Section';
import styled from 'styled-components';
import { HorizontalRuler } from '../Components/HorizontalRuler';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 20px;
`;

export const Row = styled.div`
    display: flex;
    flex: 0 0 0px
    min-height: 30px;
`;

export const Cell = styled.div<{ bold?: boolean; strike?: boolean }>`
    flex: 1 0 33.3333%;
    font-weight: ${p => (p.bold ? 600 : 200)};
    text-decoration: ${p => (p.strike ? 'line-through' : 'none')};
`;

export const Employment = () => {
    const header = useTranslation('Employment.header');
    const softwareEngineer = useTranslation('Employment.Software engineer');
    const webDeveloper = useTranslation('Employment.Web developer');
    const systemAdministrator = useTranslation('Employment.System administrator');
    const technician = useTranslation('Employment.Technician / Web developer');

    return (
        <Article>
            <PageHeader />
            <Section>
                <h1>{header}</h1>
                <HorizontalRuler />
                <Container>
                    <Row>
                        <Cell bold={true}>2012-</Cell>
                        <Cell>Secoya A/S</Cell>
                        <Cell>{softwareEngineer}</Cell>
                    </Row>
                    <Row>
                        <Cell bold={true}>2010-2011</Cell>
                        <Cell>Haastrup IT Aps</Cell>
                        <Cell>{webDeveloper}</Cell>
                    </Row>
                    <Row>
                        <Cell bold={true}>2009-2010</Cell>
                        <Cell>Silkeborgskolen</Cell>
                        <Cell>{systemAdministrator}</Cell>
                    </Row>
                    <Row>
                        <Cell bold={true}>2007-2009</Cell>
                        <Cell>Fermaten</Cell>
                        <Cell>{technician}</Cell>
                    </Row>
                </Container>
            </Section>
        </Article>
    );
};
