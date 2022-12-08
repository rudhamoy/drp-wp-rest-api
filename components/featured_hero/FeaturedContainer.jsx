
import React, { useEffect } from 'react'

import FeaturedPost from './FeaturedPost'
import MasonaryItem from './MasonaryItems'

import { featuredMesonaryData } from "../../data/featuredMesonaryData";

function FeaturedContainer({data}) {

    console.log(data)

    const bigFeat = data
    var mesonaryData = data
   
    return (
        <>
            <div className="w-full h-full sm:flex sm:flex-row gap-2 sm:justify-center">
                <FeaturedPost data={bigFeat} />
                <div className="grid sm:grid-cols-2 gap-2">
                    {featuredMesonaryData.map((article, index) => (
                        <MasonaryItem key={index} image={article.image} icon={article.icon} category={article.category} title={article.title} />
                    ))}
                </div>
            </div>
        </>
    )
}

export default FeaturedContainer
