import React from 'react'
import { AiOutlinePicRight } from "react-icons/ai";
import VideoIcon from '../../assets/icons/VideoIcon';


function CategoryIcon({ categoryList }) {


    if (categoryList === 'video') {
        return (
            <VideoIcon className="text-[#ffd200] font-bold drop-shadow-3xl" />
        )
    } else {
        return (
            <AiOutlinePicRight className="text-[#ffd200] font-bold" />
        )
    }
}

export default CategoryIcon