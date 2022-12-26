import React, { useRef, useState } from 'react'
import Image from 'next/image'
import parseHTML from "html-react-parser";
import DOMPurify from 'isomorphic-dompurify';
import Slider from "react-slick";
import { MdOutlineClose } from 'react-icons/md'
import { AiOutlinePause } from 'react-icons/ai'
import { CiLocationArrow1, CiPlay1 } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux';
import { modalBtnCondition } from '../../features/activitySlice';

const TrialStory = ({ data, setPlayStory }) => {
    const [plays, setPlays] = useState(true)
    const slider = useRef()
    const dispatch = useDispatch()

    const closeHandler = () => {
        setPlayStory(false)
    }

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        speed: 500,
        autoplaySpeed: 5000,
        fade: true,
    };

    function play() {
        slider.current.slickPlay()
        setPlays(true)
    }
    function pause() {
        slider.current.slickPause()
        setPlays(false)
    }

    return (
        <div className=' flex justify-center items-center '>
            {/* {data.map(item => (
                <>
                {item.post_content}
                </>
            ))} */}
            {/* container */}
            <div className="h-[100vh] w-full mx-auto px-0 sm:px-4 py-6 relative">
                <div className="absolute top-[30px] left-0 right-0 px-[40px] z-[999] flex justify-between">
                    <MdOutlineClose onClick={closeHandler} className="text-white text-2xl drop-shadow-lg cursor-pointer" />
                    <div className="flex items-center gap-x-5">
                        {plays === false ?
                            <CiPlay1 onClick={play} className="text-white text-2xl drop-shadow-lg cursor-pointer" /> : (
                                <AiOutlinePause onClick={pause} className="text-white text-2xl drop-shadow-lg cursor-pointer" />
                            )}

                        <CiLocationArrow1 className="text-white text-2xl drop-shadow-lg cursor-pointer" />
                    </div>

                </div>
                <Slider ref={slider} {...settings}>
                    {data.map(item => (
                        <div className='h-screen relative'>
                            <div dangerouslySetInnerHTML={{ __html: item.post_content }}>
                               
                            </div>
                            <h1 className='text-white text-3xl absolute bottom-10 z-40'>{item.post_title}</h1>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default TrialStory