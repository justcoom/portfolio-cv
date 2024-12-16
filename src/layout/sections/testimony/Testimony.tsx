import React from 'react';
import styled from "styled-components";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import mainPhoto from "../../../assets/images/main-photo.webp"

// Может тут добавить слайдер позже???

export const Testimony = () => {
    return (
        <StyledTestimony>
            <FlexWrapper gap={"79px"}>
                <FlexWrapper direction="column" gap={"16px"}>
                    <SectionTitle>About me</SectionTitle>
                    <SectionQuote>I look at usual things with my unusual eyes.</SectionQuote>
                    <Image src={mainPhoto}/>

                </FlexWrapper>
                <FlexWrapper direction="column" gap={"204px"}>
                    <SectionText>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce varius faucibus massa
                            sollicitudin amet augue. Nibh metus a semper purus mauris duis. Lorem eu neque, tristique
                            quis duis. Nibh scelerisque ac adipiscing velit non nulla in amet pellentesque.
                        </p>
                        <p>
                            Sit turpis pretium eget maecenas. Vestibulum dolor mattis consectetur eget commodo vitae.
                            Amet pellentesque sit pulvinar lorem mi a, euismod risus rhoncus. Elementum ullamcorper nec,
                            habitasse vulputate. Eget dictum quis est sed egestas tellus, a lectus. Quam ullamcorper in
                            fringilla arcu aliquet fames arcu.Lacinia eget faucibus urna, nam risus nec elementum cras
                            porta.
                        </p>
                        <p>
                            Sed elementum, sed dolor purus dolor dui. Ut dictum nulla pulvinar vulputate sit sagittis in
                            eleifend dignissim. Natoque mauris cras molestie velit. Maecenas eget adipiscing quisque
                            viverra lectus arcu, tincidunt ultrices pellentesque.
                        </p>
                    </SectionText>
                    <Image src={mainPhoto}/>

                </FlexWrapper>
            </FlexWrapper>
            <Slider/>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`
    min-height: 100vh;
    background-color: rgba(19, 18, 18, 1);
    padding: 0 64px;
`

const SectionTitle = styled.h3`
    color: rgba(242, 242, 242, 1);
`

const SectionQuote = styled.p`
    color: rgba(242, 242, 242, 1);
    text-transform: uppercase;
    margin-top: 0;
    margin-bottom: 238px;
    font-size: 42px;
`
const SectionText = styled.p`
    color: rgba(242, 242, 242, 1);
    font-size: 18px;
`

const Image = styled.img`
    max-width: 532px;
`