import React, { useState } from 'react'
import couplesHug from '../../assets/images/couples_hug.png';
// import videoIcon from '../assets/icons/video-icon.svg';
import videoIcon from '../../assets/icons/video-icon.svg';
import getRandomCategory from '../utils/RandomCategory';
import SideBarItem from './SideBarItem';

const FeaturedCard = ({ data }) => {
    const [randomCategory, setRandomCategory] = useState(() => getRandomCategory(data?._embedded["wp:term"][0]))

    return (
        <div className="rounded-[2px] border bg-white my-3 w-[383px] h-[108px] flex justify-center items-center p-2" >
            <div className="flex gap-x-2">
                <div className=" h-[96px] w-[220px] rounded-[4px] overflowHidden relative">
                    <img className="w-[100%] h-[100%]" src={data._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url} alt="" />
                    <div className="absolute z-[10] bottom-2 sm:left-2  left-2 drop-shadow-3xl ">
                        <img src={videoIcon} width={15} height={15} className="text-[#ffd200] font-bold drop-shadow-3xl " alt="" />
                    </div>
                    <div className="fadeBottom absolute bottom-0 left-0 right-0" />
                </div>
                <div className="relative w-[163px]">
                    <p className="text-[10px] text-[#bf912d] font-nunitoSans mb-[5px] cursor-pointer uppercase">{randomCategory.name}</p>
                    <h3 className="text-[#000000] text-[16px] font-[400] font-nunitoSans leading-[18px] cursor-pointer">{data.title.rendered}
                    </h3>
                </div>
            </div>
        </div>
    )
}

const Featured = ({ data }) => {
    return (
        <div className="bg-white rounded-md p-2 border w-[404px]">
            <div className="flex items-center gap-x-1">
                <h1 className="text-[#bf912d] font-nunitoSans text-[20px] whitespace-nowrap uppercase">Featured Stories</h1>
                <div className="bg-[#bf912d] h-[2px] w-[50px]"></div>
            </div>
            <div className="flex flex-col gap-y-[10px] mt-[19px]">
            {data.map((item) => {
                const image = 'https://dailyresearchplot.com' + item._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url
                return (
                    <SideBarItem
                        category={item?._embedded["wp:term"][0][1].name.toUpperCase()}
                        title={item.title.rendered}
                        image={image}
                        slug={item.slug}
                    // image={item._embedded["wp:featuredmedia"][0].link}
                    />
                )
            })}
            </div>
            {/* {data?.map((item, index) => (
                <FeaturedCard data={item} key={index} />
            ))} */}
        </div>
    )
}

export default Featured