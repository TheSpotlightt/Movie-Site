import styled from 'styled-components';

export const ChooseLinksStyles = styled.div `
    font-size: 1.9rem;

    text-decoration: none;
    display: flex;
    align-items: center;
    margin-left: 1rem;
`

export const Container = styled.div `
    display: flex !important;
    justify-content: space-between;
    padding: 1rem;
    border-bottom: .2rem solid black;

    position: -webkit-sticky;
    position: sticky;
    top: 0rem;

    background-color: #464747;
`

export const ImgSearch = styled.img `
    margin-top: 1rem;
    margin-right: 1rem;
    width: 3rem;
    color: #fff;
`;

export const ImgHome = styled.img `
    margin-left: 1rem;
    width: 2.5rem;
`;


export const ContainerHeader = styled.div `
    display: flex !important;
    justify-content: space-between;

    border-bottom: .1rem solid black;

    position: -webkit-sticky;
    position: sticky;
    top: 0rem;

    background-color: #fff;
`;

export const LoginButton = styled.button `
    padding: 1rem;
    margin-right: 1rem;
    background-color: #18191A;
    color: #fefefe;
    border: none;
    border-radius: 1rem;

    cursor: pointer;

    &:hover {
        background-color: #303030;
        transition: 800ms;
    }
`

export const ContainerLeft = styled.div `
    display: flex;
    align-items: center;
`


