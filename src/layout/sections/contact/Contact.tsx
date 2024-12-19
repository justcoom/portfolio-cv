import React from 'react';
import styled from "styled-components";
import {Button} from "../../../components/Button";

export const Contact = () => {
    return (
        <StyledContact>
            <ContactTitle>Contact</ContactTitle>
            <StyledForm>
                <Field placeholder={"Name"}/>
                <Field placeholder={"Subject"}/>
                <Field as={"textarea"} placeholder={"Message"}/>
                <Button type={"submit"}>Send Message</Button>
            </StyledForm>
        </StyledContact>
    );
};

const StyledContact = styled.section`
    min-height: 50vh;
    background-color: bisque;
`

const ContactTitle = styled.h3`
    text-align: center;
`

const StyledForm = styled.form`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
`

const Field = styled.input`
    
`