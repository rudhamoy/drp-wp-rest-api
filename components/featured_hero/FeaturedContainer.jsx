
import React, { useEffect } from 'react'

import FeaturedPost from './FeaturedPost'
import MasonaryItem from './MasonaryItems'

import { featuredMesonaryData } from "../../data/featuredMesonaryData";

function FeaturedContainer(data) {

    const bigFeat = data
    var mesonaryData = data
    return (
        <>
            <div className="w-full h-full sm:flex sm:flex-row gap-2 sm:justify-center">
                <FeaturedPost data={bigFeat} />
                <div className="grid sm:grid-cols-2 gap-2">
                    {mesonaryData.map((article, index) => (
                        // <MasonaryItem key={index} image={article.image} icon={content.icon} category={content.category} title={content.title} />
                        <div>SS</div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default FeaturedContainer

export async function getServerSideProps() {
    const getPosts = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?per_page=5')

    const data = await getPosts.json()

    return {props: {data}}
}