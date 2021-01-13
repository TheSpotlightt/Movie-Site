import styled from 'styled-components'

export const Header = styled.header `
    background-color: #464747;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const Title = styled.h1 `
    font-size: 2rem;

    color: #fefefe;
`;

export const LogoutButton = styled.button `
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