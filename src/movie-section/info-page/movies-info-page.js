import React from 'react';
import { Paragraph, Title } from './styles';

export default function InfoPage(props) {

    return (
        <div>
            <section>
                <Title>{props.title}</Title>
                <Paragraph>{props.overview}</Paragraph>
                <Paragraph>{props.releaseDate}, {props.runTime}s </Paragraph>
            </section>
        </div>
    )
}