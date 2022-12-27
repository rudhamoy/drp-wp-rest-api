import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify';
import parseHTML from "html-react-parser";

import VideoIcon from '../../assets/icons/VideoIcon';
import getRandomCategory from '../utils/RandomCategory';

import styles from '../../styles/Home.module.css'


function MasonaryItem({ data, image, title }) {
    const [randomCategory, setRandomCategory] = useState(() => getRandomCategory(data?._embedded["wp:term"][0]))

    const safeTitle = DOMPurify.sanitize(data.title.rendered.substring(0, 60));

    // const postDate = new Date(data.date).toLocaleDateString()

    return (
        <Link href={`/single-news/${data['slug']}`}>
            <div className="bg-white w-[95vw] sm:w-[310px] h-[85px] sm:h-[231px] rounded-[3px] flex sm:flex-col gap-x-2 flex-row overflowHidden cursor-pointer">
                {/* image -left content */}
                <div className="h-[100%] sm:h-[175px] w-[37%] sm:w-[100%] overflowHidden relative bg-green-200">
                    <Image 
                    src={image} 
                    alt="" className="w-[100%] h-[100%]"
                    fill
                    priority />
                    <div className="absolute z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-1 items-center drop-shadow-3xl ">
                        <VideoIcon className="text-[#ffd200] font-bold drop-shadow-3xl" />
                        <div className="capitalize text-[10px] text-[#ffd200] drop-shadow-3xl  font-bold">{randomCategory.name.toUpperCase()}</div>
                    </div>
                    <div className='fadeBottom absolute bottom-0 left-0 right-0' />
                </div>
                {/* right content */}
                <div className="sm:p-[10px] p-[6px] w-[63%] sm:w-[100%]">
                    <h3 className={`text-[16px] sm:text-[18px] leading-[18px] sm:leading-5 text-black font-semibold  sm:line-clamp-2 line-clamp-2 ${styles.blogTitle} `}>{parseHTML(safeTitle)}</h3>
                    {/* <h3 className="text-[16px] sm:text-[18px] leading-[18px] sm:leading-5 text-black font-semibold  sm:line-clamp-2 line-clamp-2 font-nunitoSans ">{data.title.rendered.replace(/&#8217;/g, "'").substring(0, 55)}</h3> */}
                </div>
            </div>
        </Link>
    )
}

export default MasonaryItem