import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getStories } from '../../features/postSlice'
import { data } from './data'
import StoriesPlayer from './StoriesPlayer'
import TrialStory from './TrialStory'

const StoriesList = () => {
  const dispatch = useDispatch()
  const { stories } = useSelector(state => state.posts)

  const [playStory, setPlayStory] = useState(false)

  const clickHandler = (index) => {
    setPlayStory(true)
  }

  useEffect(() => {
    dispatch(getStories())
  })

  return (
    <div className='relative h-[100vh]'>
     
      <div className="flex gap-8 flex-wrap">
        {stories.map(item => {
          return (
            <div onClick={clickHandler} className="bg-white shadow-sm p-2 cursor-pointer">
              {item.post_title}
            </div>
          )
        })}
      </div>
      {playStory === true && (
        <div className='absolute top-0 right-0 left-0 bottom-0 h-[100vh] bg-gray-700'>
          <TrialStory data={stories} setPlayStory={setPlayStory} />
        </div>
      )}
    </div>
  )
}

export default StoriesList