import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";

export const Skills = () => {
    return (
        <SkillsSection>
            <FlexWrapper wrap="wrap" justify="space-between">
                <Skill title={"React"} number={"01."}
                       text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
                <Skill title={"Styled Components"} number={"02."}
                       text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
                <Skill title={"Figma"} number={"03."}
                       text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
                <Skill title={"HTML"} number={"04."}
                       text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
                <Skill title={"CSS"} number={"05."}
                       text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
                <Skill title={"Design"} number={"06."}
                       text={"consectetur adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla facilisi nullam vehicula ipsum a arcu cursus vitae congue"}/>
            </FlexWrapper>
        </SkillsSection>
    );
};

const SkillsSection = styled.section`
    background-color: bisque;
    min-height: 100vh;
`
