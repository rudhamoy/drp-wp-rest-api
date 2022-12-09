import React, { useEffect, useState } from 'react'
import CategoryListItem from '../category/CategoryListItem';
import FeaturedContainer from '../featured_hero/FeaturedContainer';
import MoreButton from '../utils/MoreButton';
import CategorySection from './CategorySection';
import HotspotSlider from './HotspotSlider';
import SidebarCategorySection from '../sidebar/SidebarCategorySection';
import SideAds from '../ads/SideAds';
import VisualStoriesSlider from './VisualStoriesSlider';
import { useInView } from 'react-intersection-observer';
import axios from 'axios'

function HomeContainer({ data, entertainment, tvShows, anime, tech, hotSpot }) {
    const [secondPage, setSecondPage] = useState([])
     

    const { ref, inView } = useInView()

    const catSectionArr = [
        [...entertainment, { id: "ENTERTAINMENT" }],
        null,
        [...tvShows, { id: "TV SERIES NEWS" }],
        [...anime, { id: "ANIME NEWS" }],
        [...tech, { id: "TECHNOLOGY" }]

    ]


    useEffect(() => {
        const fetchSeccond = () => {
            axios.get('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=5&page=2').then(res => {
                setSecondPage(res.data)
            })
           
        }
        fetchSeccond()
    }, [])


    return (
        <div className="sm:mx-0 mx-2 sm:mt-6 flex flex-col justify-center items-center">
            <div className="pb-[27px] flex flex-col justify-center items-center">
                <FeaturedContainer data={data} />
                <HotspotSlider hotspotData={hotSpot} />
            </div>
            <div className="flex flex-col sm:flex-row justify-between w-[95vw] sm:w-[1264px]">
                {/* content */}
                <div className="">
                    {catSectionArr.map((item, index) => {
                        if (item === null) {
                            return <VisualStoriesSlider />
                        }
                        return (
<<<<<<< HEAD
                            <CategorySection key={index} category="Cate" data={item}  />
=======
                            <CategorySection category="Cate" data={item} />
>>>>>>> 69b459407d4e37923dfebd44d090ed7195976922
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