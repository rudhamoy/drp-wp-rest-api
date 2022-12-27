import Head from "next/head";
import { useRouter } from "next/router";
import SingleNewsContainer from "../../components/news/SingleNewsContainer";

const SingleNews = ({ singleData, featured, headTitle}) => {
  

  return (
    <>
      <Head>
        <title>{headTitle}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        {/* <h1>some of the page here</h1> */}
        <SingleNewsContainer
          singleData={singleData}
          featured={featured}
        />
      </div> 
    </>
  )
}

export default SingleNews

// export async function getServerSideProps(context) {
//     const { id } = context.params;
//     const getPost = await fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&slug=${id}`)

//     const singleData = await getPost.json()

//     return {
//         props: {
//             singleData
//         }
//       }

//   }


export async function getStaticPaths() {
  const res = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed')

  const posts = await res.json()

  const paths = posts.map((post) => ({
    params: {
      date: new Date(post.date).toLocaleDateString(),
      slug:[ post.slug ]
    },
  }))

  return { paths, fallback: 'blocking' }
}


export async function getStaticProps({ params }) {
 
  const getPost = await fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&slug=${params.slug[2]}`)
  const singleData = await getPost.json()
 

  const featuredPost = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=7')
  const featured = await featuredPost.json()

  return {
    props: {
      singleData,
      headTitle: singleData[0].yoast_head_json.title,
      featured
    },
    revalidate: 10,
  }
}