import SingleNewsContainer from "../../../components/news/SingleNewsContainer";

const index = ({singleData, featured}) => {
  return (
    <div>
        <SingleNewsContainer 
        singleData={singleData} 
        // featured={featured}
        />
    </div>
  )
}

export default index

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
        params: { slug: post.slug },
    }))

    return { paths, fallback: 'blocking' }
}


export async function getStaticProps({ params }) {
  const getPost = await fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&slug=${params.slug}`)
  const singleData = await getPost.json()

  // const featuredPost = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=7')
  // const featured = await featuredPost.json()

  return {
      props: {
          singleData,
          // featured
      },
      revalidate: 10,
    }
}