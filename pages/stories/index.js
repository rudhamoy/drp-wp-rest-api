import React from 'react'
import StoriesList from '../../components/stories/StoriesList'

const index = ({stories}) => {
  return (
    <div>
        <StoriesList stories={stories} />
    </div>
  )
}

export default index

export async function getStaticProps () {
    const getStories = await fetch('http://localhost:3000/api/stories')
    const stories = await getStories.json()

    return {
        props: {
            stories
        }
    }
}