import React from 'react'
import VideoIcon from '../../assets/icons/VideoIcon';
import cartoon from '../../assets/images/cartoon.png';
import formatDate from '../utils/FormatDate';
function CategoryListItem({ width, data }) {

    return (
        <>
            <div className={`p-[17px] mb-3 rounded-md border bg-white cursor-pointer sm:h-[201px] w-[${width ? width : "95vw"}  sm:w-[${width ? width : "837px"}] flex justify-center `}>
                <div className="flex sm:flex-row flex-col gap-x-2">

                    {/* image */}
                    <div className="relative">
                        <div className="w-[85vw] sm:w-[315px] h-[165px] rounded-[5px] overflowHidden">
                            <img className="w-[100%] h-[100%]" src={data?._embedded["wp:featuredmedia"][0].link} alt="" />
                        </div>
                        <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-[#000000] rounded"></div>
                        <div className="absolute  z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-1 items-center drop-shadow-3xl ">

                            <VideoIcon width={15} height={15} className="text-[#ffd200] font-bold" alt="" />
                            <div className="capitalize text-[8px] text-[#ffd200] font-nunitoSans  font-bold">{formatDate(data?.date).toUpperCase()}</div>
                        </div>
                    </div>
                    <div className="relative">
                        <p className="text-[10px] font-bold font-nunitoSans text-[#bf912d] mb-[5px] mt-[5px] sm:mt-0">{data?._embedded["wp:term"][0][0].name.toUpperCase()}</p>
                        <h3 className="text-[16px] sm:text-[18px] text-black font-nunitoSans leading-[18px] font-semibold">{data?.title.rendered.replace(/&#8217;/, "'")}</h3>
                        {/* <h3 className="text-[16px] sm:text-[18px] font-nunitoSans leading-[18px] font-semibold">The Fabulous Season 1: Release Date Update And What We Know</h3> */}
                        {/* <p className='text-[#6d6d6d] text-[15px] font-[300] font-sans hidden sm:block mt-[5px]'>Rovio revealed that a brand-new, in-depth Angry Birds television series was developing for a 2020 debut in late 2018. Early in 2020, it was announced</p> */}
                        <p className='text-[#6d6d6d] text-[15px] font-[300] font-sans hidden sm:block mt-[5px] text-ellipsis overflow-hidden'>{data?.excerpt.rendered.replace(/<[^>]*(>|$)|&nbsp;|&zwnj;|&raquo;|&laquo;|&gt;/g, '').substring(0, 150)}</p >
                        <p className="text-[#737373] text-[12px] font-[300] font-nunitoSans absolute bottom-0 sm:block hidden">{formatDate(data?.date).toUpperCase()}</p>
                    </div>

                </div>
            </div>


        </>
    )
}

export default CategoryListItem