import Styled from 'styled-components';

export const Title = Styled.h1 `
    font-size: 2rem;

    margin-top: 5rem;;

`;

export const Paragraph = Styled.p `
    font-size: 1.6rem;
`

export const Img = Styled.img `
    float: left;

    margin-right: 2rem;
    margin-top: 5rem;
    
    @media screen and (max-width: 50rem) {
        float: none;
    }

`;

export const Iframe = Styled.iframe `
    position: absolute;
    top: 30rem;
    left: 40rem;

    width: 80rem;
    height: 40rem;

    @media screen and (max-width: 50rem) {
        position: absolute;
        top: 80rem;
        left: 2rem;

        width: 32rem;
        height: 20rem;
    }
`;

export const Header = Styled.header `
    display: flex;
    justify-content: flex-end;

    border-bottom: .1rem solid black;
`;