import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import Posters from '../../movie-section/movie-posters/movie-posters';
import api from '../../api';

export default function UserProfile () {
    const [watchList, getWatchList] = useState([]);
    const token = JSON.parse(localStorage.getItem('token'));

    useEffect(() => {
        (
            async () => {
                await api.get('users/me')
                .then(res => console.log(res));
            }
        )()
    }, []);

    useEffect(() => {
        (
            async () => {
                await api.get('/watchLists')
                .then(res => getWatchList(res.data))
            }
        )()
    }, []);

    
    const handleLogout = () => {
        localStorage.clear('token');
        api.defaults.headers.Authorization = undefined;
    } 

    return (
        <div>
            <header>
                <h1> User Profile </h1>
                <Link to="/popular">
                    <button type="submit" onClick={handleLogout}>Logout</button>
                </Link>
            </header>
                {
                    watchList.map((index, key) => (
                        <div key={key}>
                            <Posters
                                image={index.poster}
                                infos={index.movieID}
                            />
                        </div>
                    ))
                }
        </div>
    )
}