import React from 'react'
import { useRouter } from 'next/router'
import AuthorContainer from '../../../components/author/AuthorContainer'
import Head from 'next/head'

const index = ({ postByAuthor, userById, featured, headTitle }) => {
  const router = useRouter()
  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <AuthorContainer postByAuthor={postByAuthor} featured={featured} userById={userById} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://tollywoodlife.com/wp-json/wp/v2/users?_embed&per_page=100')

  const users = await res.json()

  const paths = users.map((user) => ({
    params: { slug: user.slug },
  }))

  return { paths, fallback: 'blocking' }
}


export async function getStaticProps({ params }) {


  const getUsers = await fetch(`https://tollywoodlife.com/wp-json/wp/v2/users?_embed&per_page=100`)
  const users = await getUsers.json()

  let userById
  users.map(user => {
          
          if(user.slug.toLowerCase() === params.slug.toLowerCase()) {
            userById = user
          }
      })

  const getPosts = await fetch(`https://tollywoodlife.com/wp-json/wp/v2/posts?_embed&author=${userById.id}&per_page=15`)
  const postByAuthor = await getPosts.json()

  const featuredPost = await fetch('https://tollywoodlife.com/wp-json/wp/v2/posts?_embed&per_page=7')
  const featured = await featuredPost.json()

  return {
    props: {
      postByAuthor,
      userById,
      headTitle: userById.yoast_head_json.title,
      featured
    },
    revalidate: 1,
  }
}

export default index