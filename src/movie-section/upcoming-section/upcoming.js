import React, { useState, useEffect } from 'react';
import ReactPagination from 'react-js-pagination';

import PostersResult from '../movie-posters/movie-posters';
import ChooseSection from '../choose-section/choose-section';

import { CardPosters } from './upcoming-styles';

import FadeInDown from '../../animations/fade-In-Down';
import Pulse from '../../animations/pulse';

import Footer from '../footer/footer';

export default function UpComingMovies() {
    const [upComing, setUpComing] = useState('');
    const [pageNumber, setPageNumber] = useState(1);

    const upComingArray = [upComing];
    useEffect(() => {
        (
            async () => {
                fetch(`https://api.themoviedb.org/3/movie/upcoming?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US&page=${pageNumber}`)
                .then(res => res.json())
                .then(res => {
                    setUpComing(res)
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
                    upComingArray.map((index, key) => (
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
                                lastPageText={'18'}
                                firstPageText={'1'}
                                activePage={pageNumber}
                                itemsCountPerPage={1}
                                totalItemsCount={18}
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