import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { MdArrowForwardIos } from 'react-icons/md'
import Advertisement from '../ads/Advertisement'
import Ads from '../author/Ads'
import FeaturedContainer from '../featured_hero/FeaturedContainer'
import Featured from '../sidebar/Featured'
import CategoryListItem from './CategoryListItem'

import { useInView } from 'react-intersection-observer';
import { useDispatch, useSelector } from 'react-redux'
import { getMorePostsByCategory } from '../../features/categorySlice'

function CategoryContainer({ featured, postByCategory, catId }) {
    const [pageNum, setPageNum] = useState(4)

    const { ref, inView } = useInView()
    const router = useRouter()

    const { postsByCategory, status } = useSelector(state => state.category)

    const featuredData = postByCategory.slice(0, 5)
    const categoryPostList = postByCategory.slice(6, 14)



    const dispatch = useDispatch()

    const clickHandler = () => {
        setPageNum(pageNum + 1)
        const loadMoreData = {
            pageNum,
            catId
        }
        dispatch(getMorePostsByCategory(loadMoreData))
    }


    return (
        <>
            <div className="px-2 flex flex-col justify-center items-center">
                <div className="w-[95vw] sm:w-[1264px] mt-2 mb-5">
                    <div className="sm:mt-5 flex flex-row items-center gap-2 w-[95vw] sm:w-[1264px]">
                        <div>
                            <p className="font-bold sm:text-[30px] text-[20px] capitalize">{router.query.slug}</p>
                            <div className="flex items-center gap-x-1 whitespace-nowrap text-[16px] sm:text-base">
                                <Link href="/" className="hover:underline">Home</Link>
                                <MdArrowForwardIos className="text-[#bf912d]" />
                                <p>{router.query.slug}</p>
                            </div>
                        </div>

                    </div>


                    <div className="w-[95vw] sm:w-[1264px]">
                        <Advertisement />
                        <FeaturedContainer data={featuredData} />
                    </div>

                    <div className="mt-[13px]" >
                        <div className="flex flex-col sm:flex-row justify-between w-[95vw] sm:w-[1264px]">
                            <div className="">
                                {categoryPostList && categoryPostList.map((item, index) => (
                                    <CategoryListItem key={index} data={item} />
                                ))}
                                {/* <div className="p-2 rounded-md border bg-[#bf912d] text-center text-white mt-8 mb-14 text-2xl">
                                <p className="text-yellow-400">MORE STORIES</p>
                            </div> */}
                            {/* load more stories */}
                                {postsByCategory.length >= 1 && postsByCategory.map((item, index) => (
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
                            <div className="hidden sm:flex flex-col items-center gap-y-3">
                                <div className="h-[480px]">
                                    <Ads />
                                </div>
                                <Featured data={featured} />
                                <div className={`h-[600px] w-[100%] ${inView === true ? 'sticky top-10 mb-6' : ''}`} ref={ref}>
                                    <Ads bg="white" />
                                </div>
                            </div>
                        </div>

                        {/* <div className="w-full sm:w-[837px] cursor-pointer">
                        <div>
                            <div className="rounded-[5px] h-[40] sm:h-[52px] border bg-[#bf912d] text-center mt-8 mb-14 text-[23px] sm:text-[34px] flex justify-center">
                                <p className="text-[#ffd200]">MORE STORIES</p>
                            </div>
                        </div>
                    </div> */}
                    </div >


                </div>
            </div>
        </>
    )
}

export default CategoryContainer





