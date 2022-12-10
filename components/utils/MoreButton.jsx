import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { getPosts, updatePageNum } from '../../features/postSlice'

const MoreButton = ({ title }) => {
    const [page, setPage] = useState(2)
    const dispatch = useDispatch()

    const { pageNum } = useSelector(state => state.posts)

    const clickFunc = ()=> {
        setPage(page+1)
        dispatch(updatePageNum(parseInt(page)))
        dispatch(getPosts(parseInt(page)))
    }

    return (
        <div role="button" onClick={clickFunc} className="rounded-[5px] bg-[#bf912d] cursor-pointer text-center h-[52px] w-[95vw] sm:w-[839px] flex items-center justify-center my-[26px]">
            <p className="text-[#ffd200] text-[34px] font-nunitoSans">{title}</p>
        </div>
    )
}

export default MoreButton