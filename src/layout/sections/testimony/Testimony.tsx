import React from 'react';
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import programmerPhoto from "../../../assets/images/programmer-photo.webp"
import stairsPhoto from "../../../assets/images/stairs-photo.webp"
import {Container} from "../../../components/Container";
import {theme} from "../../../styles/Theme";

// Может тут добавить слайдер позже???

export const Testimony = () => {
    return (
        <StyledTestimony>
            <Container>
                <FlexWrapper justify={"space-between"}>
                    <FlexWrapper direction="column" gap={"16px"}>
                        <SectionTitle>About me</SectionTitle>
                        <SectionQuote>I look at usual things with my unusual eyes.</SectionQuote>
                    </FlexWrapper>
                    <SectionText>
                        <FlexWrapper direction="column" gap={"25px"}>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa
                                sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque,
                                tristique
                                quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                            </p>
                            <p>
                                Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo
                                vitae.
                                Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper
                                nec,
                                habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper
                                in
                                fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum
                                cras
                                porta.
                            </p>
                            <p>
                                Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit
                                sagittis in
                                eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque
                                viverra lectus arcu, tincidunt ultrices pellentesque.
                            </p>
                        </FlexWrapper>
                    </SectionText>
                </FlexWrapper>
                <FlexWrapper justify="space-between">
                    <MainImage src={programmerPhoto}/>
                    <SecondImage src={stairsPhoto}/>
                </FlexWrapper>
                <Slider/>
            </Container>

        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    position: relative;
    background-color: ${theme.colors.secondaryBg};
    padding: 109px 64px 205px;
`

const SectionTitle = styled.h3`
    font-size: 36px;
    font-weight: 900;
    line-height: 1.5;
`

const SectionQuote = styled.p`
    max-width: 422px;
    font-size: 48px;
    font-weight: 254;
    text-transform: uppercase;
    margin-bottom: 238px;

`
const SectionText = styled.p`
    max-width: 437px;
    font-size: 18px;
    font-family: Roboto, sans-serif;
    font-weight: 400;
    line-height: 1.5;
    
    margin-bottom: 204px;

`

const MainImage = styled.img`
    max-width: 532px;

    position: absolute;
    top: 561px;
    filter: invert(1);
`
const SecondImage = styled.img`
    max-width: 440px;
    filter: invert(1);
    margin-left: 590px;
`