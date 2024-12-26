import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Menu} from "../../../components/menu/Menu";
import {Project} from "./project/Project";
import projImg from "../../../assets/images/proj-1.webp"
import projImg2 from "../../../assets/images/proj-2.webp"
import projImg3 from "../../../assets/images/proj-3.webp"
import {Container} from "../../../components/Container";

// const ProjectItems = ["32", "423", "dfssdfs", "fsdfsd"]

export const Projects = () => {
    return (
        <ProjectBlock>
            <Container>
                <ProjectsTitle>MY PROJECTS</ProjectsTitle>
                <FlexWrapper direction={"column"} gap={"78px"} align={"center"}>
                    <Project projectType={"Mental Health"} title={"A Case Study_ Find Peace in Meditation"}
                             text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."} img={projImg}/>
                    <Project projectType={"Fashion Show"} title={"A Case Study_ Enjoy Fashion Shows From Home"}
                             text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."} img={projImg2}/>
                    <Project projectType={"Barbeque"} title={"Branding_ Chicken Barbeque Never Goes Wrong"}
                             text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat."} img={projImg3}/>
                </FlexWrapper>
            </Container>
        </ProjectBlock>
    );
};

const ProjectBlock = styled.section`
    padding: 170px 0;
`
const ProjectsTitle = styled.h2`
    color: rgba(45, 44, 44, 1);
    font-size: 120px;
    font-weight: 800;
    line-height: 0.935;
    max-width: 772px;
    margin-bottom: 70px;
`