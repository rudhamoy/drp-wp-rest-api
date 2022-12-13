import React, { useState, useEffect } from 'react'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import julia from '../../assets/images/julia.png';
import rashmika from '../../assets/images/rashmika.png';
import bikini from '../../assets/images/bikini.png';
import walker from '../../assets/images/walker.png';
import VisualStoriesItem from './VisualStoriesItem';

import Slider from "react-slick";

// import './slider.css'

const data = [
    {
        img: julia,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: rashmika,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: bikini,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
    {
        img: walker,
        title: "Julia Garnet looks stunning in the dress by Prada"
    },
]


function VisualStoriesSlider({ visualStories }) {
    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`customArrowRight`}
                style={{ ...style, zIndex: 10, }}
                onClick={onClick}
            >
                <FiChevronRight onClick={onClick} className="text-[26px] -mt-[20px] cursor-pointer text-[#bf912d] bg-white rounded-full" />
            </div>
        );
    }

    function SamplePrevArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`customArrowLeft`}
                style={{ ...style, zIndex: 10, }}
                onClick={onClick}
            >
                <FiChevronLeft onClick={onClick} className="text-[26px] -mt-[20px] cursor-pointer text-[#bf912d] bg-white rounded-full" />
            </div>
        );
    }

    const settings = {
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1.7,
                    slidesToScroll: 1,
                    initialSlide: 1.7
                }
            },
            {
                breakpoint: 375,
                settings: {
                    slidesToShow: 1.5,
                    slidesToScroll: 1,
                    initialSlide: 1.5
                }
            },
        ]
    };


    return (
        <div className="h-[395px] w-[95vw] sm:w-[839px] mt-[30px] rounded-[4px] p-2 bg-white relative drop-shadow-container">

            {/* header */}
            <div className="flex justify-between rounded-tl-lg rounded">
                <div className="flex items-center gap-x-2">
                    <p className="text-[#bf912d] font-semibold font-nunitoSans text-[16px] sm:text-[22px]">VISUAL STORIES</p>
                    <div className="h-[2px] w-[80px] sm:w-[100px] rounded bg-[#bf912d]"></div>
                </div>
                <div className="text-[#bf912d] text-[12px] sm:text-[18px] font-semibold font-nunitoSans flex items-center cursor-pointer">
                    <p>VIEW ALL</p>
                    <FiChevronRight className="text-[18px]" />
                </div>
            </div>


            {/* container */}
            <div className='overflowHidden mt-[10px]'>
                <div className='overflow-x-scroll w-[90vw] sm:w-[811px] border rounded-[4px] p-1 py-2'>
                    <Slider {...settings} className="px-2 mt-1">
                        {data.map((item, index) => {
                            return (
                                <div key={index}>
                                    <VisualStoriesItem
                                        image={'https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM='}
                                        title={item.title} />
                                </div>
                            )
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    )
}


export default VisualStoriesSlider