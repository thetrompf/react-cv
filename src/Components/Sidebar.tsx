import React, { useState } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { useTranslation } from './Translate';
import { Icon } from './Icon';

const Layout = styled.div<{ isOpen: boolean }>`
    background-color: #ccc;
    display: flex;
    transition: min-width 300ms;
    flex: 0 0 0px;
    min-width: ${props => (props.isOpen ? 250 : 10)}px;
`;

const Menu = styled.ul`
    display: flex;
    flex: 1 1 0px;
    flex-direction: column;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const MenuItem = styled.li`
    display: flex;
    flex-direction: row;

    a {
        background-color: inherit;
        color: black;
        flex: 1 1 0px;
        flex-direction: column;
        justify-content: center;
        height: 40px;
        padding-top: 10px;
        padding-bottom: 10px;
        text-decoration: none;
        transition: background-color 300ms;
    }
    i {
        flex: 0 0 0px;
        text-align: center;
        width: 35px;
    }
    span {
        flex: 1 1 0px;
        min-width: 0px;
    }
    .active {
        background-color: lightblue;
    }
`;

export const Sidebar: React.SFC = () => {
    const [isOpen, setIsOpen] = useState(true);
    const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
        e.preventDefault();
        e.stopPropagation();
        if (!isOpen) {
            setIsOpen(!isOpen);
        }
    };

    return (
        <Layout isOpen={isOpen} onClick={handleClick}>
            <Menu>
                <MenuItem>
                    <NavLink to="/experience" title={useTranslation('Sidebar.Experience.title')}>
                        <Icon name="tachometer" /> <span>{useTranslation('Sidebar.Experience.text')}</span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/employment" title={useTranslation('Sidebar.Employment.title')}>
                        <Icon name="building" /> <span>{useTranslation('Sidebar.Employment.text')}</span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/education" title={useTranslation('Sidebar.Education.title')}>
                        <Icon name="graduation-cap" /> <span>{useTranslation('Sidebar.Education.text')}</span>
                    </NavLink>
                </MenuItem>
                <MenuItem>
                    <NavLink to="/skillset" title={useTranslation('Sidebar.Skillset.title')}>
                        <Icon name="toggle-on" /> <span>{useTranslation('Sidebar.Skillset.text')}</span>
                    </NavLink>
                </MenuItem>
            </Menu>
        </Layout>
    );
};
