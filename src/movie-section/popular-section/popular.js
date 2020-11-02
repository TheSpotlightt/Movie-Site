import React, { useState, useEffect } from 'react';
import PostersResult from '../movie-posters/movie-posters';

import { CardPosters } from './popular-styles';

export default function PopularMovies() {
    const [popular, setPopular] = useState('');

    const popularArray = [popular];
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US&page=1`)
        .then(res => res.json())
        .then(res => {
            setPopular(res)
        });
    }, []);


    return (
        <div className="posters">
            {popularArray.map((index, key) => (

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