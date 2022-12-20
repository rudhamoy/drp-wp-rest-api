import React from 'react'
import { data } from './data'

const StoriesList = ({setPlayStory}) => {

    const clickHandler = (index) => {
        setPlayStory(true)
    }
  return (
    <div className="flex gap-x-8">
       {data.map((item, index) => (
        <div onClick={clickHandler}>
            <img src={item.image} alt="" height={200} />
        </div>
       ))}
    </div>
  )
}

export default StoriesList