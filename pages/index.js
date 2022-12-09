import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HomeContainer from '../components/home/HomeContainer'

export default function Home({ data, entertainment, anime, tvShows, tech, hotspot }) {
  console.log(hotspot)
  return (
    <div>
      <HomeContainer 
      data={data} 
      entertainment={entertainment} 
      anime={anime} 
      tvShows={tvShows} 
      tech={tech} 
      hotSpot={hotspot} 
      />
    </div>
  )
}


export async function getServerSideProps() {

  const [getPosts, getEntertainment, getTvShows, getAnime, getTech] = await Promise.all([
    fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=5'),
    fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=1&per_page=5`),
    fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=206&per_page=5`),
    fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=171&per_page=5`),
    fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=176&per_page=5`)
  ]);

<<<<<<< HEAD
  const [ data, entertainment, tvShows, anime, tech] = await Promise.all([
    getPosts.json(), 
=======
  const [data, entertainment, tvShows, anime, tech] = await Promise.all([
    getPosts.json(),
>>>>>>> 69b459407d4e37923dfebd44d090ed7195976922
    getEntertainment.json(),
    getTvShows.json(),
    getAnime.json(),
    getTech.json(),
  ]);

<<<<<<< HEAD
 const getHotspot = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=204&per_page=12')
 const hotspot = await getHotspot.json()
=======

>>>>>>> 69b459407d4e37923dfebd44d090ed7195976922

  return { props: { data, entertainment, anime, tvShows, tech, hotspot } };
}
