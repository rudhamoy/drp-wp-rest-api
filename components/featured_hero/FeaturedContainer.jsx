
import React, { useEffect } from 'react'
import videoIcon from '../../assets/icons/video-icon.svg'
import FeaturedPost from './FeaturedPost'
import MasonaryItem from './MasonaryItems'

function FeaturedContainer({ data }) {
    const bigFeat = data

    // if (data.length > 0) {
    //     var mesonaryData = data.slice(1, 4)
    // }

    return (
        <>
            <div className="w-full h-full sm:flex sm:flex-row gap-2 sm:justify-center">
                <FeaturedPost data={bigFeat} />
                <div className="grid sm:grid-cols-2 gap-2">

                    {data.slice(1, 5).map((article, index) => (
                        <MasonaryItem data={article} key={index}  />
                    ))}

                </div>
            </div>
        </>
    )
}

export default FeaturedContainer
