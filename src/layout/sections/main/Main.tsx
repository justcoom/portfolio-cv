import React from 'react';
import styled from "styled-components";
import photo from "../../../assets/images/main-photo.webp"
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";


export const Main = () => {
    return (
        <StylesMain>
            <Container>
                <FlexWrapper align="center" justify={"center"}>
                        <TextBlock>
                            <h2>HELLO I’M ABBY</h2>
                            <h1>Frontend Developer</h1>
                        </TextBlock>
                        <PhotoWrapper>
                            <Photo src={photo} alt="photo of developer"/>
                        </PhotoWrapper>
                </FlexWrapper>
            </Container>
        </StylesMain>
    );
};

const StylesMain = styled.section`
    min-height: 100vh;
    display: flex;
`

const Photo = styled.img`
    width: 570px;
    height: 570px;
    object-fit: cover;
    opacity: 0.9;
`

const PhotoWrapper = styled.div`
    position: relative;
    z-index: 1;
    
    &::before {
        content: "";
        display: inline-block;
        width: 570px;
        height: 570px;
        background-color: #e7e7e7;
        transform: rotate(-9deg);
        
        position: absolute;
        z-index: -1;
    }
`

// тут можно разбить на отдельные компоненты заголовки
const TextBlock = styled.div`
    color: rgba(45, 44, 44, 1);
    
    h2 {
        font-size: 150px;
        font-weight: 800;
        max-width: 651px;
        margin-bottom: 15px;
    }
    
    h1 {
        font-size: 52px;
        font-weight: 600;
    }
`

