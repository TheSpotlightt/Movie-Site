import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '../../images/loupe.svg';

import { Img } from './styles';

export default function SearchMovies() {
    return (
        <Link to="/search">
            <Img 
                src={SearchIcon}
                alt="Search Icon"
            />
        </Link>
    )
}