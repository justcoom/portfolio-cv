import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Menu} from "../../components/menu/Menu";

const items = ["Projects", "About", "Digital Assets"]

export const Header = () => {
    return (
        <StyledHeader>
            <Logo/>
            <Menu menuItems={items}/>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-color: bisque;
    display: flex;
    justify-content: space-between;
`
