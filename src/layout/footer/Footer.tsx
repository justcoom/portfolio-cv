import React from 'react';
import styled from "styled-components";
import {Logo} from "../../components/logo/logo";
import {Menu} from "../../components/menu/Menu";
import {Button} from "../../components/Button";
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";

const items = ["Projects", "About", "Digital Assets"]

export const Footer = () => {
    return (
        <StyledFooter>
            <Logo/>
            <Menu menuItems={items}/>
            <FooterHeader>Subscribe to my emailing list</FooterHeader>
            <Field placeholder={"Enter your email"}/>
            <Button>Subscribe</Button>
            <Policy>By subscribing you agree to with our <a href="">Privacy Policy</a></Policy>
            <HorizontalLine/>
            <FlexWrapper justify="space-between">
                <Copyright>2024 Valery Bruner. All right reserved.</Copyright>
                <SocialList>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId={"facebook"}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId={"instagram"}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId={"twitter"}/>
                        </SocialIconLink>
                    </SocialItem>
                    <SocialItem>
                        <SocialIconLink>
                            <Icon iconId={"linkedIn"}/>
                        </SocialIconLink>
                    </SocialItem>
                </SocialList>
            </FlexWrapper>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 80px 80px 55px;
    min-height: 50vh;
    background-color: rgba(255, 255, 255, 1);
`

const FooterHeader = styled.h3`
    
`

const Field  = styled.input`
    
`

const Policy = styled.span`

`

const HorizontalLine = styled.div`
    height: 1px;
    background-color: rgba(0, 0, 0, 1);
    max-width: 1280px;
    margin-top: 64px;
`

const SocialList = styled.ul`
    display: flex;
    list-style: none;
    gap: 12px;
`

const SocialIconLink = styled.a`

`
const SocialItem = styled.li`
    
`

const Copyright = styled.small`
    
`