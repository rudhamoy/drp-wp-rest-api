
import React, { useEffect } from 'react'

import FeaturedPost from './FeaturedPost'
import MasonaryItem from './MasonaryItems'

import { featuredMesonaryData } from "../../data/featuredMesonaryData";

function FeaturedContainer({ data }) {
    const bigFeat = data

    if (data.length > 0) {
        var mesonaryData = data.slice(1, 5)
        console.log("THIS IS ", mesonaryData[1].yoast_head_json.og_image[0].url)
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
                        <MasonaryItem key={index} image={article.yoast_head_json.og_image[0].url} icon={null} category={null} title={null} />
                    ))}

                </div>
            </div>
        </>
    )
}

export default FeaturedContainer
