import Styled from 'styled-components';

export const SearchMovieContainer = Styled.div `
    display: flex !important;
    flex-wrap: wrap;
    justify-content: space-between;
`;

export const SearchMovieInput = Styled.input `
    width: 100%;
    margin-top: 5rem;
    font-size: 1.7rem;
    padding: 2rem;

    border-radius: 5rem;
    border: .1rem solid black;
    background-color: #3A3B3C;
    &::placeholder {
        font-size: 1.5rem;
        padding-left: 5rem;
    }

    &:focus {
        border: .2rem solid #918888;
        outline: none;
        background-color: #3A3B3C;
    }
`;

export const TileMovie = Styled.p `
    text-align: center;
    color: #fff;
    font-size: 1.8rem;
`;