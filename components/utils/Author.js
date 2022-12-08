import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAuthorById } from '../../features/authorSlice'

const Author = ({id}) => {

    const dispatch = useDispatch()

    useEffect(() => {
            dispatch(getAuthorById(id))
    }, [id, dispatch])

    const {authorById} = useSelector(state => state.author)
    console.log(authorById)

  return (
    <div>
         <p className=''>by <span className="text-[16px] text-[#000000] font-nunitoSans font-semibold">{authorById.name}</span></p>
    </div>
  )
}

export default Author