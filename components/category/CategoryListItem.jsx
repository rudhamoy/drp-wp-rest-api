import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify';

import VideoIcon from '../../assets/icons/VideoIcon';
import cartoon from '../../assets/images/cartoon.png';
import formatDate from '../utils/FormatDate';
import getRandomCategory from '../utils/RandomCategory';
import CategoryIcon from '../utils/CategoryIcon';


function CategoryListItem({ width, data }) {

    const [randomCategory, setRandomCategory] = useState(() => getRandomCategory(data?._embedded["wp:term"][0]))

    const mySafeHTML = DOMPurify.sanitize(data?.excerpt.rendered.substring(0, 150));

    const safeTitle = DOMPurify.sanitize(data?.title.rendered.substring(0, 110));

    // const postDate = new Date(data.date).toLocaleDateString()
    const date = new Date(data.date).getDate()
    const month = new Date(data.date).getMonth()
    const year = new Date(data.date).getFullYear()
    const postDate = `${year}/${month+1}/${date}`

    return (
        <>
            <div className={`p-[17px] mb-3 rounded-md border bg-white cursor-pointer sm:h-[201px] w-[${width ? width : "95vw"}  sm:w-[${width ? width : "837px"}] flex justify-center `}>
                <div className="flex sm:flex-row flex-col gap-x-2">

                    {/* image left */}
                    <div className="relative">
                        <div className="w-[85vw] sm:w-[315px] h-[165px] rounded-[5px] overflowHidden">
                            <Image fill className="object-cover rounded-[5px]" src={data?._embedded["wp:featuredmedia"] ? data?._embedded["wp:featuredmedia"][0].link : ''} alt="" />
                            {/* <Image fill className="object-cover rounded-[5px]" src={`https://dailyresearchplot.com/${data?._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}`} alt="" /> */}
                        </div>
                        <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-[#000000] rounded"></div>
                        <div className="absolute  z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-1 items-center drop-shadow-3xl ">

                            {/* <VideoIcon width={15} height={15} className="text-[#ffd200] font-bold" alt="" /> */}
                            <CategoryIcon categoryList={data.categories} />
                            <div className="capitalize text-[8px] text-[#ffd200] blogTitle  font-bold">{formatDate(data?.date).toUpperCase()}</div>
                        </div>
                    </div>
                    {/* right content */}
                    <div className="relative">
                        <Link href={`/category/${randomCategory.slug}`}>
                            <p className="text-[10px] font-bold blogTitle text-[#bf912d] mb-[5px] mt-[5px] sm:mt-0">{randomCategory.name.toUpperCase()}</p>
                        </Link>
                        <Link href={`/${postDate}/${data['slug']}`}>
                            <h3 className="text-[16px] sm:text-[18px] text-black blogTitle leading-[18px] font-semibold" dangerouslySetInnerHTML={{ __html: safeTitle }}></h3>
                            {/* <h3 className="text-[16px] sm:text-[18px] text-black blogTitle leading-[18px] font-semibold">{data?.title.rendered.replace(/&#8217;/g, "'").substring(0, 110)}</h3> */}

                            {/* <p className='text-[#6d6d6d] text-[15px] font-[300] font-sans hidden sm:block mt-[5px] text-ellipsis overflow-hidden'>{data?.excerpt.rendered.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, '').substring(0, 150)}</p > */}
                            <div className='text-[#6d6d6d] text-[15px] font-[300] font-sans hidden sm:block mt-[5px] text-ellipsis overflow-hidden' dangerouslySetInnerHTML={{ __html: mySafeHTML }}></div>
                        </Link>
                        <p className="text-[#737373] text-[12px] font-[300] blogTitle absolute bottom-0 sm:block hidden">{formatDate(data?.date).toUpperCase()}</p>
                    </div>

                </div>
            </div>


        </>
    )
}

export default CategoryListItem