import React, { useEffect } from 'react'
import CategoryListItem from '../category/CategoryListItem';
import FeaturedContainer from '../featured_hero/FeaturedContainer';
import MoreButton from '../utils/MoreButton';
import CategorySection from './CategorySection';
import HotspotSlider from './HotspotSlider';
import SidebarCategorySection from '../sidebar/SidebarCategorySection';
import SideAds from '../ads/SideAds';
import VisualStoriesSlider from './VisualStoriesSlider';
import { useInView } from 'react-intersection-observer';

function HomeContainer({ data, entertainment, tvShows, anime, tech }) {

    const { ref, inView } = useInView()

    const catSectionArr = [
        [...entertainment, { id: "ENTERTAINMENT" }],
        null,
        [...tvShows, { id: "TV SERIES NEWS" }],
        [...anime, { id: "ANIME NEWS" }],
        [...tech, { id: "TECHNOLOGY" }]

    ]

    console.log(catSectionArr, "catSectionArr")

    return (
        <div className="sm:mx-0 mx-2 sm:mt-6 flex flex-col justify-center items-center">
            <div className="pb-[27px] flex flex-col justify-center items-center">
                <FeaturedContainer data={data} />
                <HotspotSlider />
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-[95vw] sm:w-[1264px]">
                {/* content */}
                <div className="">
                    {catSectionArr.map((item, index) => {
                        if (item === null) {
                            return <VisualStoriesSlider />
                        }
                        return (
                            <CategorySection category="Cate" data={item} />
                        )
                    })}
                    {/* <CategorySection category={"ENTERTAINMENT"} data={catSectionArr} id={1} />
                    
                    <CategorySection category={"TV SERIES NEWS"} data={catSectionArr} id={206} />
                    <CategorySection category={"TECHNOLOGY"} data={catSectionArr} id={176} />
                    <CategorySection category={"ANIME NEWS"} data={catSectionArr} id={171} /> */}
                    <div className="hidden sm:block">
                        <MoreButton title={"MORE STORIES"} />
                        <CategoryListItem />
                        <CategoryListItem />
                        <CategoryListItem />
                        <CategoryListItem />
                        <CategoryListItem />
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