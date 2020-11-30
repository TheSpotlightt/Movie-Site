import React from 'react';
import { Link } from 'react-router-dom';

import HomeIcon from '../../images/home.svg';

import { ImgHome } from '../../movie-section/choose-section/styles';

export default function Home () {
    return (
        <Link to="/popular">
            <ImgHome 
                src={HomeIcon}
                alt="Home Icon"
            />
        </Link>
    )
}