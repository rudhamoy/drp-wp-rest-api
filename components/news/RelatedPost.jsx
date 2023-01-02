import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import couplesHug from '../../assets/images/couples_hug.png';
import videoIcon from '../../assets/icons/video-icon.svg';
import VideoIcon from '../../assets/icons/VideoIcon';
import { useDispatch, useSelector } from 'react-redux';

import formatDate from '../utils/FormatDate';
import getRandomCategory from '../utils/RandomCategory';
import { getPostByCategory } from '../../features/postSlice';
import Image from 'next/image';


const FeaturedCardApi = ({ data }) => {
    const [randomCategory, setRandomCategory] = useState(() => getRandomCategory(data?._embedded["wp:term"][0]))
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getPostByCategory(randomCategory.id))
      }, [])

      const image = data._embedded["wp:featuredmedia"] ? data._embedded["wp:featuredmedia"][0].link : ''
    //   data?._embedded["wp:featuredmedia"][0].media_details.sizes.thumbnail.source_url

    const day = new Date(date).getDate()
    const month = new Date(date).getMonth()
    const year = new Date(date).getFullYear()
    const postDate = `${year}/${month+1}/${day}`

    return (
        <div className="p-2 px-3 py-[10px] rounded-[2px] border border-[#e4e4e4] bg-white my-1 cursor-pointer h-[130px] w-[90vw] sm:w-[398px]" >
        <Link href={`/${postDate}/${data['slug']}`}>
       <div className="flex gap-x-2">
           {/* left- image content */}
           <div className='w-[38%] sm:w-[33%]'>
               <div className="h-[108px] w-[100%] rounded-md overflow-hidden relative bg-green-200">
               {/* <div className="h-[108px] w-[255px] xs:w-[280px] sm:w-[248px] rounded-md overflow-hidden relative bg-green-200"> */}
                   <Image fill className="w-[100%] h-[100%] object-cover" src={image} alt="" />
               <div className="absolute top-0 left-0 bottom-0 right-0 bg-gradient-to-t from-[#31313193] rounded-md"></div>
               <div className="absolute  z-[10] bottom-2 sm:left-2  left-2 flex flex-row justify-start gap-1 items-center drop-shadow-3xl ">
                   <VideoIcon width={15} height={15} className="text-[#ffd200] font-bold" alt="" />
               </div>
               </div>
           </div>
           {/* right - content */}
           <div className="relative w-[62%] sm:w-[67%]">
               <p className="text-[10px] text-[#bf912d] font-bold">{randomCategory.name.toUpperCase()}</p>
               <h2 className="text-[#000000] text-[16px] mt-[5%] leading-[18px] blogTitle font-semibold">{data?.title.rendered.replace(/&#8217;/g, "'").substring(0, 55)}
               </h2>
               <p className="text-[10px] text-[#737373] absolute bottom-0">{formatDate(data?.date).toUpperCase()}</p>
           </div>
       </div>
       </Link>
   </div>
    )
}

const FeaturedCard = ({data}) => {
    return (
        <div className="p-[10px] rounded-[2px] border bg-white h-[130px] w-[95vw] sm:w-[398px] border-[#e4e4e4] flex justify-center" >
            <div className="flex gap-x-2 h-[100%]">
                <div className="h-[110px] w-[270px] sm:w-[280px] rounded-[4px] overflowHidden relative">
                    {/* <img className="h-[100%] w-[100%]" src="Layer11.png" alt="" /> */}
                    <div className="absolute z-[10] bottom-1 sm:left-2  left-2 drop-shadow-3xl ">
                        <img src={videoIcon} width={15} height={15} className="text-[#ffd200] font-bold drop-shadow-3xl " alt="" />
                    </div>
                    <div className="fadeBottom absolute bottom-0 left-0 right-0" />
                </div>
                <div className="relative">
                    <p className="text-[10px] mb-[5px] text-[#bf912d] blogTitle">TV SERIES</p>
                    <h1 className="text-[16px] font-bold blogTitle leading-[18px]">Bob Hearts Abishola Season 4
                        Release Date, Cast, Plot, and What we know so far
                    </h1>
                    <p className="text-[#737373] text-[10px] absolute bottom-0 blogTitle">AUGUST 5, 2022</p>
                </div>
            </div>
        </div>
    )
}

const RelatedPost = () => {

    const { postsByCat } = useSelector(state => state.posts)

    return (
        <div className="bg-white p-3 sm:p-[15px] rounded-md border">
            <div className='flex items-center gap-x-1 mb-[20px]'>
                <p className="text-[20px] text-[#bf912d] font-nunitoSans">RELATED POST</p>
                <div className='h-[2px] w-[82px] bg-[#bf912d]'></div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {postsByCat.map((item, index) => (
                    <FeaturedCardApi data={item} key={index} />
                ))}
                {/* <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard />
                <FeaturedCard /> */}

            </div>
        </div>
    )
}

export default RelatedPost