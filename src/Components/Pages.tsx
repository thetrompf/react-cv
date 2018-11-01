import React from 'react';
import styled from 'styled-components';
import { Route, Redirect, Switch } from 'react-router';
import { Experience } from '../Pages/Experience';
import { Skillset } from '../Pages/Skillset';
import { Employment } from '../Pages/Employment';
import { Education } from '../Pages/Education';

const Layout = styled.div`
    background-color: aliceblue;
    display: flex;
    flex: 1 1 auto;
`;

export const Pages: React.SFC = () => {
    return (
        <Layout>
            <Switch>
                <Redirect exact={true} from="/" to="/experience" />
                <Route component={Experience} path="/experience" />
            </Switch>
            <Route component={Education} path="/education" />
            <Route component={Employment} path="/employment" />
            <Route component={Skillset} path="/skillset" />
        </Layout>
    );
};
