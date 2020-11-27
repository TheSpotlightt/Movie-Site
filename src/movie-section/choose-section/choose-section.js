import React from 'react';
import { NavLink } from 'react-router-dom';

import { ChooseLinksStyles, Container } from './styles';

import SearchMovies from './search-section';

export default function ChooseSection() {
    return (
        <Container>
            <ChooseLinksStyles>
                <NavLink to="/popular" 
                activeStyle={{
                    color: "#918888", 
                    fontWeight: "bold" 
                }} 
                style={{
                    color: "black",
                    paddingRight: 20, 
                    textDecoration: 'none'
                }}  >Popular</NavLink>

                <NavLink to="/trending" 
                activeStyle={{
                    color: "#918888", 
                    fontWeight: "bold"
                }} 

                style={{
                    color: "black",
                    paddingRight: 20, 
                    textDecoration: 'none'
                }}>Trending</NavLink>

                <NavLink to="/upcoming" 
                activeStyle={{
                    color: "#918888", 
                    fontWeight: "bold",
                }}

                style={{
                    color: "black",
                    paddingRight: 20, 
                    textDecoration: 'none',
                }}>UpComing</NavLink>
            </ChooseLinksStyles>
            <SearchMovies />
        </Container>
    )
}