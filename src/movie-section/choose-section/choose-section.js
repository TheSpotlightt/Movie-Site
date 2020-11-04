import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import SearchIcon from '../../images/loupe.svg';
import { ChooseLinksStyles, Container, Img } from './styles';

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
            <Link to="/search">
                <Img 
                    src={SearchIcon}
                    width={20}
                    alt="Search Icon"
                />
            </Link>
        </Container>
    )
}