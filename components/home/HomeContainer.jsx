import React, { useEffect, useState } from 'react'
import { useInView } from 'react-intersection-observer';
import { useSelector, useDispatch } from 'react-redux';

import CategoryListItem from '../category/CategoryListItem';
import FeaturedContainer from '../featured_hero/FeaturedContainer';
import MoreButton from '../utils/MoreButton';
import CategorySection from './CategorySection';
import HotspotSlider from './HotspotSlider';
import SidebarCategorySection from '../sidebar/SidebarCategorySection';
import SideAds from '../ads/SideAds';
import VisualStoriesSlider from './VisualStoriesSlider';

import { getStories } from '../../features/postSlice';

function HomeContainer({ data, entertainment, tvShows, anime, tech, hotSpot, secondPage, celebGossip, movieNews, gamesSport }) {
    const dispatch = useDispatch()
    
    const { posts, stories, status } = useSelector(state => state.posts)

    const { ref, inView } = useInView()

    const sideSectionArr = [
        [...celebGossip, { id: "CELEBRITY GOSSIPS" }, {slug: 'celebrity-gossip'}],
        null,
        [...movieNews, { id: "MOVIES NEWS" }, {slug: 'movie'}],
        [...gamesSport, { id: "GAMES & SPORTS"}, {slug: 'games'}],
    ]

    const catSectionArr = [

        [...entertainment, { id: "ENTERTAINMENT" }, {slug: 'entertainment'}],
        null,
        [...tvShows, { id: "TV SERIES NEWS" }, {slug: 'tv-show'}],
        [...anime, { id: "ANIME NEWS" }, {slug: 'anime'}],
        [...tech, { id: "TECHNOLOGY" }, {slug: 'technology'}]
    ]

    useEffect(() => {
        dispatch(getStories())
    }, [dispatch])


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
                            return <VisualStoriesSlider visualStories={stories} />
                        }
                        return (
                            <CategorySection key={index} category="Cate" data={item} />
                        )
                    })}
                    <div className="hidden sm:block mt-[19px]">

                        {/* more stories */}
                        {posts.map((item, index) => (
                            <CategoryListItem data={item} key={index} />
                        ))}
                        {status === 'loading' && (
                            <div>
                                <p className='text-center text-blue-400 text-3xl'>Loading...</p>
                            </div>
                        )}

                        <MoreButton title={"MORE STORIES"} />

                        {secondPage.map((item, index) => (
                            <CategoryListItem data={item} key={index} />
                        ))}
                    </div>
                </div>
                {/* sidebar */}
                <div className="rounded">
                    {sideSectionArr.map((item, index) => {
                        if (item === null) {
                            return <div className="h-[395px]">
                                <SideAds bg={"white"} key={index} />
                            </div>
                        }
                        return (
                            <SidebarCategorySection key={index} category={"CELEBRITY GOSSIPS"} data={item} />
                        )
                    })}
                    <div className={`h-[600px] ${inView === true ? 'sticky top-10' : ''}`} ref={ref}>
                        <SideAds bg={"white"} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeContainer