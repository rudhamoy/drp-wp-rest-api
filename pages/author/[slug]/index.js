import React from 'react'
import AuthorContainer from '../../../components/author/AuthorContainer'
import Head from 'next/head'
import parse, { attributesToProps } from 'html-react-parser';

const index = ({ postByAuthor, userById, featured, headTitle }) => {

  const html = `${userById.yoast_head}`
  const options = {
    replace: domNode => {
      if (domNode.name === 'meta' && domNode.attribs.property === "og:url") {
        const props = attributesToProps(domNode.attribs);
        const splitedProps = props.content.split('/')
        const replaceDomain = splitedProps.splice(2, 1, 'tollywoodlife.com')
        const url = `${splitedProps[0]}//${splitedProps[2]}/${splitedProps[3]}/${splitedProps[4]}`
        return <meta property="og:url" content={`${url}`} />
      }
    }
  };
  
  return (
    <>
      <Head>
        {parse(html, options)}
      </Head>
      <div>
        <AuthorContainer postByAuthor={postByAuthor} featured={featured} userById={userById} />
      </div>
    </>
  )
}

export async function getStaticPaths() {
  const res = await fetch('https://backend.tollywoodlife.com/wp-json/wp/v2/users?_embed&per_page=100')

  const users = await res.json()

  const paths = users.map((user) => ({
    params: { slug: user.slug },
  }))

  return { paths, fallback: 'blocking' }
}


export async function getStaticProps({ params }) {


  const getUser = await fetch(`https://backend.tollywoodlife.com/wp-json/wp/v2/users?_embed&slug=${params.slug}`)
  const user = await getUser.json()

  // let userById
  // users.map(user => {
          
  //         if(user.slug.toLowerCase() === params.slug.toLowerCase()) {
  //           userById = user
  //         }
  //     })

  const getPosts = await fetch(`https://backend.tollywoodlife.com/wp-json/wp/v2/posts?_embed&author=${user[0].id}&per_page=15`)
  const postByAuthor = await getPosts.json()

  const featuredPost = await fetch('https://backend.tollywoodlife.com/wp-json/wp/v2/posts?_embed&per_page=7')
  const featured = await featuredPost.json()

  return {
    props: {
      postByAuthor,
      userById: user[0],
      featured
    },
    revalidate: 1,
  }
}

export default index