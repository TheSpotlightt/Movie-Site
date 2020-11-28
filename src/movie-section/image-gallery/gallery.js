import React, { useState, useEffect } from 'react';

import { Img, GalleryContainer  } from './styles';

import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";

export default function ImageGallery (props) {
    const [images, getImages] = useState([]);
    const postersID = props.postersID;
    console.log(postersID)

    useEffect(() => {
        ( 
            async () => {
                await fetch(`https://api.themoviedb.org/3/movie/${postersID}/images?api_key=d8007bb731f4937f50c8e7528e5c21e2&language=en-US&include_image_language=include_image_language%3Den%2Cnull`)
                .then(res => res.json())
                .then(res => {
                    const data = res.backdrops;
                    const image = data.map(result => (
                        <Img 
                            src={`https://image.tmdb.org/t/p/original/${result.file_path}`}
                            alt="gallery"
                        />
                    ))
                    getImages(image)
                })
            }
        )()
    }, [postersID])

    const responsive = { // using the AliceCarousel responsiveness,
        0: { items: 1}, // how many items show on each screen size
        1024: { items: 1 }
    }

    return (
        <GalleryContainer>
            <AliceCarousel
                items={images}
                autoPlay
                autoPlayInterval={3000}
                infinite
                responsive={responsive}
                animationDuration="800"
            />
        </GalleryContainer>
    )
}