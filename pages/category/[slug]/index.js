import React from 'react'
import Head from 'next/head'
import CategoryContainer from '../../../components/category/CategoryContainer'

const index = ({ postByCategory, featured, headTitle }) => {


    return (
        <>
            <Head>
                <title>{headTitle}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div>
                <CategoryContainer
                    postByCategory={postByCategory}
                    featured={featured}
                />
            </div>
        </>
    )
}


export async function getStaticPaths() {
    const res = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/categories?_embed&per_page=100')

    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: 'blocking'}
}


export async function getStaticProps({ params }) {

    const getCat = await fetch(`https://tollywoodlife.com/wp-json/wp/v2/categories?_embed&slug=${params.slug}`)
    const cat = await getCat.json()

    // const getCategories = await fetch(`https://tollywoodlife.com/wp-json/wp/v2/categories?_embed&per_page=30`)
    // const categories = await getCategories.json()

    // let categoryId
    // categories.map(cat => {

    //     if (cat.slug === params.slug) {
    //         categoryId = cat.id
    //     }
    // })

    // 

    const getPosts = await fetch(`https://tollywoodlife.com/wp-json/wp/v2/posts?_embed&categories=${cat[0].id}&per_page=15`)
    const postByCategory = await getPosts.json()

    const featuredPost = await fetch('https://tollywoodlife.com/wp-json/wp/v2/posts?_embed&per_page=7')
    const featured = await featuredPost.json()

    return {
        props: {
            postByCategory,
            headTitle: cat[0].yoast_head_json.title,
            featured
        },
        revalidate: 1,
    }
}


export default index