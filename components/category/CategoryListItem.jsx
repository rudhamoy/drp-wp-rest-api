import React, { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import DOMPurify from 'isomorphic-dompurify';
import parse from 'html-react-parser'

import VideoIcon from '../../assets/icons/VideoIcon';
import cartoon from '../../assets/images/cartoon.png';
import formatDate from '../utils/FormatDate';
import getRandomCategory from '../utils/RandomCategory';
import CategoryIcon from '../utils/CategoryIcon';


function CategoryListItem({ width, data }) {

    const [randomCategory, setRandomCategory] = useState(() => getRandomCategory(data?._embedded ? data?._embedded["wp:term"][0] : data.categories.nodes))

    const mySafeHTML = DOMPurify.sanitize(data?.excerpt.rendered ? data?.excerpt.rendered.substring(0, 150) : data.excerpt.substring(0, 150));

    const safeTitle = DOMPurify.sanitize(data?.title.rendered ? data?.title.rendered.substring(0, 110) : data.title.substring(0, 110));

    const date = new Date(data.date).getDate()
    const month = new Date(data.date).getMonth()
    const year = new Date(data.date).getFullYear()
    const postDate = `${year}/${month + 1}/${date}`
    const archiveDate = `${year}-${month + 1}-${date}`

    const image = data?._embedded ? (data?._embedded["wp:featuredmedia"] ? data?._embedded["wp:featuredmedia"][0].link : '') : (data.featuredImage ? data.featuredImage.node.mediaDetails.sizes[3].sourceUrl : '')
    const catName = parse(randomCategory.name).toUpperCase()


    return (
        <>
            <div className={`p-[17px] mb-3 rounded-md border bg-white cursor-pointer sm:h-[201px] w-[${width ? width : "95vw"}  sm:w-[${width ? width : "837px"}] flex justify-center `}>
                <div className="flex sm:flex-row flex-col gap-x-2">

                    {/* image left */}
                    <div className="relative w-[85vw] sm:w-[315px] h-[165px] rounded-[5px] overflowHidden">
                        {/* <div className=""> */}
                        <Image
                            fill
                            className="object-cover rounded-[5px]"
                            src={image} alt="tollywoodlife"
                            sizes="(min-width: 66em) 33vw,
  (min-width: 44em) 50vw,
  100vw"
                        />

                        {/* </div> */}
                        <div className="absolute top-20 left-0 bottom-0 right-0 bg-gradient-to-t from-[#000000] rounded"></div>
                        <div className="absolute  z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-1 items-center drop-shadow-3xl ">

                            <CategoryIcon categoryList={data.format} />
                            {/* <CategoryIcon categoryList={ data.categories.nodes ?  data.categories.nodes : data.categories} /> */}
                            <div className="capitalize text-[8px] text-[#ffd200] blogTitle  font-bold">{formatDate(data?.date).toUpperCase()}</div>
                        </div>
                    </div>
                    {/* right content */}
                    <div className="relative">
                        <Link href={`/category/${randomCategory.slug}`}>
                            <p className="text-[10px] font-bold blogTitle text-[#bf912d] mb-[5px] mt-[5px] sm:mt-0">{catName}</p>
                        </Link>
                        <Link href={`/${postDate}/${data['slug']}`}>
                            <h3 className="text-[16px] sm:text-[18px] text-black blogTitle leading-[18px] font-semibold" dangerouslySetInnerHTML={{ __html: safeTitle }}></h3>

                            <div className='text-[#6d6d6d] text-[15px] font-[300] font-sans hidden sm:block mt-[5px] text-ellipsis overflow-hidden' dangerouslySetInnerHTML={{ __html: mySafeHTML }}></div>
                        </Link>
                        <Link href={`/archive/${archiveDate}`}>
                            <p className="text-[#737373] text-[12px] font-[300] blogTitle absolute bottom-0 sm:block hidden">{formatDate(data?.date).toUpperCase()}</p>
                        </Link>
                    </div>

                </div>
            </div>


        </>
    )
}

export default CategoryListItem