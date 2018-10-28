import React, { ReactChildren } from 'react';
import styled from 'styled-components';

const Layout = styled.div`
    background-color: #999;
    display: flex;
    padding: 15px;
    height: 50px;

    .brand {
        flex: 1 1 0px;
        margin: 0;
    }
`;

export const Topbar: React.SFC = props => {
    return (
        <Layout>
            <h3 className="brand">Curriculum Vitae</h3>
            {props.children}
        </Layout>
    );
};
