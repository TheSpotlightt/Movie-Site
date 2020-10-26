import React from 'react';

export default function InfoPage(props) {
    return (
        <div>
            <section>
                <p>{props.value}</p>
                <p>{props.releaseDate}</p>
                <p>{props.overview}</p>
            </section>
        </div>
    )
}