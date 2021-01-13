import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import { ChooseLinksStyles, Container, LoginButton, ContainerLeft } from './styles';

import SearchMovies from './search-section';

export default function ChooseSection() {
    return (
        <Container>

            <ChooseLinksStyles>

                <NavLink to="/popular" 
                activeStyle={{
                    color: "#fefefe", 
                    fontWeight: "bold" 
                }} 
                style={{
                    color: "#E7E9ED",
                    paddingRight: 20, 
                    textDecoration: 'none'
                }}  >Popular</NavLink>

                <NavLink to="/trending" 
                activeStyle={{
                    color: "#fefefe", 
                    fontWeight: "bold"
                }} 

                style={{
                    color: "#E7E9ED",
                    paddingRight: 20, 
                    textDecoration: 'none'
                }}>Trending</NavLink>

                <NavLink to="/upcoming" 
                activeStyle={{
                    color: "#fefefe", 
                    fontWeight: "bold",
                }}

                style={{
                    color: "#E7E9ED",
                    paddingRight: 20, 
                    textDecoration: 'none',
                }}>UpComing</NavLink>
            </ChooseLinksStyles>
            <ContainerLeft>
                <Link to='/login'>
                    <LoginButton>
                        Login
                    </LoginButton>
                </Link>
                <SearchMovies />
            </ContainerLeft>
        </Container>
    )
}