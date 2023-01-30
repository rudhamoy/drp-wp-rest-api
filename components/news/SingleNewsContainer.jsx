import React from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import { useInView } from 'react-intersection-observer';

import Advertisement from '../ads/Advertisement'
import SideAds from '../ads/SideAds'
import ArticleContainer from '../layout/ArticleContainer'
import Featured from '../sidebar/Featured'
import RelatedPost from './RelatedPost'
import Breadcrumb from './Breadcrumb'


const SingleNewsContainer = ({ singleData, featured, postContent }) => {

  const { ref, inView } = useInView()
  
  // const image = singleData[0]._embedded["wp:featuredmedia"][0].link
  const image = singleData[0]?._embedded["wp:featuredmedia"] ? singleData[0]?._embedded["wp:featuredmedia"][0].link : ''

  const video = singleData[0].format === 'video' ? singleData[0].acf.youtube_embed : "="
  const videoId = video.split("=")
 
  let featuredContent = {}
  if(singleData[0].format === 'video') {
    featuredContent = {
      type: 'video',
      url : videoId[1]
    }
  } else if (singleData[0].format === 'standard') {
    featuredContent = {
      type: 'standard',
      url : image
    }
  }



  return (
    // <div className="my-6 px-2 flex justify-center items-center">
    <div className="sm:mt-6 flex flex-col justify-center items-center">
      <div className="w-[100vw] sm:w-[1264px] mb-5">
        <Breadcrumb data={singleData[0]} />
        <Advertisement />

        {/* <div className=" flex justify-between"> */}
        <div className="flex flex-col sm:flex-row justify-between w-[95vw] sm:w-[1264px]">

          {/* content */}
          <div className="">
          <ArticleContainer 
              featured={featuredContent}
              data={singleData} 
              postContent={postContent}
              />
            {/* {singleData.format === "video" ? (
              <ArticleContainer 
            video={videoId[1]}
            data={singleData} 
            />
            ) : (
              <ArticleContainer 
              image={image}
              data={singleData} 
              />
            )} */}
            <div className='w-[100vw] sm:w-[837px] mt-[18px]'>
              <RelatedPost />
            </div>
          </div>

          {/* sidebar */}
          <div className="hidden sm:flex flex-col items-center gap-y-3">
            <div className="h-[480px]">
              <SideAds />
            </div>
            <Featured 
            data={featured} 
            />
            <div className={`h-[600px] w-[100%] ${inView === true ? 'sticky top-10 mb-8' : ''}`} ref={ref}>
              <SideAds bg="white" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SingleNewsContainer