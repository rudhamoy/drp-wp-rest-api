import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify';
import parseHTML from "html-react-parser";
import { AiOutlinePicRight } from "react-icons/ai";

import getRandomCategory from '../utils/RandomCategory';
import styles from '../../styles/Home.module.css'
import CategoryIcon from '../utils/CategoryIcon';

function FeaturedPost({ data }) {

    const [randomCategory, setRandomCategory] = useState(() => getRandomCategory(data[0]?._embedded["wp:term"][0]))

    const safeTitle = DOMPurify.sanitize(data[0].title.rendered.substring(0, 90));
    const safeExcerpt = DOMPurify.sanitize(data[0].yoast_head_json.description);
    // const postDate = new Date(data[0].date).toLocaleDateString()

    const date = new Date(data[0].date).getDate()
    const month = new Date(data[0].date).getMonth()
    const year = new Date(data[0].date).getFullYear()
    const postDate = `${year}/${month + 1}/${date}`


    return (
        <div className="sm:h-[471px] w-[95vw] sm:w-[634px] bg-white  rounded-[6px] my-2 sm:my-0 cursor-pointer overflow-hidden">

            <div className="h-[205px] sm:h-[325px] w-[95vw] sm:w-[635px] overflow-hidden relative ">
                <Link href={`/${postDate}/${data[0]['slug']}`}>
                    <Image className=" hover:scale-[110%] transition-all duration-[1000ms]" src={data[0]?._embedded["wp:featuredmedia"] ? data[0]?._embedded["wp:featuredmedia"][0].link : ''} alt="" fill priority />
                </Link>
                <div className="absolute z-[10] bottom-2 left-6 flex flex-row justify-start gap-2 items-center drop-shadow-3xl">
                    <CategoryIcon categoryList={data[0].categories} />
                    <Link href={`/category/${randomCategory.slug}`}>
                        <div className="capitalize text-[12px] text-[#ffd200] drop-shadow-3xl  font-bold">{parseHTML(randomCategory.name).toUpperCase()}</div>
                    </Link>
                </div>
                <div className='fadeBottom absolute bottom-0 left-0 right-0' />
            </div>

            <div className="pt-[7px] pb-[12px] px-[14px]">
                <Link href={`/${postDate}/${data[0]['slug']}`}>
                    <h2 className={`text-[26px] text-black font-semibold leading-8 ${styles.blogTitle}`}>{parseHTML(safeTitle)}</h2>
                </Link>
                <p className="text-[16px] font-sans">{parseHTML(safeExcerpt)}</p>

            </div>
        </div>
    )
}

export default FeaturedPost