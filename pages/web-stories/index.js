import React from 'react'
import { ALL_STORIES } from '../../components/utils/api'
import fetcher from '../../components/utils/fetcher'

const index = (storiesQl) => {
    // console.log(storiesQl)
  return (
    <div>index</div>
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