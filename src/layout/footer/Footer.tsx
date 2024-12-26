import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Menu} from "../../components/menu/Menu";
import {Button} from "../../components/Button";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Container} from "../../components/Container";
import {theme} from "../../styles/Theme";

const items = ["Projects", "About", "Digital Assets"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify="space-between">
                    <FlexWrapper direction={"column"} justify="center">
                        <Logo/>
                        <Menu menuItems={items}/>
                    </FlexWrapper>
                    <FlexWrapper direction="column" gap={"16px"}>
                        <FooterHeader>Subscribe to my emailing list</FooterHeader>
                        <FlexWrapper gap={"16px"}>
                            <Field placeholder={"Enter your email"}/>
                            <ButtonNew>Subscribe</ButtonNew>
                        </FlexWrapper>
                        <Policy>By subscribing you agree to with our <a href="">Privacy Policy</a></Policy>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
            <HorizontalLine/>
            <Container>
                <FooterWrapper>
                    <Copyright>2024 Valery Bruner. All right reserved.</Copyright>
                    <SocialList>
                        <SocialItem>
                            <SocialIconLink>
                                <Icon iconId={"telegram"}/>
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconLink>
                                <Icon iconId={"instagram"}/>
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconLink>
                                <Icon iconId={"github"}/>
                            </SocialIconLink>
                        </SocialItem>
                        <SocialItem>
                            <SocialIconLink>
                                <Icon iconId={"linkedIn"}/>
                            </SocialIconLink>
                        </SocialItem>
                    </SocialList>
                </FooterWrapper>
            </Container>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 80px 80px 55px;
`

const FooterHeader = styled.h3`
    color: ${theme.colors.secondaryBg};
    font-size: 16px;
    font-weight: 700;

`

const Field = styled.input`
    max-width: 257px;
    padding: 12px;

    border: 1px solid ${theme.colors.secondaryBg};

    font-family: Epilogue, sans-serif;
    font-size: 16px;
    font-weight: 400;

    &::placeholder {
        color: ${theme.colors.placeholderColor};
    }

`

const ButtonNew = styled(Button)`
    padding: 12px 24px;
    background-color: ${theme.colors.primaryBg};
    color: ${theme.colors.secondaryBg};
    border: 1px solid ${theme.colors.secondaryBg};

`

const Policy = styled.span`
    font-family: Roboto, sans-serif;
    font-size: 12px;
    font-weight: 400;
    color: ${theme.colors.secondaryBg};

    a {
        text-decoration-line: underline;
        color: ${theme.colors.secondaryBg}
    }
`

const HorizontalLine = styled.div`
    height: 1px;
    background-color: rgba(0, 0, 0, 1);
    max-width: 1280px;
    margin: 64px auto;
`

const FooterWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 0 116px;
`

const SocialList = styled.ul`
    display: flex;
    gap: 12px;
`

const SocialIconLink = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${theme.colors.secondaryBg};
    transition: 1s;

    &:hover {
        color: ${theme.colors.accent};
        transform: rotate(360deg);
    }

`

const SocialItem = styled.li`

`

const Copyright = styled.small`
    font-family: Roboto, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    color: ${theme.colors.secondaryBg};
`