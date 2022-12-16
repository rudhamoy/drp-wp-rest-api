import React from 'react'

import CategoryContainer from '../../../components/category/CategoryContainer'

const index = ({ postByCategory, featured }) => {

    return (
        <div>
            <CategoryContainer
                postByCategory={postByCategory}
                featured={featured}
            />
        </div>
    )
}


export async function getStaticPaths() {
    const res = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/categories?_embed&per_page=100')

    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: { slug: post.name },
    }))

    return { paths, fallback: 'blocking' }
}


export async function getStaticProps({ params }) {

    const getCategories = await fetch(`https://dailyresearchplot.com/wp-json/wp/v2/categories?_embed&per_page=30`)
    const categories = await getCategories.json()

    let categoryId
        categories.map(cat => {
            
            if(cat.name.toLowerCase() === params.slug) {
                categoryId = cat.id
            }
        })

    const getPosts = await fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=${categoryId}&per_page=15`)
    const postByCategory = await getPosts.json()

  const featuredPost = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=7')
  const featured = await featuredPost.json()

  return {
      props: {
        postByCategory,
          featured
      },
      revalidate: 10,
    }
}


export default index