import React, { useState, useEffect } from 'react';
import { auth, db } from '../services/firebase';

export default function WatchList (props) {
    const user = auth().currentUser;
    const [movieList, setMovieList] = useState([]);
    const movieID = props.id;
    const posterPath = props.poster;

    useEffect(() => {
        db.ref('movieList').on('value', snapShot => {
            let list = [];
            snapShot.forEach(snap => {
                list.push(snap.val());
            });
            setMovieList(list);
        });
    }, [])

    const saveList = async (e) => {
        e.preventDefault();
        await db.ref('movieList').push({
            movieID: movieID,
            posterPath: posterPath,
            uid: user.uid
        })
    }

    return (
        <div>
            <button type="submit" onClick={saveList}>
                Add to Watch List
            </button>
        </div>
    )
}