import React from 'react'
import { FiChevronRight } from 'react-icons/fi'
import CategoryListItem from '../category/CategoryListItem'
import SliderItem from '../home/HotSpotSliderItem'
import huggin from "../../assets/images/couples_hug.png";
import SmallerCardItems from '../home/SmallerCardItems'
import SideBarItem from './SideBarItem';


function SidebarCategorySection({ category, data }) {

    return (
        <div className="bg-white mt-[30px] h-[560px] w-[95vw] sm:w-[404px] rounded-[5px] drop-shadow-container">
            <div className="p-2">
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-x-2">
                        <h1 className="font-nunitoSans text-[#bf912d] text-[22px] font-semibold uppercase">{data[4].id}</h1>
                        <div className="h-[2.5px] w-[100px] rounded bg-[#bf912d]"></div>
                    </div>

                </div>
                <div className="mt-[19px] flex flex-col gap-y-[10px]">
                    {data.slice(0, 4).map((item) => {
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
                <div className="flex items-center justify-center mt-[13px]">
                    <p className="text-[#bf912d] font-semibold font-nunitoSans text-[16px]">READ ALL</p>
                    <FiChevronRight className="text-[#bf912d] text-[18px]" />
                </div>
            </div>
        </div>
    )
}

export default SidebarCategorySection