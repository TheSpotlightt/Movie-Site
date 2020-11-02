import React, { useState, useEffect } from 'react';
import PostersResult from '../movie-posters/movie-posters';

import { CardPosters } from './popular-styles';

export default function LatestMovies() {
    const [latest, setLatest] = useState('');

    const latestArray = [latest];
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/latest?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US`)
        .then(res => res.json())
        .then(res => {
            setLatest(res)
        });
    }, []);


    return (
        <div className="posters">
            {latestArray.map((index, key) => (

                <CardPosters key={key}>

                    {index.results && (

                        index.results.map((result) => (

                            <div key={result.id}>
                                <PostersResult 
                                    image={result.poster_path}
                                    altTitle={result.title}
                                    infos={result.id}
                                />

                            </div>
                        ))
                    )}
                </CardPosters>
            ))}
        </div>
    )
}