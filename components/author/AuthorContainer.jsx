import React from 'react'
import Link from 'next/link'
import Featured from '../sidebar/Featured'
import Ads from './Ads'
import BlogList from './BlogList'
import { MdArrowForwardIos } from 'react-icons/md'
import AuthorCard from './AuthorCard'

import { useInView } from 'react-intersection-observer'
import CategoryListItem from '../category/CategoryListItem'

const AuthorContainer = ({ postByAuthor, userById, featured }) => {

  const { ref, inView } = useInView()

  return (
    <div className="mt-6 sm:mt-10 flex flex-col justify-center items-center">
      <div className="sm:px-2 w-[95vw] sm:w-[1264px]">
        <div className="flex items-center gap-x-1">
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

            <div className="w-full sm:w-[837px] cursor-pointer">
              <div>
                <div className="rounded-[5px] h-[40] sm:h-[52px] border bg-[#bf912d] text-center mt-8 mb-14 text-[23px] sm:text-[34px] flex justify-center">
                  <p className="text-[#ffd200]">MORE STORIES</p>
                </div>
              </div>
            </div>
          </div>
          {/* right */}
          <div className="hidden sm:flex flex-col items-center gap-y-3">
            <div className="h-[480px]">
              <Ads />
            </div>
            <Featured data={featured} />
            <div className={`h-[600px] w-[100%] ${inView === true ? 'sticky top-10' : ''}`} ref={ref}>
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