import React, { useState, useEffect } from 'react';
import InfoPage from './movies-info-page';

export default function GetInfos(props) {
    const [moviesInfo, setMoviesInfo] = useState([]);
    const moviesInfoArray = [moviesInfo]
    const movieID = props.location.getMoviesInfo;
    
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US`)
        .then(res => res.json())
        .then(res => {
            setMoviesInfo(res);
        })
        .catch(error => console.log(error));
    }, [movieID]);

    const [trailer, getTrailer] = useState([]);
    const trailerArray = [trailer];

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${movieID}/videos?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US`)
        .then(res => res.json())
        .then(res => {
            getTrailer(res)
        })
        .catch(error => console.log(error))
        
    }, [movieID])

    return (
        <div>
            {moviesInfoArray.map((index, key) => (
                <div key={key}>
                    <InfoPage
                        title={index.title}
                        releaseDate={index.release_date}
                        overview={index.overview}
                        runTime={index.runtime}
                    />
                </div>
            ))}

            {trailerArray.map((index, key) => (
                <div key={key}>
                    {index.results && (
                        index.results.map(result => (
                            <div key={result.id}>
                                <iframe title="Trailer" 
                                width="560" height="315" 
                                src={`https://www.youtube.com/embed/${result.key}`} 
                                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                                allowFullScreen />
                            </div>
                        ))
                    )}
                </div>
            ))}
        </div>  
    )
}