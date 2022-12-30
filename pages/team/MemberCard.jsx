import React, { useState } from 'react'
import { BsPinterest } from 'react-icons/bs'
import { AiOutlineInstagram } from 'react-icons/ai'

export const MemberCard = ({ data }) => {
    const [zoom, setZoom] = useState(false);
    // spliting the gravetar url params to update height
    const gravaterImageUrl = data.avatar_urls["96"]
    const authorImageLink = gravaterImageUrl.split('?')[0]



    return (
        <>
            <div className="bg-[#dddddd] p-4 w-[16rem] h-[25rem] flex flex-col items-center relative">
                {/* image container To do: Make this image container scale up on hover */}
                <div onMouseEnter={() => setZoom(true)} onMouseOut={() => setZoom(false)} className={` bg-gray-500  ${zoom ? " absolute top-0 h-[30rem]  w-[30rem] z-[2] cursor-pointer transition-all duration-500" : "overflow-hidden rounded-[100%] h-[7rem]  w-[7rem]"}`}>
                    {/* <Image height="auto" width="auto" src={data.avatar_urls["96"]} style={{ objectFit: 'cover' }} /> */}
                    <img src={authorImageLink + "?s=500"}></img>
                </div>
                {/* end image container */}
                <h3 className="text-center text-[1.2rem] text-[#e20e59] hover:text-gray-700 cursor-pointer">{data.name}</h3>
                <p className="h-[12rem] p-1 text-ellipsis">{data.description.substring(0, 180)}</p>
                <div className="flex flex-row gap-2 items-center justify-center p-2">
                    <BsPinterest className="h-6 w-6" />
                    <AiOutlineInstagram className="h-6 w-6" />

                </div>
            </div>

        </>
    )
}
