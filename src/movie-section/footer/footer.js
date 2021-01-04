import React from 'react';
import {FooterImage, TMDBImage, Paragraph, Link } from './footer-styles';

import TMDBLogo from '../../images/TMDB_Logo.svg';

export default function Footer () {
    return (
        <FooterImage>
            <Link href="https://www.themoviedb.org/" target="_blank">
                <TMDBImage
                    src={TMDBLogo}
                    alt="TMDB Logo"
                />
            </Link>
            <Paragraph>Powered by: <Link href="https://www.themoviedb.org/" target="_blank">TMDB</Link></Paragraph>
        </FooterImage>
    )
}