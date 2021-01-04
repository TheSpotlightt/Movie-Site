import React, { useState, useEffect } from 'react';
import ReactPagination from 'react-js-pagination';

import PostersResult from '../movie-posters/movie-posters';
import ChooseSection from '../choose-section/choose-section';

import '../footer/styles.css'
import { CardPosters } from './popular-styles';

import FadeInDown from '../../animations/fade-In-Down';
import Pulse from '../../animations/pulse';

import Footer from '../footer/footer';

export default function PopularMovies() {
    const [popular, setPopular] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    const popularArray = [popular];

    useEffect(() => {
        (        
            async () => {
                await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US&page=${pageNumber}`)
                .then(res => res.json())
                .then(res => {
                    setPopular(res)
                });
            }
        )();
    }, [pageNumber]);

    const handlePageChange = (activePage) => {
        setPageNumber(activePage)
    }
    
    return (
        <div className="posters">
            <FadeInDown duration=".8s" delay="0s">
                <ChooseSection />
            </FadeInDown>
        
            <Pulse duration=".8s" delay="0s">
                    
                    {
                        popularArray.map((index, key) => (
                            <div key={key}>
                                <CardPosters>
                                    {
                                        index.results && (

                                            index.results.map((result) => (
                                                <div key={result.id}>
                                                    <PostersResult 
                                                        image={result.poster_path}
                                                        altTitle={result.title}
                                                        infos={result.id}
                                                    />
                                                </div>
                                            ))
                                        )
                                    }
                                </CardPosters>
                                
                                <ReactPagination
                                    prevPageText={'Prev'}
                                    nextPageText={'Next'}
                                    lastPageText={'500'}
                                    firstPageText={'1'}
                                    activePage={pageNumber}
                                    itemsCountPerPage={1}
                                    totalItemsCount={500}
                                    containerClassName={"pagination"}
                                    pageRangeDisplayed={5}
                                    onChange={handlePageChange.bind()}
                                />

                                <Footer />
                            </div>
                        ))
                    }
            </Pulse>
        </div>
    )
}