import React from 'react';

export default function InfoPage(props) {
    return (
        <div>
            <section>
                <p>{props.title}</p>
                <p>{props.overview}</p>
                <p>{props.releaseDate}, {props.runTime}s </p>
            </section>
        </div>
    )
}