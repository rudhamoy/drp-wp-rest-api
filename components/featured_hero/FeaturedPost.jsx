import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { AiOutlinePicRight } from "react-icons/ai";

import getRandomCategory from '../utils/RandomCategory';

function FeaturedPost({ data }) {

    const [randomCategory, setRandomCategory] = useState(() => getRandomCategory(data[0]?._embedded["wp:term"][0]))

    return (
            <div className="sm:h-[471px] w-[95vw] sm:w-[635px] bg-white  rounded-[6px] my-2 sm:my-0 cursor-pointer overflow-hidden">

                <div className="h-[205px] sm:h-[325px] w-[95vw] sm:w-[635px] overflow-hidden relative ">
                    <Image className=" hover:scale-[110%] transition-all duration-[1000ms]" src={data[0]?._embedded["wp:featuredmedia"][0].link} alt="" fill priority />
                    <div className="absolute z-[10] bottom-2 left-6 flex flex-row justify-start gap-2 items-center drop-shadow-3xl">
                        <AiOutlinePicRight className="text-[#ffd200] font-bold" />
                        {/* <Category id={data[0].categories[1]} /> */}
                        <Link href={`/category/${randomCategory.name.toLowerCase()}`}>
                        <div className="capitalize text-[12px] text-[#ffd200] drop-shadow-3xl  font-bold">{randomCategory.name.toUpperCase()}</div>
                        </Link>
                    </div>
                    <div className='fadeBottom absolute bottom-0 left-0 right-0' />
                </div>

                <div className="pt-[7px] pb-[12px] px-[14px]">
                    <Link href={`/single-news/${data[0]['slug']}`}>
                        <h2 className="text-[26px] text-black font-semibold leading-8 font-nunitoSans">{data[0].title.rendered.replace(/&#8220;/g, "'").substring(0, 100)}</h2>
                    </Link>
                    <p className="text-[16px] font-sans text-[#6d6d6d]">{data[0].yoast_head_json.description}</p>
                </div>
            </div>
    )
}

export default FeaturedPost