import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";
import {theme} from "../../../styles/Theme";
import {Container} from "../../../components/Container";

export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <ContactTitle>Contact</ContactTitle>
                <StyledForm>
                    <Field placeholder={"Name"}/>
                    <Field placeholder={"Subject"}/>
                    <Field as={"textarea"} placeholder={"Message"}/>
                    <Button type={"submit"}>Send Message</Button>
                </StyledForm>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    padding: 100px 0;
`

const ContactTitle = styled.h3`
    text-align: center;
    color: ${theme.colors.secondaryBg};
    margin-bottom: 50px;
    
    font-size: 36px;
    font-weight: 900;
`

const StyledForm = styled.form`
    max-width: 540px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin: 0 auto;
    
    textarea {
        resize: none;
        height: 150px;
    }
`

const Field = styled.input`
    width: 100%;

    padding: 7px 15px;
    border-radius: 6px;
    border: 1px solid ${theme.colors.secondaryBg};

    font-family: Epilogue, sans-serif;
    font-size: 16px;
    font-weight: 400;
    
    &::placeholder {
        color: ${theme.colors.placeholderColor}
    }
`