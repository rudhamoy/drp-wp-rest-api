import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { useSelector } from 'react-redux';

import CategoryListItem from '../category/CategoryListItem';
import FeaturedContainer from '../featured_hero/FeaturedContainer';
import MoreButton from '../utils/MoreButton';
import CategorySection from './CategorySection';
import HotspotSlider from './HotspotSlider';
import SidebarCategorySection from '../sidebar/SidebarCategorySection';
import SideAds from '../ads/SideAds';
import VisualStoriesSlider from './VisualStoriesSlider';

function HomeContainer({ data, entertainment, tvShows, anime, tech, hotSpot, secondPage, celebGossip, movieNews, gamesSport }) {
    // const [secondPage, setSecondPage] = useState([])
     

    const { ref, inView } = useInView()

    const sideSectionArr = [
        [...celebGossip, { id: "CELEBRITY GOSSIPS" }],
        null,
        [...movieNews, { id: "MOVIES NEWS" }],
        [...gamesSport, { id: "GAMES & SPORTS" }],
    ]

    const catSectionArr = [
        [...entertainment, { id: "ENTERTAINMENT" }],
        null,
        [...tvShows, { id: "TV SERIES NEWS" }],
        [...anime, { id: "ANIME NEWS" }],
        [...tech, { id: "TECHNOLOGY" }]
    ]

    return (
        <div className="sm:mx-0 mx-2 sm:mt-6 flex flex-col justify-center items-center">
            <div className="pb-[27px] flex flex-col justify-center items-center">
                <FeaturedContainer data={data} />
                {/* <HotspotSlider hotspotData={hotSpot} /> */}
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-[95vw] sm:w-[1264px]">
                {/* content */}
                <div className="">
                    {catSectionArr.map((item, index) => {
                        if (item === null) {
                            return <VisualStoriesSlider />
                        }
                        return (
                            <CategorySection key={index} category="Cate" data={item}  />
                        )
                    })}
                    <div className="hidden sm:block">
                        <MoreButton title={"MORE STORIES"} />
                       {secondPage.map((item) => (
                         <CategoryListItem data={item} key={item.id} />
                       ))}
                    </div>
                </div>
                {/* sidebar */}
                <div className="rounded">
                    <SidebarCategorySection category={"CELEBRITY GOSSIPS"} />
                    <div className="h-[395px]">
                        <SideAds bg={"white"} />
                    </div>
                    <SidebarCategorySection category={"MOVIES NEWS"} />
                    <SidebarCategorySection category={"GAMES & SPORTS"} />
                    <div className={`h-[600px] ${inView === true ? 'sticky top-10' : ''}`} ref={ref}>
                        <SideAds bg={"white"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer