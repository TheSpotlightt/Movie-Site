import React from 'react';
import { Link } from 'react-router-dom';
import InfoPage from '../info-page/get-infos';

export default function PostersResult (props) {
    const posters = props.image;
    const altTitle = props.altTitle;
    const movieInfos = props.infos;
    
    return (
        <div>
            <Link to={`/movie/${movieInfos}`}>
                <img src={`https://image.tmdb.org/t/p/w342/${posters}`} alt={altTitle} />
            </Link>
            <InfoPage 
                infos={movieInfos}
            />
        </div>  
    )
}