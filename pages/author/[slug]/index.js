import React from 'react'
import AuthorContainer from '../../../components/author/AuthorContainer'

const index = ({postByAuthor, userById, featured}) => {
 
  return (
    <div>
      <AuthorContainer postByAuthor={postByAuthor} featured={featured} userById={userById} />
    </div>
  )
}

export async function getStaticPaths() {
    const res = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/users?_embed&per_page=100')

    const users = await res.json()

    const paths = users.map((user) => ({
        params: { slug: user.slug },
    }))

    return { paths, fallback: 'blocking' }
}


export async function getStaticProps({ params, query }) {
  

    const getUsers = await fetch(`https://dailyresearchplot.com/wp-json/wp/v2/users?_embed&per_page=100`)
    const users = await getUsers.json()

    let userById
    users.map(user => {
            
            if(user.slug.toLowerCase() === params.slug.toLowerCase()) {
              userById = user
            }
        })

    const getPosts = await fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&author=${userById.id}&per_page=15`)
    const postByAuthor = await getPosts.json()

  const featuredPost = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=7')
  const featured = await featuredPost.json()

  return {
      props: {
        postByAuthor,
        userById,
          featured
      },
      revalidate: 10,
    }
}

export default index