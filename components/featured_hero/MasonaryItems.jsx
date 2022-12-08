import React from 'react'
import Link from 'next/link'

import VideoIcon from '../../assets/icons/VideoIcon';
function MasonaryItem({ data, image, title }) {

    return (
        <Link href={`/single-news/${data['slug']}`}>
            <div className="bg-white w-[95vw] sm:w-[310px] h-[90px] sm:h-[231px] rounded-[3px] flex sm:flex-col gap-x-2 flex-row overflow-hidden cursor-pointer">
                <div className="h-[100%] sm:h-[175px] w-[320px] sm:w-[100%] overflow-hidden relative">
                    <img src={image} alt="" className="w-[100%] h-[100%]" />
                    <div className="absolute z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-2 items-center drop-shadow-3xl ">
                        {/* <img src='../../assets/icons/video-icon.svg' width={15} height={15} className="text-[#ffd200] font-bold drop-shadow-3xl " alt="" /> */}
                        <VideoIcon className="text-[#ffd200] font-bold drop-shadow-3xl" />
                        <div className="capitalize text-[10px] sm:text-[12px] text-[#ffd200] drop-shadow-3xl  font-nunitoSans">TV SERIES</div>
                    </div>
                    <div className='fadeBottom absolute bottom-0 left-0 right-0' />
                </div>
                <div className="sm:p-[10px] p-[6px]">
                    <h3 className="text-[16px] sm:text-[18px] sm:leading-5 text-black font-semibold  sm:line-clamp-2 line-clamp-2 font-nunitoSans ">{title}</h3>
                </div>
            </div>
        </Link>
    )
}

export default MasonaryItem