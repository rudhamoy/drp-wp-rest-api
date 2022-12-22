import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function HotSpotSliderItem({ category, title, image, slug }) {
    return (
        // <Link href={`/single-news/${slug}`}>
            <div  className="flex flex-row items-center cursor-pointer rounded-md w-[400px] p-2 z-0 border-1 ">
                <div className="h-[85px] w-[85px] bg-black overflow-hidden rounded-md">
                    <Image width={85} height={85} className="h-[100%] w-[100%]" src={image} alt="" />
                </div>
                <div className="px-2 relative h-[80px] w-[300px]">
                    <Link href={`/category/${category.slug}`}>
                    <p className="font-nunitoSans mb-[5px] text-[#bf912d] font-bold text-[10px] uppercase">{category.name}</p>
                    </Link>
                    <Link href={`/single-news/${slug}`}>
                    <p className="font-nunitoSans text-[16px] leading-[18px] text-black font-semibold">
                        {title}
                    </p>
                    </Link>
                </div>
                <div className="w-[1px] rounded bg-[#8c8c8c] h-[80px] mx-4"></div>
            </div>
        // </Link>
    )
}

export default HotSpotSliderItem