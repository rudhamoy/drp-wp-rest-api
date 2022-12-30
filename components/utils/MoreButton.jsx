import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import { getMorePosts } from '../../features/postSlice'

function MoreButton({ title }) {
    const [pageNum, setPageNum] = useState(2)

    const dispatch = useDispatch()

    const clickHandler = () => {
        setPageNum(pageNum + 1)
        dispatch(getMorePosts(pageNum))
    }

    return (
        <div role="button" onClick={clickHandler} className="rounded-[5px] bg-[#bf912d] cursor-pointer text-center h-[52px] w-[95vw] sm:w-[839px] flex items-center justify-center my-[26px]">
            <p className="text-[#ffd200] text-[34px] font-nunitoSans">{title}</p>
        </div>
    )
}

export default MoreButton