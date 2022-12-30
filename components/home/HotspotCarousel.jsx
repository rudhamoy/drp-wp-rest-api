import React, { useState, useRef } from 'react'
import Link from 'next/link'
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import HotSpotSliderItem from './HotSpotSliderItem';

import style from './Slider.module.css'

const HotspotCarousel = ({ data, hotspotData }) => {
    const slider = useRef()
    const [activeSlide, setActiveSlide] = useState(0)

    function SampleNextArrow(props) {
        const { className, style, onClick } = props;
        return (
            <div
                className={`customArrowRight`}
                style={{ ...style, zIndex: 10, }}
                onClick={onClick}
            >
                <FiChevronRight onClick={onClick} className="text-[30px] -mt-[20px] cursor-pointer text-[#bf912d] bg-white rounded-full" />
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
                <FiChevronLeft onClick={onClick} className="text-[30px] -mt-[20px] cursor-pointer text-[#bf912d] bg-white rounded-full" />
            </div>
        );
    }

    const settingsDesk = {
        dots: true,
        // dotClass:,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
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
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2,

                }
            },
        ]
    };

    const settingsMobi = {
        infinite: false,
        speed: 500,
        initialSlide: 0,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [

            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    };

    return (
        <div className='relative'>
            {/* desktop */}
            <div className="hidden sm:block py-1 ">
                <Slider ref={slider}  {...settingsDesk} className="px-2 ">
                    {hotspotData.map((item, index) => {
                        const image =  item._embedded["wp:featuredmedia"][0].media_details ? item._embedded["wp:featuredmedia"][0].media_details?.sizes.thumbnail.source_url : item.jetpack_featured_media_url
                        return (
                            <HotSpotSliderItem
                                key={index}
                                category={item?._embedded["wp:term"][0][0]}
                                image={image}
                                title={item.title.rendered}
                                slug={item.slug}
                                date={item.date}
                            />
                        )
                    })}
                </Slider>
            </div>
            {/* mobile */}
            <div className='sm:hidden'>
                <Slider ref={slider} {...settingsMobi} className="px-2 ">
                    {hotspotData.map((item, index) => {
                        const image = "https://dailyresearchplot.com" + item._embedded["wp:featuredmedia"][0].media_details?.sizes.thumbnail.source_url
                        return (
                            <HotSpotSliderItem
                                key={index}
                                category={item?._embedded["wp:term"][0][0]}
                                image={image}
                                title={item.title.rendered}
                                slug={item.slug} 
                                />
                        )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default HotspotCarousel