import React from 'react';
import { Link } from 'react-router-dom';
import { NoImagePosters } from './style';

// There are some movies that don't have posters
// and this break the style and show nothing on screen, so i decided to make
// a new component to render those posters

export default function PostersResult (props) {
    const posters = props.image;
    const altTitle = props.altTitle;
    const movieID = props.infos;

    return (
        <div>
            <Link to={{
                pathname: `/movie/${movieID}`,
                state:{ infos: `${movieID}` }
            }}>
                <NoImagePosters src={`${posters}`} alt={altTitle} />
            </Link>
        </div>  
    )
}