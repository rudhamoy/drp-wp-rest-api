import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategoryById } from '../../features/categorySlice'
import axios from 'axios'

const Category = ({ id }) => {
  const [cateName, setCateName] = useState()

  const url = 'https://dailyresearchplot.com/wp-json/wp/v2/categories'


  useEffect(() => {
    const getCategorybyId = () => {
      axios.get(`${url}/${id}/`).then(res => {
        setCateName(res.data)
      })
    }
    getCategorybyId()
  }, [id])

<<<<<<< HEAD
    // const dispatch = useDispatch()
=======
  console.log(cateName)
  // const dispatch = useDispatch()
>>>>>>> e54ed32734988b0034510942d0457ca78b916a8c

  // useEffect(() => {
  //     dispatch(getCategoryById(id))
  // }, [id, dispatch])

  // const {categoryById} = useSelector(state => state.category)

  return (
    <div>
      <div className="capitalize text-[12px] text-[#ffd200] drop-shadow-3xl  font-bold">Category</div>
      {/* <div className="capitalize text-[12px] text-[#ffd200] drop-shadow-3xl  font-bold">{cateName.name}</div> */}
    </div>
  )
}

export default Category