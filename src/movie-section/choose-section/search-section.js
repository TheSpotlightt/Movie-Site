import React from 'react';
import { Link } from 'react-router-dom';

import SearchIcon from '../../images/loupe.svg';

import { ImgSearch } from './styles';

export default function SearchMovies() {
    return (
        <div>
            <Link to="/search">
                <ImgSearch 
                    src={SearchIcon}
                    alt="Search Icon"
                />
            </Link>
        </div>
    )
}