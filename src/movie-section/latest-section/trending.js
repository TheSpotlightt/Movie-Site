import React, { useState, useEffect } from 'react';
import PostersResult from '../movie-posters/movie-posters';

import ChooseSection from '../choose-section/choose-section';

import { CardPosters } from './trending-styles';

export default function TrendingMovies() {
    const [trending, setTrending] = useState('');

    const trendingArray = [trending];
    useEffect(() => {
        (
            async () => {
                await fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=d8007bb731f4937f50c8e7528e5c21e2`)
                .then(res => res.json())
                .then(res => {
                    setTrending(res)
                });
            }
        )();
    }, []);

    return (
        <div className="posters">
            <ChooseSection />

            {trendingArray.map((index, key) => (

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