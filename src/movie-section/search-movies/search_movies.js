import React, { useState, useEffect } from 'react';
import ReactPagination from 'react-js-pagination';

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
    const [pageNumber, setPageNumber] = useState(1);

    const [value, setValue] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            await fetch(`https://api.themoviedb.org/3/search/movie?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US&query=${value}&page=${pageNumber}&include_adult=false`)
            .then(res => res.json())
            .then(res => {
                setMovies(res);
            })
            .catch(err => console.log(err))
        }
        fetchData()
    }, [value, pageNumber]);

    const handlePageChange = (activePage) => {
        setPageNumber(activePage)
    }

    const handleInputSearch = (e) => {
        setValue(e.target.value)
    } 

    return (
    <div>
        <SearchMovieInput type="search" onChange={handleInputSearch} placeholder="Search by Movie Title" autoFocus/>

            {moviesArray.map((c, index) => ( 
                <div key={index}>
                    <SearchMovieContainer>
                        
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

                        <footer>
                            <ReactPagination
                                activePage={pageNumber}
                                itemsCountPerPage={1}
                                totalItemsCount={500}
                                containerClassName={"pagination"}
                                pageRangeDisplayed={5}
                                onChange={handlePageChange.bind()}
                            />
                        </footer>
                </div>
            ))}
    </div>

)
}