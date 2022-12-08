import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HomeContainer from '../components/home/HomeContainer'

export default function Home({data}) {
  return (
    <div>
      <HomeContainer data={data} />
    </div>
  )
}


export async function getServerSideProps() {
  const getPosts = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=5')

  const data = await getPosts.json()

  return {
      props: {
        data
      }
    }
  
}