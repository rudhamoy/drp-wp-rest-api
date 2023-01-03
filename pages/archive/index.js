import React from 'react'
import CategoryListItem from '../../components/category/CategoryListItem'
import { POSTS_BY_DATE } from '../../components/utils/api'
import fetcher from '../../components/utils/fetcher'

const index = ({ postsByDate }) => {
 
  return (
    <div>
      {postsByDate.map((item, index) => (
        <CategoryListItem data={item.node} key={index} />
      ))}
    </div>
  )
}

export default index

export async function getStaticProps({params}) {
  console.log(params)

  const variables = {
    year: parseInt(2022),
    month: parseInt(12),
    day: parseInt(22)
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