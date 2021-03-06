import Styled from 'styled-components';

export const PostersImg = Styled.img `
    padding-top: 2rem;
    &:hover {
        transform: scale(1.1);    
        transition: all 400ms ease-out;
        filter: drop-shadow(30px 10px 4px #000);
    }

    @media only screen and (max-width: 800px) {
        &:hover {
            transform: none;
            transition: none;
            filter: none;
        }
    }
`;

export const NoImagePosters = Styled.img `
    padding-top: 2rem;
    width: 30rem;
    height: 47rem;


    &:hover {
        transform: scale(1.1);    
        transition: all 400ms ease-out;
        filter: drop-shadow(30px 10px 4px #000);
    }

    @media only screen and (max-width: 800px) {
        &:hover {
            transform: none;
            transition: none;
            filter: none;
        }
    }
`