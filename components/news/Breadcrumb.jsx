import React, { useState } from 'react'
import Link from 'next/link'
import { MdArrowForwardIos } from 'react-icons/md'

import getRandomCategory from '../utils/RandomCategory'

const Breadcrumb = ({data}) => {

      const [randomData, setRandomData] = useState(() => getRandomCategory(data?._embedded["wp:term"][0]));


  return (
    <div class="text-[#6d6d6d] font-nunitoSans text-[14px] sm:text-[16px] p-2">
    <div class="container flex items-center gap-x-1 py-4 mx-auto overflow-x-auto whitespace-nowrap">

        <Link href="/" class=" hover:underline">
            Home
        </Link>

        {/* <span class="mx-5 text-gray-500 dark:text-gray-300 rtl:-scale-x-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
            </svg>
        </span> */}
        <MdArrowForwardIos className="text-[#bf912d] " />

        <Link href="#" class=" hover:underline capitalize">
           {randomData.name}
        </Link>
        <MdArrowForwardIos className="text-[#bf912d] " />
        <a href="#" class="hover:underline line-clamp-1 sm:line-clamp-none">
            {data.title.rendered}
        </a>
    </div>
</div>
  )
}

export default Breadcrumb