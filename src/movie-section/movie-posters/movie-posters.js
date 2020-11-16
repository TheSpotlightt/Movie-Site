import React from 'react';
import { Link } from 'react-router-dom';
import { PostersImg } from './style'

export default function PostersResult (props) {
    const posters = props.image;
    const altTitle = props.altTitle;
    const movieID = props.infos;

    return (
        <div>
            <Link to={{
                pathname: `/movie/${movieID}`,
                getMoviesInfo: `${movieID}`
            }}>
                <PostersImg src={`https://image.tmdb.org/t/p/w300/${posters}`} alt={altTitle} />
            </Link>
        </div>  
    )
}