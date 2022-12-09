import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HomeContainer from '../components/home/HomeContainer'

export default function Home({ data, entertainmentPosts }) {
  return (
    <div>
      <HomeContainer data={data} entertainmentPosts={entertainmentPosts} />
    </div>
  )
}


// export async function getServerSideProps() {
//   const getPosts = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=5');
//   const data = await getPosts.json()

//   const getEntertainmentPosts = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=5&categories=173,174,1');
//   const entertainmentPosts = await getEntertainmentPosts.json()

//   return {
//     props: {
//       data,
//       entertainmentPosts
//     }
//   }

// }

export async function getServerSideProps() {
  const [getPosts, getEntertainmentPosts] = await Promise.all([
    fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=5'), 
    fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=5&categories=173,174,1')
  ]);
  const [data, entertainmentPosts] = await Promise.all([
    getPosts.json(), 
    getEntertainmentPosts.json()
  ]);
  return { props: { data, entertainmentPosts } };
}
