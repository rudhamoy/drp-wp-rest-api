import React from 'react'
import VisualStoriesItem from '../../components/home/VisualStoriesItem'
import { ALL_STORIES } from '../../components/utils/api'
import fetcher from '../../components/utils/fetcher'

const index = ({storiesQl}) => {
    console.log(storiesQl)
  return (
    <div className="mx-auto">
      <div className="w-[100vw] sm:w-[1264px] mb-5 flex flex-wrap">
      {storiesQl.map((item, index) => (
        <VisualStoriesItem 
        key={index}
        image={item.featuredImage.node.mediaItemUrl}
        title={item.title}
        data={item}
        />
      ))}
    </div>
    </div>
  )
}

export default index

export async function getStaticProps() {
    const res = await fetcher(ALL_STORIES)
    const storiesQl = res.data.webStories.nodes

  return {
    props:{
        storiesQl
    },
    revalidate: 1,
  }
}