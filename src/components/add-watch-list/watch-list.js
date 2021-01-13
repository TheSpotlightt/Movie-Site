import React, { useState, useEffect }from 'react';
import api from '../../api';

export default function AddWatchList (props) {
    const token = JSON.parse(localStorage.getItem('token'));
    const movieID = props.movieID;
    const poster = props.poster
    api.defaults.headers.Authorization = `Bearer ${token}`;

    const handleButton = async () => {
        await api.post('/watchList', {
            movieID,
            poster
        })
    }

    return (
        <button onClick={handleButton}> Save to watch list </button>
    )
}