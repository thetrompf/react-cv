import styled from 'styled-components';
import React from 'react';
import { ProfilePicture } from './ProfilePicture';

export const Header = styled.header`
    align-items: flex-end;
    background-color: lightblue;
    display: flex;
    height: 200px;
    justify-content: flex-end;

    h1 {
        align-self: center;
        flex: 1 1 0px;
        margin-left: 15px;
    }
`;

const HeaderPicture = styled(ProfilePicture)`
    align-self: flex-end;
    border: 5px solid white;
    box-shadow: 0px 0px 15px 0px, 0px 0px 5px 1px inset;
    margin-bottom: -${props => (props.height || 100) / 2}px;
    margin-right: 50px;
`;

export const PageHeader: React.SFC = props => {
    return (
        <Header>
            <h1>Brian Kejlberg</h1>
            <HeaderPicture height={160} shape="circle" width={160} />
            {props.children}
        </Header>
    );
};
