import React from 'react';

export default function InfoPage(props) {
    return (
        <div>
            <section>
                <p>ss</p>
                <p>{props.title}</p>
                <p>{props.releaseDate}</p>
                <p>{props.overview}</p>
            </section>
        </div>
    )
}