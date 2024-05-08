import React from "react";
import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

export default function Slider() {
    return (
        <Splide className="splide" hasTrack={false}
            options={ {
                rewind: true,
                gap   : '1rem',
            } }
            aria-label="My Favorite Images"
            >
                <SplideTrack className="slider">
                    <SplideSlide>
                        <h1>Title 1</h1>
                        <img src="/1.svg" alt="Image 1"/>
                    </SplideSlide>
                    <SplideSlide>
                        <h1>Title 2</h1>
                        <img src="/2.svg" alt="Image 2"/>
                    </SplideSlide>
                    <SplideSlide>
                        <h1>Title 3</h1>
                        <img src="/3.svg" alt="Image 3"/>
                    </SplideSlide>
                </SplideTrack>
                
        </Splide>
    )
}