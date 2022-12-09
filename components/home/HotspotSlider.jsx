import React, { useState } from 'react'
import girlboobs from '../../assets/images/girlboobs.png'
import beardman from '../../assets/images/beard-man.png';
import kdrama from '../../assets/images/kdrama.png';
import rightArrowIcon from '../../assets/icons/right-arrow-icon.svg';
import leftArrowIcon from '../../assets/icons/left-arrow-icon.svg';
import { FiChevronLeft } from 'react-icons/fi';
import { FiChevronRight } from 'react-icons/fi';
import HotSpotSliderItem from './HotSpotSliderItem';
import HotspotCarousel from './HotspotCarousel';


const data = [
    {
        category: "CELEBRITY",
        img: girlboobs,
        title: "CSI: Vegas Season 2 Release Date, Cast, Plot, and Everything you need to know about the series"
    },
    {
        category: "TV SERIES",
        img: beardman,
        title: "CSI: Vegas Season 2 Release Date, Cast, Plot, and Everything you need to know about the series"
    },
    {
        category: "CELEBRITY",
        img: kdrama,
        title: "Chris Rock Responds to Will Smith’s apology video"
    },
    {
        category: "CELEBRITY",
        img: girlboobs,
        title: "Shama Sikandar Flaunts in New Instagram Hot Pictures"
    },
    {
        category: "CELEBRITY",
        img: girlboobs,
        title: "Shama Sikandar Flaunts in New Instagram Hot Pictures"
    },
    {
        category: "CELEBRITY",
        img: kdrama,
        title: "Chris Rock Responds to Will Smith’s apology video"
    },
    {
        category: "TV SERIES",
        img: beardman,
        title: "CSI: Vegas Season 2 Release Date, Cast, Plot, and Everything you need to know about the series"
    },
    {
        category: "TV SERIES",
        img: beardman,
        title: "CSI: Vegas Season 2 Release Date, Cast, Plot, and Everything you need to know about the series"
    },
    {
        category: "TV SERIES",
        img: beardman,
        title: "CSI: Vegas Season 2 Release Date, Cast, Plot, and Everything you need to know about the series"
    },
    {
        category: "TV SERIES",
        img: beardman,
        title: "CSI: Vegas Season 2 Release Date, Cast, Plot, and Everything you need to know about the series"
    },
    {
        category: "TV SERIES",
        img: beardman,
        title: "CSI: Vegas Season 2 Release Date, Cast, Plot, and Everything you need to know about the series"
    },
    {
        category: "TV SERIES",
        img: beardman,
        title: "CSI: Vegas Season 2 Release Date, Cast, Plot, and Everything you need to know about the series"
    },
    
]


function HotspotSlider({hotspotData}) {
    

    return (
        <div className="w-[95vw] sm:w-[1264px] h-[150px] bg-[#ffffff] mt-4 rounded-[5px] overflow-hidden relative drop-shadow-container">
            <div className="flex justify-between rounded-[5px]">
                <div className="flex items-center gap-x-2 relative  w-[160px] overflow-hidden " >
                    <p className="text-[#ffffff] text-[20px] z-[1] px-[10px] font-nunitoSans">HOT SPOT</p>
                    <div className="h-[100px] w-[200px] bg-[#bf912d] absolute  left-[-50px] skew-x-[-20deg]"></div>
                </div >
                <div className="w-[160px]"></div>
            </div>

            <div>
                <HotspotCarousel data={data} hotspotData={hotspotData} />
            </div>
        </div>
    )
}

export default HotspotSlider


