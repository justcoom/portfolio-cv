import React from 'react';
import logoPhoto from "../../assets/images/logo.webp"
import styled from "styled-components";

export const Logo = () => {
    return (
            <a href="">
                <Logotip src={logoPhoto} alt="cv logo"/>
            </a>
    );
};

const Logotip = styled.img`
    width: 40px;
    height: 40px;
`