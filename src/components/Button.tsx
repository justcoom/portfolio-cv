import styled from "styled-components";

export const Button = styled.button`
    color: rgba(255, 255, 255, 1);
    padding: 8px 20px;
    font-size: 16px;
    font-weight: 400;

    background-color: rgba(45, 44, 44, 1);
    
    &:hover {
        background: linear-gradient(90deg,#f9f295,#e0aa3e,#ffd700);
        cursor: pointer;
    }
`