import React, { useState, useEffect } from 'react';
import InfoPage from './movies-info-page';

export default function GetInfos(props) {
    const [moviesInfo, setMoviesInfo] = useState([]);
    const moviesInfoArray = [moviesInfo]
    const movieInfos = props.infos;
    
    useEffect(() => {
        let isMounted = true;
        fetch(`https://api.themoviedb.org/3/movie/268?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US`)
        .then(res => res.json())
        .then(res => {
            setMoviesInfo(res);
        })
        .catch(error => console.log(error));

        return () => {
            isMounted = false;
        }

    }, [movieInfos]);

    return (
        <div>
            {moviesInfoArray.map((index, key) => (
                <div key={key}>
                    <InfoPage
                        title={index.title}
                        releaseDate={index.release_date}
                        overview={index.overview}
                    />
                </div>
            ))}
        </div>  
    )
}