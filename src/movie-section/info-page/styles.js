import Styled from 'styled-components';

export const Title = Styled.h1 `
    font-size: 2rem;

    margin-top: 5rem;;

`;

export const Paragraph = Styled.p `
    font-size: 1.7rem;
`

export const Img = Styled.img `
    float: left;

    margin-right: 2rem;
    margin-top: 5rem;
    
    @media only screen and (min-width: 200px) {
        float: none;
        margin-right: 0rem;
    }

    @media only screen and (min-width: 400px) {
        float: none;
        margin-right: 0rem;
    }

    @media only screen and (min-width: 768px) {
        float: none;
    }

    @media only screen and (min-width: 1024px) {
        float: left;
    }

`;

export const Iframe = Styled.iframe `
    position: absolute;
    top: 30rem;
    left: 40rem;

    width: 80rem;
    height: 40rem;

    @media only screen and (min-width: 200px) {
        position: absolute;
        top: 95rem;
        left: 1rem;

        width: 34rem;
        height: 20rem;
    }

    @media only screen and (min-width: 375px) {
        position: absolute;
        top: 90rem;
        left: 1rem;

        width: 36rem;
        height: 20rem;
    }

    @media only screen and (min-width: 400px) {
        position: absolute;
        top: 85rem;
        left: 1rem;

        width: 42rem;
        height: 30rem;
    }

    @media only screen and (min-width: 768px) {
        position: absolute;
        top: 80rem;
        left: 4rem;

        width: 70rem;
        height: 35rem;
    }

    @media only screen and (min-width: 1024px) {
        position: absolute;
        top: 40rem;
        left: 38rem;

        width: 60rem;
        height: 40rem;
    }

    @media only screen and (min-width: 1440px) {
        position: absolute;
        top: 40rem;
        left: 38rem;

        width: 90rem;
        height: 50rem;
    }
`;

export const Header = Styled.header `
    display: flex;
    justify-content: flex-end;

    border-bottom: .1rem solid black;
`;