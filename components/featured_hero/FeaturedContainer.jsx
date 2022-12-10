
import React, { useEffect } from 'react'
import videoIcon from '../../assets/icons/video-icon.svg'
import FeaturedPost from './FeaturedPost'
import MasonaryItem from './MasonaryItems'

import { featuredMesonaryData } from "../../data/featuredMesonaryData";

function FeaturedContainer({ data }) {
    const bigFeat = data

    if (data.length > 0) {
        var mesonaryData = data.slice(1, 5)
    }

    return (
        <>
            <div className="w-full h-full sm:flex sm:flex-row gap-2 sm:justify-center">
                <FeaturedPost data={bigFeat} />
                <div className="grid sm:grid-cols-2 gap-2">
                    {/* {featuredMesonaryData.map((article, index) => (
                        <MasonaryItem key={index} image={article.image} icon={article.icon} category={article.category} title={article.title} />
                    ))} */}

                    {mesonaryData.map((article, index) => (
                        <MasonaryItem data={article} key={index} image={`https://dailyresearchplot.com/${article?._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url}`} icon={videoIcon} title={article.title.rendered} />
                    ))}

                </div>
            </div>
        </>
    )
}

export default FeaturedContainer
