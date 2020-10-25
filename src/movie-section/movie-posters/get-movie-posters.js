import React from 'react';

export default function PostersResult (props) {
    const posters = props.image;
    const altTitle = props.altTitle
    return (
        <a href="#">
            <img src={`https://image.tmdb.org/t/p/w342/${posters}`} alt={altTitle} />
        </a>
    );
}