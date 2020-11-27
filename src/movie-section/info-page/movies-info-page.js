import React from 'react';
import { Paragraph, Title, Img, Header } from './styles';

import SearchMovies from '../choose-section/search-section';

export default function InfoPage(props) {

    return (
        <div>
            <Header>
                <SearchMovies />
            </Header>
            <Img 
                src={`https://image.tmdb.org/t/p/w300/${props.posters}`} alt={props.altTitle}
            />
            <section>
                <Title>{props.title}</Title>
                <Paragraph>{props.overview}</Paragraph>
                <Paragraph>{props.releaseDate}, Duration: {props.runTime}s </Paragraph>
            </section>
        </div>
    )
}