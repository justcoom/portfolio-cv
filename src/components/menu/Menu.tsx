import React from 'react';
import styled from "styled-components";
import {Button} from "../Button";
import {theme} from "../../styles/Theme";



export const Menu = (props: {menuItems: Array<string>}) => {
    return (
        <StyledMenu>
            <ul>
                {props.menuItems.map((item, index) => {
                    return (
                        <ListItem key={index}>
                            <Link href="">{item}</Link>
                        </ListItem>
                    )
                })}
                <li>
                    <StyledButton>Let’s Talk</StyledButton>
                </li>
            </ul>
        </StyledMenu>
    );
};

const StyledMenu = styled.nav`
    ul {
        
        display: flex;
        gap: 32px;
        align-items: center;
    }

`

const ListItem = styled.li`
    &:hover {
        text-decoration: 3px underline;
        text-decoration-color: ${theme.colors.accent};
    }
`

const Link = styled.a`

    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    color: rgba(45, 44, 44, 1);
`

const StyledButton = styled(Button)`
    max-width: 111px;
    
`