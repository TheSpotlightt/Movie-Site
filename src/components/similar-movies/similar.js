import React, { useState, useEffect } from 'react';
import MoviePoster from '../../movie-section/movie-posters/movie-posters';
import NoImagePosters from '../../movie-section/movie-posters/no-posters';
import NoImage from '../../images/no_image.png';

import { 
    Wrapper, 
    CardPosters, 
    Title,
} from './style';

export default function Trending ( props ) {
    const [similar, getSimilar] = useState('');
    const similarArray = [similar];

    const similarID = props.id;

    useEffect(() => {
        (
            async () => {
                await fetch(`https://api.themoviedb.org/3/movie/${similarID}/similar?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US&page=1`)
                .then(res => res.json())
                .then(res => {
                    getSimilar(res)
                });
            }
        )();
    }, [similarID]);

    return (
        <Wrapper>
            <Title>Similar Options</Title>
            {
                similarArray.map((index, key) => (
                        <CardPosters key={key}>
                            {
                                index.results && (
                                    index.results.map((result) => (
                                        <div key={result.id}>
                                            {
                                                result.poster_path
                                                ?
                                                    <MoviePoster 
                                                        image={result.poster_path}
                                                        altTitle={result.title}
                                                        infos={result.id}
                                                    />
                                                :
                                                    <NoImagePosters 
                                                        image={NoImage}
                                                        altTitle={result.title}
                                                        infos={result.id}
                                                    />
                                            }
                                        </div>
                                    ))
                                )
                            }
                        </CardPosters>
                    ))
                }
        </Wrapper>
    )
}