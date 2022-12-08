import React from 'react'
import panda from '../../assets/images/panda.png';

import { AiOutlinePicRight } from "react-icons/ai";

function FeaturedPost({data}) {
    console.log('data =', data)
    return (
        <>
        {data[0].map(item => (
            <div className="sm:h-[471px] w-[95vw] sm:w-[635px] bg-white  rounded-[6px] my-2 sm:my-0 cursor-pointer">
            <div className="sm:h-[325px] w-[95vw] sm:w-[635px] overflow-hidden relative ">
                <img className="h-[100%]" src={panda} alt="" />
                <div className="absolute z-[10] bottom-2 left-6 flex flex-row justify-start gap-2 items-center drop-shadow-3xl">
                    <AiOutlinePicRight className="text-[#ffd200] font-bold" />
                    <div className="capitalize text-[12px] text-[#ffd200] drop-shadow-3xl  font-bold">TV SERIES</div>
                </div>
                <div className='fadeBottom absolute bottom-0 left-0 right-0' />
            </div>
            <div className="pt-[7px] pb-[12px] px-[14px]">
                <h2 className="text-[26px] font-semibold leading-8 font-nunitoSans">{item?.yoast_head_json.title}</h2>
                {/* <h2 className="text-[26px] font-semibold leading-8 font-nunitoSans">Kung Fu Panda: The Dragon Knight Season 2 Potential Release Date and More</h2> */}
                <p className="text-[16px] font-sans text-[#6d6d6d]">Kung Fu Panda: THe Dragon Knight Season 2 has already not been announced and here we have its Expected Release Data, Cast and possible Plot info</p>
            </div>
        </div>
        ))}
        </>
    )
}

export default FeaturedPost