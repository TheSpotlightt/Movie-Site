import React, { useState, useEffect } from 'react';
import PostersResult from '../movie-posters/movie-posters';

import { SearchMovieContainer, SearchMovieInput, TileMovie } from './search-styles';

function Result(props) {
    return (
        <TileMovie>
            {props.value}
        </TileMovie>
    )
}


export default function SearchMovies() {
    const [movies, setMovies] = useState([]);
    const moviesArray = [movies];

    const [value, setValue] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d8007bb731f4937f50c8e7528e5c21e2&query=${value}`)
            .then(res => res.json())
            .then(res => {
                setMovies(res);
            })
            .catch(err => console.log(err))
        }
        fetchData()
    }, [value]);

    return (
        <div>
                <SearchMovieInput type="search" onChange={(e) => setValue(e.target.value)} placeholder="Search by Movie Title" autoFocus/>

                {moviesArray.map((c, index) => ( 
            
                    <SearchMovieContainer key={index}>
            
                        {c.results && (
            
                            c.results.map((result, key) => (
                                <div key={key}>
                                    <Result 
                                        value={result.title}
                                    />

                                    <PostersResult 
                                        image={result.poster_path}
                                        altTitle={result.title}
                                        infos={result.id}
                                    />
                                </div>
                            ))
                        )}
            
                    </SearchMovieContainer>
                ))}
            </div>

)
    
}