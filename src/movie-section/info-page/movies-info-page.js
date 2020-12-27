import React from 'react';
import { Paragraph, Title, Img, Header } from './styles';

import SearchMovies from '../choose-section/search-section';
import Home from '../../components/pages/home';

import ZoomInDown from '../../animations/zoom-in-down';
import LightSpeedIn from '../../animations/Light-Speed-In';

export default function InfoPage(props) {
    return (
        <div>
            <LightSpeedIn duration=".8s" delay="0s">
                <Header>
                    <Home />
                    <SearchMovies />
                </Header>
            </LightSpeedIn>

            <ZoomInDown duration=".7s" delay="0s">
                <Img 
                    src={`https://image.tmdb.org/t/p/w300/${props.posters}`} alt={props.altTitle}
                />
            </ZoomInDown>

            <LightSpeedIn duration=".9s" delay="0s">
                <section>
                    <Title>{props.title}</Title>
                    <Paragraph>{props.overview}</Paragraph>
                    <Paragraph>{props.releaseDate}, Duration: {props.runTime}s </Paragraph>
                </section>
            </LightSpeedIn>
        </div>
    )
}