import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Advertisement from '../ads/Advertisement'
import SideAds from '../ads/SideAds'
import ArticleContainer from '../layout/ArticleContainer'
import Featured from '../sidebar/Featured'
import RelatedPost from './RelatedPost'
import { useInView } from 'react-intersection-observer';

const SingleNewsContainer = ({ singleData }) => {

  const { ref, inView } = useInView()
  console.log("inView = ", inView)
  console.log(ref)

  console.log(singleData)
  const image = singleData[0].yoast_head_json.og_image[0].url

  return (
    // <div className="my-6 px-2 flex justify-center items-center">
    <div className="sm:mt-6 flex flex-col justify-center items-center">
      <div className="w-[100vw] sm:w-[1264px] mb-5">


        <p className="flex items-center gap-x-1 text-[14px] sm:text-[16px] p-2 text-[#6d6d6d] font-[300px] "><span>Home</span> <MdArrowForwardIos className="text-[#bf912d] " /> <span className="whitespace-nowrap">TV News</span> <MdArrowForwardIos className="text-[#bf912d]" /> <span className="line-clamp-1 sm:line-clamp-none">{singleData[0].title.rendered}</span></p>

        <Advertisement />

        {/* <div className=" flex justify-between"> */}
        <div className="flex flex-col sm:flex-row justify-between w-[95vw] sm:w-[1264px]">

          {/* content */}
          <div className="">
            <ArticleContainer image={image} data={singleData} />
            <div className='w-[100vw] sm:w-[837px] mt-[18px]'>
              <RelatedPost />
            </div>
          </div>

          {/* sidebar */}
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

        {/* <div className='w-[95vw] sm:w-[837px] mt-[18px]'>
          <RelatedPost />
        </div> */}
      </div>
    </div>
  )
}

export default SingleNewsContainer