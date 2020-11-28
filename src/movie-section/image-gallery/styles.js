import Styled from 'styled-components';

export const Img = Styled.img `
    position: relative;
    left: 55rem;
    max-width: 40%;

    @media only screen and (min-width: 300px) {
        position: relative;
        left: 38rem;

        max-width: 72%;
    }

    @media only screen and (min-width: 375px) {
        position: relative;
        left: 40rem;

        max-width: 70%;
    }

    @media only screen and (min-width: 400px) {
        position: relative;
        left: 45rem;

        max-width: 80%;
    }

    @media only screen and (min-width: 768px) {
        position: relative;
        left: 20rem;

        max-width: 50%;
    }

    @media only screen and (min-width: 1024px) {
        position: relative;
        left: 30rem;

        max-width: 50%;
    }

    @media only screen and (min-width: 1440px) {
        position: relative;
        left: 45rem;

        max-width: 50%;
    }
`

export const GalleryContainer = Styled.div `
    position: relative;
    top: 70rem;

`