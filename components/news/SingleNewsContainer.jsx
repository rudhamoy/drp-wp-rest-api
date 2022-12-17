import React, { useState } from 'react'
import { MdArrowForwardIos } from 'react-icons/md'
import Advertisement from '../ads/Advertisement'
import SideAds from '../ads/SideAds'
import ArticleContainer from '../layout/ArticleContainer'
import Featured from '../sidebar/Featured'
import RelatedPost from './RelatedPost'
import { useInView } from 'react-intersection-observer';
import InfiniteScroll from "react-infinite-scroll-component";
import Breadcrumb from './Breadcrumb'
const SingleNewsContainer = ({ singleData, featured }) => {

  const { ref, inView } = useInView()
  const [posts, setPosts] = useState(singleData);
  const [hasMore, setHasMore] = useState(true);

  const getMorePost = async () => {
    const res = await fetch(
      `https://dailyresearchplot.com/wp-json/wp/v2/posts?per_page=1&offset=${posts.length}`
    );
    const newPosts = await res.json();
    setPosts((post) => [...post, ...newPosts]);
  };

  // const image = singleData[0]._embedded["wp:featuredmedia"][0].link
  const image = posts[0]?._embedded["wp:featuredmedia"] ? posts[0]?._embedded["wp:featuredmedia"][0].link : ''

  return (
    // <div className="my-6 px-2 flex justify-center items-center">
    <>
      < InfiniteScroll
        dataLength={singleData.length}
        next={getMorePost}
        hasMore={hasMore}
        endMessage={<h4>Nothing more to show</h4>}
        loader={<h3> Loading...</h3>}
      >
        {posts.map((post, index) => (

          <div className="sm:mt-6 flex flex-col justify-center items-center">
            <div className="w-[100vw] sm:w-[1264px] mb-5">
              <Breadcrumb data={posts[0]} />
              <Advertisement />

              {/* <div className=" flex justify-between"> */}
              <div className="flex flex-col sm:flex-row justify-between w-[95vw] sm:w-[1264px]">

                {/* content */}
                <div className="">
                  <ArticleContainer
                    image={image}
                    data={posts}
                  />
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
                  <div className={`h-[600px] w-[100%] ${inView === true ? 'sticky top-10' : ''}`} ref={ref}>
                    <SideAds bg="white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </InfiniteScroll >
    </>

  )
}

export default SingleNewsContainer