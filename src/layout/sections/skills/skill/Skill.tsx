import styled from "styled-components";
import React from 'react';

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
            <SkillTitle>{props.title}</SkillTitle>
            <SkillText>{props.text}</SkillText>
        </StyledSkill>
    );
};

const StyledSkill = styled.div`
    background-color: lightcyan;
    width: 33%;
`

const SkillNumber = styled.span`
    
`

const SkillTitle = styled.h3`
    
`

const SkillText = styled.p`
    
`

