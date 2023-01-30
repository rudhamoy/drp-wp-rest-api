import Head from "next/head";
import parse, { attributesToProps } from 'html-react-parser';
import SingleNewsContainer from '../../components/news/SingleNewsContainer'
import { ALL_POSTS_SLUG, POST_CONTENT } from "../../components/utils/api";
import fetcher from "../../components/utils/fetcher";

const index = ({ singleData, featured, postContent }) => {
  const html = `${singleData[0].yoast_head}`
  const options = {
    replace: domNode => {
      if (domNode.name === 'meta' && domNode.attribs.property === "og:url") {
        const props = attributesToProps(domNode.attribs);
        const splitedProps = props.content.split('/')
        const postDate = `${splitedProps[3]}/${splitedProps[4]}/${splitedProps[5]}`
        return <meta property="og:url" content={`https://tollywoodlife.com/${postDate}/${splitedProps[6]}`} />
      }
    }
  };
  console.log('postContent = ', postContent)
  return (
    <>
      <Head>{parse(html, options)}</Head>
      <div>
        <SingleNewsContainer
          singleData={singleData}
          featured={featured}
          postContent={postContent}
        />
      </div>
    </>
  )
}

export default index

export async function getStaticPaths() {
  // const res = await fetch('https://backend.tollywoodlife.com/wp-json/wp/v2/posts?_embed')
  const res = await fetcher(ALL_POSTS_SLUG)

  // const posts = await res.json()
  const posts = res.data.posts.nodes

  const paths = posts.map((post) => ({
    params: {
      date: new Date(post.date).toLocaleDateString(),
      slug: [post.slug]
    },
  }))

  return { paths, fallback: 'blocking' }
}


export async function getStaticProps({ params }) {

  const { slug } = params
  const getPost = await fetch(`https://backend.tollywoodlife.com/wp-json/wp/v2/posts?_embed&slug=${slug[slug.length - 1]}`)
  const singleData = await getPost.json()

  const variables = {
    id: `${slug[slug.length - 1]}`
  }
  const postContentRes = await fetcher(POST_CONTENT,  {variables})
  const postContent = postContentRes.data.post.content

  const featuredPost = await fetch('https://backend.tollywoodlife.com/wp-json/wp/v2/posts?_embed&per_page=7')
  const featured = await featuredPost.json()

  return {
    props: {
      singleData,
      featured,
      postContent
    },
    revalidate: 1,
  }
}