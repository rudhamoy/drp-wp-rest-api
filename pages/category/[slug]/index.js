import React from 'react'
import Head from 'next/head'
import parse, { attributesToProps } from 'html-react-parser';
import CategoryContainer from '../../../components/category/CategoryContainer'

const index = ({ postByCategory, featured, head, catId }) => {

    const html = `${head.yoast_head}`
    const options = {
        replace: domNode => {
            if (domNode.name === 'meta' && domNode.attribs.property === "og:url") {
                const props = attributesToProps(domNode.attribs);
                const splitedProps = props.content.split('/')
                const replaceDomain = splitedProps.splice(2, 1, 'tollywoodlife.com')
                const url = `${splitedProps[0]}//${splitedProps[2]}/category/${splitedProps[3]}`
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
                <CategoryContainer
                    postByCategory={postByCategory}
                    featured={featured}
                    catId={catId}
                />
            </div>
        </>
    )
}


export async function getStaticPaths() {
    const res = await fetch('https://backend.tollywoodlife.com/wp-json/wp/v2/categories?_embed&per_page=100')

    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: { slug: post.slug },
    }))

    return { paths, fallback: 'blocking' }
}


export async function getStaticProps({ params }) {

    const getCat = await fetch(`https://backend.tollywoodlife.com/wp-json/wp/v2/categories?_embed&slug=${params.slug}`)
    const cat = await getCat.json()

    // const getCategories = await fetch(`https://backend.tollywoodlife.com/wp-json/wp/v2/categories?_embed&per_page=30`)
    // const categories = await getCategories.json()

    // let categoryId
    // categories.map(cat => {

    //     if (cat.slug === params.slug) {
    //         categoryId = cat.id
    //     }
    // })

    // 

    const getPosts = await fetch(`https://backend.tollywoodlife.com/wp-json/wp/v2/posts?_embed&categories=${cat[0].id}&per_page=15`)
    const postByCategory = await getPosts.json()

    const featuredPost = await fetch('https://backend.tollywoodlife.com/wp-json/wp/v2/posts?_embed&per_page=7')
    const featured = await featuredPost.json()

    return {
        props: {
            postByCategory,
            head: cat[0],
            featured,
            catId: cat[0].id
        },
        revalidate: 1,
    }
}


export default index