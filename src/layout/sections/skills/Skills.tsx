import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {Container} from "../../../components/Container";

export const Skills = () => {
    return (
        <SkillsSection>
            <ContainerSkills>
                <FlexWrapper wrap="wrap" justify="space-between" gap={"8px"}>
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
            </ContainerSkills>
        </SkillsSection>
    );
};

const SkillsSection = styled.section`
    padding: 102px 0 144px
`

const ContainerSkills = styled(Container)`
    max-width: 1366px;
    padding: 0 15px;
`
