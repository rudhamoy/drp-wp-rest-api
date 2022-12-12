import React, { useState } from 'react'
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import HotSpotSliderItem from './HotSpotSliderItem';

const HotspotCarousel = ({ data, hotspotData }) => {

    const [activeSlide, setActiveSlide] = useState(0)
    console.log(activeSlide, "= activeSlide")

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
                className={` customArrowLeft`}
                style={{ ...style, zIndex: 10, }}
                onClick={onClick}
            >
                <FiChevronLeft onClick={onClick} className="text-[30px] -mt-[20px] cursor-pointer text-[#bf912d] bg-white rounded-full" />
            </div>
        );
    }

    const settingsDesk = {
        dots: true,
        // dotClass: "slick-dots" ,
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
            <div className="hidden sm:block">
                <Slider {...settingsDesk} className="px-2 ">
                    {hotspotData.map((item, index) => {
                        const image = item._embedded["wp:featuredmedia"][0].link
                        return (
                            <HotSpotSliderItem 
                            key={index} 
                            category={item?._embedded["wp:term"][0][0].name.toUpperCase()} 
                            image={image} 
                            title={item.title.rendered} />
                            )
                    })}
                </Slider>
            </div>
            {/* mobile */}
            <div className='sm:hidden'>
                <Slider {...settingsMobi} className="px-2 ">
                {hotspotData.map((item, index) => {
                        // const image = "https://dailyresearchplot.com" + item._embedded["wp:featuredmedia"][0].media_details?.sizes.thumbnail.source_url
                        const image = item._embedded["wp:featuredmedia"][0].link
                        return (
                            <HotSpotSliderItem 
                            key={index} 
                            category={item?._embedded["wp:term"][0][0].name.toUpperCase()} 
                            image={image} 
                            title={item.title.rendered} />
                            )
                    })}
                </Slider>
            </div>
        </div>
    )
}

export default HotspotCarousel