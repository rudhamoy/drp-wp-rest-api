import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryById } from '../../features/categorySlice'

const Category = ({id}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getCategoryById(id))
    }, [id, dispatch])

    const {categoryById} = useSelector(state => state.category)
    console.log(categoryById)

  return (
    <div>
       <div className="capitalize text-[12px] text-[#ffd200] drop-shadow-3xl  font-bold">{categoryById.name}</div>
    </div>
  )
}

export default Category