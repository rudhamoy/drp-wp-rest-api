import React from 'react'
import couplesHug from '../../assets/images/couples_hug.png';
// import videoIcon from '../assets/icons/video-icon.svg';
import videoIcon from '../../assets/icons/video-icon.svg';

const FeaturedCard = () => {
    return (
        <div className="rounded-[2px] border bg-white my-3 w-[383px] h-[108px] flex justify-center items-center p-2" >
            <div className="flex gap-x-2">
                <div className=" h-[96px] w-[220px] rounded-[4px] overflowHidden relative">
                    <img className="w-[100%] h-[100%]" src={couplesHug} alt="" />
                    <div className="absolute z-[10] bottom-2 sm:left-2  left-2 drop-shadow-3xl ">
                        <img src={videoIcon} width={15} height={15} className="text-[#ffd200] font-bold drop-shadow-3xl " alt="" />
                    </div>
                    <div className="fadeBottom absolute bottom-0 left-0 right-0" />
                </div>
                <div className="relative">
                    <p className="text-[10px] text-[#bf912d] font-nunitoSans mb-[5px] cursor-pointer">TV SERIES</p>
                    <h3 className="text-[#000000] text-[16px] font-[400] font-nunitoSans leading-[18px] cursor-pointer">Bob Hearts Abishola Season 4
                        Release Date, Cast, Plot, and What we know so far
                    </h3>
                </div>
            </div>
        </div>
    )
}

const Featured = () => {
    return (
        <div className="bg-white rounded-md p-2 border w-[404px]">
            <div className="flex items-center gap-x-1">
                <h1 className="text-[#bf912d] font-nunitoSans text-[20px] whitespace-nowrap uppercase">Featured Stories</h1>
                <div className="bg-[#bf912d] h-[2px] w-[50px]"></div>
            </div>
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
            <FeaturedCard />
        </div>
    )
}

export default Featured