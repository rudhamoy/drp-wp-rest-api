import React from 'react'
import couplesHug from '../../assets/images/couples_hug.png';
import videoIcon from '../../assets/icons/video-icon.svg';


const FeaturedCard = () => {
    return (
        <div className="p-[10px] rounded-[2px] border bg-white h-[130px] w-[95vw] sm:w-[398px] border-[#e4e4e4] flex justify-center" >
            <div className="flex gap-x-2 h-[100%]">
                <div className="h-[110px] w-[270px] sm:w-[280px] rounded-[4px] overflowHidden relative">
                    <img className="h-[100%] w-[100%]" src="Layer11.png" alt="" />
                    <div className="absolute z-[10] bottom-1 sm:left-2  left-2 drop-shadow-3xl ">
                        <img src={videoIcon} width={15} height={15} className="text-[#ffd200] font-bold drop-shadow-3xl " alt="" />
                    </div>
                    <div className="fadeBottom absolute bottom-0 left-0 right-0" />
                </div>
                <div className="relative">
                    <p className="text-[10px] mb-[5px] text-[#bf912d] font-nunitoSans">TV SERIES</p>
                    <h1 className="text-[16px] font-bold font-nunitoSans leading-[18px]">Bob Hearts Abishola Season 4
                        Release Date, Cast, Plot, and What we know so far
                    </h1>
                    <p className="text-[#737373] text-[10px] absolute bottom-0 font-nunitoSans">AUGUST 5, 2022</p>
                </div>
            </div>
        </div>
    )
}

const RelatedPost = () => {
    return (
        <div className="bg-white p-3 sm:p-[15px] rounded-md border">
            <div className='flex items-center gap-x-1 mb-[20px]'>
                <p className="text-[20px] text-[#bf912d] font-nunitoSans">RELATED POST</p>
                <div className='h-[2px] w-[82px] bg-[#bf912d]'></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
            </div>
        </div>
    )
}

export default RelatedPost