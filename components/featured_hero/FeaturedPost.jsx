import React from 'react'
import Link from 'next/link'

import { AiOutlinePicRight } from "react-icons/ai";

function FeaturedPost({ data }) {
    return (
        <Link href={`/single-news/${data[0]['slug']}`}>
            <div className="sm:h-[471px] w-[95vw] sm:w-[635px] bg-white  rounded-[6px] my-2 sm:my-0 cursor-pointer">
                <div className="sm:h-[325px] w-[95vw] sm:w-[635px] overflow-hidden relative ">
                    <img className="h-[100%] w-[100%] hover:scale-[110%] transition-all duration-[1000ms]" src={data[0]?._embedded["wp:featuredmedia"][0].link} alt="" />
                    {/* <img className="h-[100%] w-[100%] hover:scale-[110%] transition-all duration-[1000ms]" src={`https://dailyresearchplot.com/${data[0]?._embedded["wp:featuredmedia"][0].media_details.sizes.large.source_url}`} alt="" /> */}
                    <div className="absolute z-[10] bottom-2 left-6 flex flex-row justify-start gap-2 items-center drop-shadow-3xl">
                        <AiOutlinePicRight className="text-[#ffd200] font-bold" />
                        {/* <Category id={data[0].categories[1]} /> */}
                        <div className="capitalize text-[12px] text-[#ffd200] drop-shadow-3xl  font-bold">{data[0]?._embedded["wp:term"][0][0].name.toUpperCase()}</div>
                    </div>
                    <div className='fadeBottom absolute bottom-0 left-0 right-0' />
                </div>
                <div className="pt-[7px] pb-[12px] px-[14px]">
                    <Link href={`/single-news/${data[0]['slug']}`}>
                        <h2 className="text-[26px] text-black font-semibold leading-8 font-nunitoSans">{data[0].yoast_head_json.title}</h2>
                    </Link>
                    {/* <h2 className="text-[26px] font-semibold leading-8 font-nunitoSans">Kung Fu Panda: The Dragon Knight Season 2 Potential Release Date and More</h2> */}
                    <p className="text-[16px] font-sans text-[#6d6d6d]">{data[0].yoast_head_json.description}</p>
                    {/* <p className="text-[16px] font-sans text-[#6d6d6d]">Kung Fu Panda: THe Dragon Knight Season 2 has already not been announced and here we have its Expected Release Data, Cast and possible Plot info</p> */}
                </div>
            </div>
        </Link>
    )
}

export default FeaturedPost