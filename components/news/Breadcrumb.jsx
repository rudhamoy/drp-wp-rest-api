import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { MdArrowForwardIos } from 'react-icons/md'
import { useDispatch } from 'react-redux'

import getRandomCategory from '../utils/RandomCategory'
import { getPostByCategory } from '../../features/postSlice'
import { getCategoryById } from '../../features/categorySlice'

const Breadcrumb = ({data}) => {
    const dispatch = useDispatch()
      const [randomData, setRandomData] = useState(() => getRandomCategory(data?._embedded["wp:term"][0]));

      useEffect(() => {
        dispatch(getPostByCategory(randomData.id))
        dispatch(getCategoryById(randomData.id))
      }, [dispatch])


  return (
    <div class="text-[#6d6d6d] blogTitle text-[14px] sm:text-[16px] p-1">
    <div class="container flex items-center gap-x-1 py-1 mx-auto overflow-x-auto whitespace-nowrap">

        <Link href="/" class=" hover:underline">
            Home
        </Link>

        <span class="text-[#bf912d] dark:text-gray-300 rtl:-scale-x-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
        </span>
        {/* <MdArrowForwardIos className="text-[#bf912d] text-xl" /> */}

        <Link href={`/category/${randomData.slug}`} class="hover:underline capitalize">
            {randomData.name}
        </Link>

        <span class="text-[#bf912d] dark:text-gray-300 rtl:-scale-x-100">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
        </span>
        {/* <MdArrowForwardIos className="text-[#bf912d] text-xl" /> */}
        <Link href="#" class="hover:underline line-clamp-1 sm:line-clamp-none">
            {data.title.rendered}
        </Link>
    </div>
</div>
  )
}

export default Breadcrumb