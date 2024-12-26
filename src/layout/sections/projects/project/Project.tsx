import React from 'react';
import styled from "styled-components";
import {Icon} from "../../../../components/icon/Icon";
import {theme} from '../../../../styles/Theme';
import {FlexWrapper} from "../../../../components/FlexWrapper";

type ProjectPropsType = {
    projectType?: string;
    title?: string;
    text?: string;
    img: string;
}

export const Project = (props: ProjectPropsType) => {
    return (
        <StyledProject img={props.img}>
            <FlexWrapper gap={"80px"}>
                <TitleWrapper>
                    <ProjectType>{props.projectType}</ProjectType>
                    <ProjectTitle>{props.title}</ProjectTitle>
                </TitleWrapper>
                <TextWrapper>
                    <ProjectText>{props.text}</ProjectText>
                    <Link href="#">
                        View More
                        <Icon iconId={"arrow-right"} height={"16"} viewBox={"0 0 16 16"} width={"16"}></Icon>
                    </Link>
                </TextWrapper>
            </FlexWrapper>
        </StyledProject>
    );
};

const StyledProject = styled.div<ProjectPropsType>`
    background: rgba(0, 0, 0, 60%) url(${props => props.img}) no-repeat center / cover;
    background-blend-mode: multiply;

    max-width: 1040px;
    min-height: 447px;
    object-fit: cover;
    padding: 92px 46px 100px;

`

const TitleWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    
    max-width: 433px;
`

const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    
    max-width: 433px;
`

const ProjectType = styled.span`
    font-size: 16px;
    font-weight: 600;
    line-height: 1.5;
`

const ProjectTitle = styled.h3`
    font-weight: 800;
    font-size: 45px;
`

const ProjectText = styled.p`
    font-weight: 400;
    font-size: 18px;
    line-height: 1.5;
    margin-top: 40px;
`
const Link = styled.a`
    font-weight: 400;
    font-size: 16px;
    line-height: 1.5;
    color: ${theme.colors.font}
`