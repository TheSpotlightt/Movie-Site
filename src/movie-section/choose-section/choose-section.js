import React from 'react';
import { NavLink } from 'react-router-dom';

import { ChooseLinksStyles } from './styles';

export default function ChooseSection() {
    return (
        <ChooseLinksStyles>
            <NavLink to="/popular" 
            activeStyle={{
                color: "#918888", 
                fontWeight: "bold" 
            }} 
            style={{
                paddingRight: 20, 
                textDecoration: 'none'
            }}  >Popular</NavLink>

            <NavLink to="/trending" 
            activeStyle={{
                color: "#918888", 
                fontWeight: "bold"
            }} 
            style={{
                paddingRight: 20, 
                textDecoration: 'none'
            }}>Trending</NavLink>

            <NavLink to="/upcoming" 
            activeStyle={{
                color: "#918888", 
                fontWeight: "bold"
            }}
            style={{
                paddingRight: 20, 
                textDecoration: 'none', 
            }}>UpComing</NavLink>
        </ChooseLinksStyles>
    )
}