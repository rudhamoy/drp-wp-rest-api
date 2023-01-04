import React from 'react'
import CategoryListItem from '../../components/category/CategoryListItem'
import { ALL_POSTS_FOR_DATE, POSTS_BY_DATE } from '../../components/utils/api'
import fetcher from '../../components/utils/fetcher'

const index = ({ postsByDate }) => {
 
  return (
    <div className="mt-[11px]">
      <div className="w-[100vw] sm:w-[1264px] mx-auto my-5 ">
      <div className="">
       {postsByDate.map((item, index) => (
          <CategoryListItem data={item} key={index} />
        ))}
       </div>
      </div>
     
    </div>
  )
}

export default index

// export async function getStaticPaths() {
//   const res = await fetcher(ALL_POSTS_FOR_DATE)
//   console.log(res)

//   const posts = res.data.posts.nodes

//     const paths = posts.map((post) => ({
//       params: {
//         slug: post.slug
//       },
//     }))

//   return { paths, fallback: 'blocking' }
// }

// export async function getStaticProps({params}) {
//   const splitDate = params.slug.split('-')

//   const variables = {
//     year: parseInt(splitDate[0]),
//     month: parseInt(splitDate[1]),
//     day: parseInt(splitDate[2])
//   }
//   const res = await fetcher(POSTS_BY_DATE,  {variables} )
//   const postsByDate = res.data.posts.nodes

//   return {
//     props: {
//       postsByDate
//     },
//     revalidate: 1,
//   }
// }

export async function getServerSideProps({params}) {
    const splitDate = params.slug.split('-')

  const variables = {
    year: parseInt(splitDate[0]),
    month: parseInt(splitDate[1]),
    day: parseInt(splitDate[2])
  }
  const res = await fetcher(POSTS_BY_DATE,  {variables} )
  const postsByDate = res.data.posts.nodes

  return {
    props: {
      postsByDate
    }
  }
}