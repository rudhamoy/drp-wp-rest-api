import React from 'react'
import couplesHug from '../../assets/images/couples_hug.png';
import videoIcon from '../../assets/icons/video-icon.svg';
function SmallerCardItems() {
    return (
        <div className="p-2 px-3 py-[10px] rounded-[2px] border border-[#e4e4e4] bg-white my-1 cursor-pointer h-[130px] w-[398px]" >
            <div className="flex gap-x-2">
                <div className="h-[108px] w-[255px] xs:w-[280px] sm:w-[248px] rounded-md overflow-hidden relative">
                    <img className="w-[100%] h-[100%]" src={couplesHug} alt="" />
                    <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-[#31313193] rounded-md"></div>
                    <div className="absolute  z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-1 items-center drop-shadow-3xl ">
                        <img src={videoIcon} width={15} height={15} className="text-[#ffd200] font-bold" alt="" />
                        {/* <div className="capitalize text-[8px] text-[#ffd200] font-nunitoSans  font-bold">NOVEMBER 2, 2022</div> */}
                    </div>
                </div>
                <div className="relative flex flex-col justify-between">
                    <p className="text-[10px] text-[#bf912d] font-bold">TV SERIES</p>
                    <h2 className="text-[#000000] text-[16px] leading-[18px] font-nunitoSans font-semibold">Bob Hearts Abishola Season 4
                        Release Date, Cast, Plot, and What we know so far
                    </h2>
                    <p className="text-[10px] text-[#737373]">AUGUST 5, 2022</p>
                </div>
            </div>
        </div>
    )
}

export default SmallerCardItems