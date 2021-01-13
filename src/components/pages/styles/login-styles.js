import styled from 'styled-components';

export const Container = styled.div `
    margin-top: 5rem;
    padding-bottom: 15rem;
`;

export const Title = styled.h1 `
    color: #fefefe;
    font-size: 3.5rem;
    position: relative;

    margin-left: 78.5rem;
`

export const Form = styled.form `
    width: 60rem;
    padding: 5rem;

    margin-left: 55rem;
    margin-top: 2rem;
    margin-bottom: 5rem;
`;

export const Input = styled.input `
    font-family: inherit;
    -webkit-appearance: none;
    appearance: none;
    width: 45rem;

    padding: 1.8rem;
    margin-top: 2rem;
    margin-left: 2rem;

    border: .1rem solid #e0e0e0;
    background-color: #FAFAFA;
    outline: none;
    border-radius: 1rem;

    &:focus {
        border: .1rem solid black;
    }
`;

export const SubmitButton = styled.button `
    padding: 1.5rem;
    margin-left: 7rem;
    margin-top: 5rem;

    width: 35rem;
    align-items: center;
    border-radius: 1rem;

    border: none;
    background-color: #6236FF;
    color: #F0ECFF;
    cursor: pointer;

    &:hover {
        background-color: #6c58b4;
        transition: 800ms;
    }
`

export const SignUpPara = styled.p `
    font-size: 1.5rem;
    padding-left: 12rem;
    margin-top: 5rem;

    color: #fefefe;
`;