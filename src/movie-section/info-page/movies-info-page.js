import React from 'react';
import { Paragraph, Title, Img, Header } from './styles';

import SearchMovies from '../choose-section/search-section';
import Home from '../choose-section/home';
import { ZoomInDown, LightSpeedIn } from 'animate-css-styled-components';

export default function InfoPage(props) {

    return (
        <div>
            <LightSpeedIn duration=".8s" delay=".5s">
                <Header>
                    <Home />
                    <SearchMovies />
                </Header>
            </LightSpeedIn>

            <ZoomInDown duration=".8s" delay=".5s">
                <Img 
                    src={`https://image.tmdb.org/t/p/w300/${props.posters}`} alt={props.altTitle}
                />
            </ZoomInDown>

            <LightSpeedIn duration=".8s" delay=".5s">
                <section>
                    <Title>{props.title}</Title>
                    <Paragraph>{props.overview}</Paragraph>
                    <Paragraph>{props.releaseDate}, Duration: {props.runTime}s </Paragraph>
                </section>
            </LightSpeedIn>
        </div>
    )
}