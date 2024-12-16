import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";

type ProjectPropsType = {
    projectType?: string;
    title?: string;
    text?: string;
    img: string;
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject img={props.img}>
            <ProjectType>{props.projectType}</ProjectType>
            <ProjectTitle>{props.title}</ProjectTitle>
            <ProjectText>{props.text}</ProjectText>
            <Link href="#">
                View More
                <Icon iconId={"arrow-right"} height={"16"} viewBox={"0 0 16 16"} width={"16"}></Icon>
            </Link>
        </StyledProject>
    );
};

const StyledProject = styled.div<ProjectPropsType>`
    background: rgba(0, 0, 0, 60%) url(${props => props.img}) no-repeat center / cover;
    background-blend-mode: multiply;

    max-width: 1040px;
    height: 447px;
    object-fit: cover;

`

const ProjectType = styled.span`
    color: rgba(255, 255, 255, 1);
`

const ProjectTitle = styled.h3`
    color: rgba(255, 255, 255, 1);
`

const ProjectText = styled.p`
    color: rgba(255, 255, 255, 1);
`
const Link = styled.a`
    color: rgba(255, 255, 255, 1);
`