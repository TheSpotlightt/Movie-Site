import React, { useState, useEffect }from 'react';
import { auth, db } from '../services/firebase';
import { Link } from 'react-router-dom';
import MoviePoster from '../../movie-section/movie-posters/movie-posters';

export default function UserPage () {
    const [movieList, getMovieList] = useState([]);

    useEffect(() => {
        db.ref('movieList').on('value', snapShot => {
            let list = [];
            snapShot.forEach(snap => {
                list.push(snap.val());
            });
            getMovieList(list);
        });
    }, []);

    const handleSignOut = () => {
        auth().signOut()
    }

    const removeWatchList = () => {
        db.ref('movieList').remove()
    }

    console.log(movieList)
    return (
        <div>
        <h1>User Page</h1>
        <h2>Watch List</h2>
        
        <button onClick={handleSignOut}>
            Sign out
        </button>
        <Link to="/popular">
            Home
        </Link>
        {
                movieList.map((index, key) => (
                    <div key={key}>
                        <MoviePoster
                            image={index.posterPath}
                            infos={index.movieID}
                        />
                    </div>
                ))
            }
        <button onClick={removeWatchList}>Remove</button>
    </div>
    )
}