import React from 'react'
import couplesHug from '../../assets/images/couples_hug.png';
import VideoIcon from '../../assets/icons/VideoIcon';
import formatDate from '../utils/FormatDate';


function SmallerCardItems({ data }) {

    return (
        <div className="p-2 px-3 py-[10px] rounded-[2px] border border-[#e4e4e4] bg-white my-1 cursor-pointer h-[130px] w-[90vw] sm:w-[398px]" >
            <div className="flex gap-x-2">
                {/* left- image content */}
                <div className='w-[38%] sm:w-[33%]'>
                    <div className="h-[108px] w-[100%] rounded-md overflow-hidden relative bg-green-200">
                    {/* <div className="h-[108px] w-[255px] xs:w-[280px] sm:w-[248px] rounded-md overflow-hidden relative bg-green-200"> */}
                        {/* <img className="w-[100%] h-[100%]" src={data?._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url} alt="" /> */}
                    <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-[#31313193] rounded-md"></div>
                    <div className="absolute  z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-1 items-center drop-shadow-3xl ">
                        <VideoIcon width={15} height={15} className="text-[#ffd200] font-bold" alt="" />
                    </div>
                    </div>
                </div>
                {/* right - content */}
                <div className="relative w-[62%] sm:w-[67%]">
                    <p className="text-[10px] text-[#bf912d] font-bold">{data?._embedded["wp:term"][0][0].name.toUpperCase()}</p>
                    <h2 className="text-[#000000] text-[16px] mt-[5%] leading-[18px] font-nunitoSans font-semibold">{data?.title.rendered.replace(/&#8217;/g, "'").substring(0, 55)}
                    </h2>
                    <p className="text-[10px] text-[#737373] absolute bottom-0">{formatDate(data?.date).toUpperCase()}</p>
                </div>
            </div>
        </div>
    )
}

export default SmallerCardItems