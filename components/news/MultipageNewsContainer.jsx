import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import { useInView } from 'react-intersection-observer'

import Advertisement from '../ads/Advertisement'
import SideAds from '../ads/SideAds'
import Featured from '../sidebar/Featured'
import MultiArticleContainer from '../layout/MultiArticleContainer'
import RelatedPost from './RelatedPost'

const MultipageNewsContainer = ({ image }) => {
  const { ref, inView } = useInView()

  return (
    <div className="sm:mt-6 flex flex-col justify-center items-center">
      <div className="w-[100vw] sm:w-[1264px] mb-5">
        <p className="flex items-center gap-x-1 text-[14px] sm:text-[16px] p-2 text-[#6d6d6d] font-[300px]"><span>Home</span> <MdArrowForwardIos className="text-[#bf912d] " /> <span className="whitespace-nowrap">TV News</span> <MdArrowForwardIos className="text-[#bf912d]" /> <span className="line-clamp-1 sm:line-clamp-none">Joel McHale's Starmen Take Center Stage in Stargirl Season 3 Photos</span></p>
        <Advertisement />

       <div className="flex flex-col sm:flex-row justify-between w-[95vw] sm:w-[1264px]">
          {/* left */}
          <div className="">
            <MultiArticleContainer image={image} />
            <div className='w-[100vw] sm:w-[837px] mt-[18px]'>
              <RelatedPost />
            </div>
          </div>
          {/* right */}
          <div className="hidden sm:flex flex-col items-center gap-y-3">
            <div className="h-[480px]">
              <SideAds />
            </div>
            <Featured />
            <div className={`h-[600px] w-[100%] ${inView === true ? 'sticky top-10' : ''}`} ref={ref}>
              <SideAds bg="white" />
            </div>
          </div>
        </div>

        {/* <div className='w-[100vw] sm:w-[837px] mt-[18px]'>
          <RelatedPost />
        </div> */}
      </div>
    </div>
  )
}

export default MultipageNewsContainer