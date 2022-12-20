import React, { useRef, useState } from 'react'
import Image from 'next/image'
import Slider from "react-slick";
import { data } from './data'
import { MdOutlineClose } from 'react-icons/md'
import { AiOutlinePause } from 'react-icons/ai'
import { CiLocationArrow1, CiPlay1 } from 'react-icons/ci'
import { useDispatch, useSelector } from 'react-redux';
import { modalBtnCondition } from '../../features/activitySlice';

const StoriesPlayer = () => {
    const [plays, setPlays] = useState(true)
    const slider = useRef()
    const dispatch = useDispatch()
    const { stories } = useSelector(state => state.posts)

    const closeHandler = () => {
        dispatch(modalBtnCondition(false))
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
            {/* container */}
            <div className="h-[90vh] w-full sm:w-[500px] mx-auto px-0 sm:px-4 py-6 relative">
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
                    {stories.map((item, index) => (
                        <div key={index} className='h-screen w-full sm:h-[100%] overflow-hidden border border-white relative'>

                            <img src={item.content} alt="" className="h-screen w-full sm:h-[100%] object-content " />
                            <div className="absolute bottom-10 flex justify-center w-full p-4">
                                <p className=' text-white border-4 border-white p-2 text-lg sm:text-2xl font-bold z-[999]'>{item.title}</p>
                            </div>
                            <div className="bigFadeBottom absolute bottom-0 right-0 left-0" />
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default StoriesPlayer