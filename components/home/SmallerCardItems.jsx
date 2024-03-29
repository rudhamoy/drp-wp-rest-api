import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify';
import parse from 'html-react-parser'

import couplesHug from '../../assets/images/couples_hug.png';
import VideoIcon from '../../assets/icons/VideoIcon';
import formatDate from '../utils/FormatDate';
import getRandomCategory from '../utils/RandomCategory';
import CategoryIcon from '../utils/CategoryIcon';


function SmallerCardItems({ data }) {
    const [randomCategory, setRandomCategory] = useState(() => getRandomCategory(data?._embedded["wp:term"][0]))

    const safeTitle = DOMPurify.sanitize(data?.title.rendered.substring(0, 60));
    // const postDate = new Date(data.date).toLocaleDateString()

    const date = new Date(data.date).getDate()
    const month = new Date(data.date).getMonth()
    const year = new Date(data.date).getFullYear()
    const postDate = `${year}/${month + 1}/${date}`
     const archiveDate = `${year}-${month+1}-${date}`

    const images = data?._embedded["wp:featuredmedia"] ? data?._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url : data.jetpack_featured_media_url
    

    return (
        <div className="p-2 px-3 py-[10px] rounded-[2px] border border-[#e4e4e4] bg-white my-1 cursor-pointer h-[130px] w-[90vw] sm:w-[398px]" >

            <div className="flex gap-x-2">
                {/* left- image content */}
                <div className='w-[38%] sm:w-[33%]'>
                    <div className="h-[108px] w-[100%] rounded-md overflow-hidden relative bg-green-200">
                        {/* <div className="h-[108px] w-[255px] xs:w-[280px] sm:w-[248px] rounded-md overflow-hidden relative bg-green-200"> */}
                        <Image fill className="w-[100%] h-[100%] object-cover" src={images} alt="" />
                       
                        <div className="absolute  z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-1 items-center drop-shadow-3xl ">
                            {/* <VideoIcon width={15} height={15} className="text-[#ffd200] font-bold" alt="" /> */}
                            <CategoryIcon categoryList={data.categories} />
                        </div>
                        <div className='fadeBottom absolute bottom-0 left-0 right-0 rounded-sm' />
                    </div>
                </div>
                {/* right - content */}
                <div className="relative w-[62%] sm:w-[67%]">

                    <Link href={`/category/${randomCategory.slug}`}>
                        <p className="text-[10px] text-[#bf912d] font-bold blogTitle">{parse(randomCategory.name).toUpperCase()}</p>
                    </Link>
                    <Link href={`/${postDate}/${data.slug}`}>
                        {/* <h2 className="text-[#000000] text-[16px] mt-[5%] leading-[18px] blogTitle font-semibold">{data?.title.rendered.replace(/&#8217;/g, "'").substring(0, 55)}
                        </h2> */}
                        <h2 className="text-[#000000] text-[16px] mt-[5%] leading-[18px] blogTitle font-semibold" dangerouslySetInnerHTML={{ __html: safeTitle }}></h2>
                    </Link>
                    <Link href={`/archive/${archiveDate}`}>
                    <p className="text-[10px] text-[#737373] absolute bottom-0 blogTitle">{formatDate(data?.date).toUpperCase()}</p>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}

export default SmallerCardItems