import React, { useState, useEffect }from 'react';
import { Link } from 'react-router-dom';
import Posters from '../../movie-section/movie-posters/movie-posters';
import api from '../../api';

import Home from './home';

import { Header, Title, LogoutButton } from './styles/profile-styles';

export default function UserProfile () {
    const [watchList, getWatchList] = useState([]);

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
            <Header>
                <Home />
                <Title> Your Watch List </Title>
                <Link to="/popular">
                    <LogoutButton type="submit" onClick={handleLogout}>Logout</LogoutButton>
                </Link>
            </Header>
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