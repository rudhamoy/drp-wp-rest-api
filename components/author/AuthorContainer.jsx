import React, { useState } from 'react'
import Link from 'next/link'
import Featured from '../sidebar/Featured'
import Ads from './Ads'
import BlogList from './BlogList'
import { MdArrowForwardIos } from 'react-icons/md'
import AuthorCard from './AuthorCard'

import { useInView } from 'react-intersection-observer'
import CategoryListItem from '../category/CategoryListItem'
import { useDispatch, useSelector } from 'react-redux'
import { getMorePostsByAuthor } from '../../features/authorSlice'

const AuthorContainer = ({ postByAuthor, userById, featured }) => {
  const [pageNum, setPageNum] = useState(4)

  const { ref, inView } = useInView()

  const { postsByAuthor, status } = useSelector(state => state.author)

  const dispatch = useDispatch()

  const clickHandler = () => {
    setPageNum(pageNum + 1)
    const loadMoreData = {
      pageNum,
      userId: userById.id
    }
    dispatch(getMorePostsByAuthor(loadMoreData))
  }

  return (
    <div className="mt-6 sm:mt-10 flex flex-col justify-center items-center">
      <div className="sm:px-2 w-[95vw] sm:w-[1264px]">
        <div className="flex items-center gap-x-1 blogTitle">
          <Link href="/"> Home</Link>
          <MdArrowForwardIos className="text-[#bf912d]" />
          Author
        </div>
        {/* top */}
        <div className="">
          <AuthorCard data={userById} />
        </div>
        <div className="w-[95vw] sm:w-[837px] my-3 border bg-[#c5c5c5] h-1"></div>

        <div className="flex flex-col sm:flex-row justify-between w-[95vw] sm:w-[1264px]">
          {/* left */}
          <div className="">

            <div className="flex flex-col gap-y-2">
              {postByAuthor.map((item, index) => (
                <CategoryListItem key={index} data={item} />
              ))}
            </div>

            {/* load more stories */}
            {postsByAuthor.length >= 1 && postsByAuthor.map((item, index) => (
              <CategoryListItem data={item} key={index} />
            ))}
            {status === 'loading' && (
              <div>
                <p className='text-center text-blue-400 text-3xl'>Loading...</p>
              </div>
            )}

            <div className="w-full sm:w-[837px] cursor-pointer">
              <div>
                <div role="button" onClick={clickHandler} className="rounded-[5px] bg-[#bf912d] cursor-pointer text-center h-[52px] w-[95vw] sm:w-[839px] flex items-center justify-center my-[26px]">
                  <p className="text-[#ffd200] text-[34px] font-nunitoSans">MORE STORIES</p>
                </div>
                {/* <div className="rounded-[5px] h-[40] sm:h-[52px] border bg-[#bf912d] text-center mt-8 mb-14 text-[23px] sm:text-[34px] flex justify-center">
                  <p className="text-[#ffd200] blogTitle">MORE STORIES</p>
                </div> */}
              </div>
            </div>
          </div>
          {/* right */}
          <div className="hidden sm:flex flex-col items-center gap-y-3">
            <div className="h-[480px]">
              <Ads />
            </div>
            <Featured data={featured} />
            <div className={`h-[600px] w-[100%] ${inView === true ? 'sticky top-10 mb-7' : ''}`} ref={ref}>
              <Ads bg="white" />
            </div>
          </div>
        </div>

        {/* bottom */}
        {/* <div className="w-full sm:w-[837px] cursor-pointer">
            <div>
              <div className="rounded-[5px] h-[40] sm:h-[52px] border bg-[#bf912d] text-center mt-8 mb-14 text-[23px] sm:text-[34px] flex justify-center">
                <p className="text-[#ffd200]">MORE STORIES</p>
              </div>
            </div>
          </div> */}
      </div>
    </div >
  )
}

export default AuthorContainer