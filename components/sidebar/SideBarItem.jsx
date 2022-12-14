import React from 'react'
import Link from 'next/link'
import videoIcon from '../../assets/icons/video-icon.svg';

function SideBarItem({ category, title, image, slug }) {
    return (

        <div className="flex flex-row items-center p-2 cursor-pointer rounded-[2px] w-[90vw] sm:w-[383px] h-[108px] z-0 border">
            <div className="h-[85px] w-[85px] overflow-hidden rounded-[4px] relative">
                <img className="h-[100%] w-[100%] object-cover" src={image} alt="" />
                {/* <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-[#000000] rounded-sm"></div> */}

                <div className="absolute  z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-1 items-center drop-shadow-3xl ">

                    <img src={videoIcon} width={15} height={15} className="text-[#ffd200] font-bold" alt="" />

                    {/* <div className="capitalize text-[8px] text-[#ffd200] font-nunitoSans  font-bold">NOVEMBER 2, 2022</div> */}
                </div>
                    <div className='fadeBottom absolute bottom-0 left-0 right-0 rounded-sm' />
            </div>
            <div className="px-2 relative h-[80px] w-[250px]">
                <p className="font-nunitoSans text-[#bf912d] font-bold text-[10px] capitalize mb-[5px]">{category}</p>
                <Link href={`/single-news/${slug}`}>
                <h3 className="font-nunitoSans text-[16px] leading-[18px] text-black font-semibold">
                    {title}
                </h3>
                </Link>
            </div>
        </div>

    )
}

export default SideBarItem