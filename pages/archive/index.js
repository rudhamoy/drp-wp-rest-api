import React from 'react'
import { POSTS_BY_DATE } from '../../components/utils/api'
import fetcher from '../../components/utils/fetcher'

const index = ({ postsByDate }) => {
  console.log(postsByDate)
  return (
    <div>index</div>
  )
}

export default index

export async function getStaticProps({params}) {

  const variables = {
    year: parseInt(2022),
    month: parseInt(12),
    day: parseInt(21)
  }
  const res = await fetcher(POSTS_BY_DATE,  {variables} )
  const postsByDate = res.data.posts.edges

  return {
    props: {
      postsByDate
    },
    revalidate: 1,
  }
}