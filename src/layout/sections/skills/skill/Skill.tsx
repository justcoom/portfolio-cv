import styled from "styled-components";
import React from 'react';
import {FlexWrapper} from "../../../../components/FlexWrapper";

type SkillPropsType = {
    number: string;
    title: string;
    text: string;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            {/*можно добавить иконку*/}
            <SkillNumber>{props.number}</SkillNumber>
            <FlexWrapper direction={"column"}>
                <SkillTitle>{props.title}</SkillTitle>
                <SkillText>{props.text}</SkillText>
            </FlexWrapper>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    display: flex;
    gap: 35px;
    max-width: 440px;
`

const SkillNumber = styled.span`
    font-size: 70px;
    font-weight: 100;
    margin: 17px 0 57px;
`

const SkillTitle = styled.h3`
    font-size: 30px;
    font-weight: 300;
    margin-bottom: 5px;
`

const SkillText = styled.p`
    font-size: 18px;
    font-weight: 200;
`

