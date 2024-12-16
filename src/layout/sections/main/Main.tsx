import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/main-photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Main = () => {
    return (
        <StylesMain>
            <FlexWrapper align="center" justify="center">
                <TextBlock>
                    <h2>HELLO I’M ABBY</h2>
                    <h1>Frontend Developer</h1>
                </TextBlock>
                <Photo src={photo} alt="photo of developer"/>
            </FlexWrapper>
        </StylesMain>
    );
};

const StylesMain = styled.div`
    min-height: 100vh;
    background-color: lightgray;
`

const Photo = styled.img`
    width: 570px;
    height: 570px;
    object-fit: cover;
`

// тут можно разбить на отдельные компоненты заголовки
const TextBlock = styled.div`
    h2 {
        
    }
    
    h1 {
        
    }
`

