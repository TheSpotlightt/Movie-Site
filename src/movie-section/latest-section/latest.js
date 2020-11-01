import React, { useState, useEffect } from 'react';
import PostersResult from '../movie-posters/movie-posters';

class LatestMoviesSection extends React.Component {
    render() {
        return (
            <ul>
                <li>
                    {this.props.value}
                </li>
            </ul>
        )
    }
}

export default function LatestMovies() {
    const [latest, setLatest] = useState('');

    const latestArray = [latest];
    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/trending/movie/day?api_key=d8007bb731f4937f50c8e7528e5c21e2`)
        .then(res => res.json())
        .then(res => {
            setLatest(res)
        });
    }, []);


    return (
        <div>
            {latestArray.map((index, key) => (

                <div key={key}>

                    {index.results && (

                        index.results.map((result) => (

                            <div key={result.id}>
                                <LatestMoviesSection 
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
                </div>
            ))}
        </div>
    )
}