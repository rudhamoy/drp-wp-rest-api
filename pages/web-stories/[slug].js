import Script from 'next/script'
import React from 'react'
import parse from 'html-react-parser';


const index = ({ storyById }) => {
    
    return (
        <div className="h-[100%]">
               {parse(storyById[0].post_content)}
        </div>
    )
}

export default index

export async function getStaticPaths() {
    const res = await fetch('https://tollywoodlife.com/api/stories')

    const posts = await res.json()

    const paths = posts.map((post) => ({
        params: { slug: post.post_name },
    }))

    return { paths, fallback: 'blocking' }
}


export async function getStaticProps({ params }) {
    const res = await fetch(`https://tollywoodlife.com/api/story/${params.slug}`)
    const datas = await res.json()

    // let storyById
    // datas.map(data => {

    //     if (data.post_name === params.slug) {
    //         storyById = data
    //     }
    // })


    return {
        props: {
            storyById: datas
        },
        revalidate: 1,
    }
}