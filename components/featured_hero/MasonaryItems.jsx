import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Category from '../utils/Category'
import { useSelector, useDispatch } from 'react-redux';
import { getCategoryById } from '../../features/categorySlice';
import axios from 'axios'

import VideoIcon from '../../assets/icons/VideoIcon';
function MasonaryItem({ data, image, title }) {

    const dispatch = useDispatch()
    const { categoryById } = useSelector(state => state.category)

    useEffect(() => {
        // dispatch(getCategoryById(data.categories[1]))

    }, [dispatch])

    return (
        <Link href={`/single-news/${data['slug']}`}>
            <div className="bg-white w-[95vw] sm:w-[310px] h-[105px] sm:h-[231px] rounded-[3px] flex sm:flex-col gap-x-2 flex-row overflowHidden cursor-pointer">
                {/* image -left content */}
                <div className="h-[100%] sm:h-[175px] w-[42%] sm:w-[100%] overflowHidden relative bg-green-200">
                    <img src={image} alt="" className="w-[100%] h-[100%]" />
                    <div className="absolute z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-2 items-center drop-shadow-3xl ">
                        <VideoIcon className="text-[#ffd200] font-bold drop-shadow-3xl" />
                        <div className="capitalize text-[12px] text-[#ffd200] drop-shadow-3xl  font-bold">{data?._embedded["wp:term"][0][0].name.toUpperCase()}</div>
                    </div>
                    <div className='fadeBottom absolute bottom-0 left-0 right-0' />
                </div>
<<<<<<< HEAD
                <div className="sm:p-[10px] p-[6px] w-[100%]">
                    <h3 className="text-[16px] sm:text-[18px] sm:leading-5 text-black font-semibold  sm:line-clamp-2 line-clamp-2 font-nunitoSans ">{title.replace(/&#8217;/g, "'")}</h3>
=======
                {/* right content */}
                <div className="sm:p-[10px] p-[6px] w-[58%] sm:w-[100%]">
                    <h3 className="text-[16px] sm:text-[18px] leading-[18px] sm:leading-5 text-black font-semibold  sm:line-clamp-2 line-clamp-2 font-nunitoSans ">{data.title.rendered.replace(/&#8217;/g, "'").substring(0, 65)}</h3>
>>>>>>> fcb315bd1e94e4482f49f8334e15e88bee7a2660
                </div>
            </div>
        </Link>
    )
}

export default MasonaryItem