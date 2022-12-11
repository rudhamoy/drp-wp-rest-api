import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HomeContainer from '../components/home/HomeContainer'
import { baseUrl } from '../utils/wordpress'

export default function Home({ data, entertainment, anime, tvShows, tech, hotspot, secondPage, celebGossip, movieNews, gamesSport, posts }) {
  
  return (
    <div>
      <HomeContainer 
      data={data} 
      entertainment={entertainment} 
      anime={anime} 
      tvShows={tvShows} 
      tech={tech} 
      hotSpot={hotspot}
      secondPage={secondPage}
      celebGossip={celebGossip}
      movieNews={movieNews}
      gamesSport={gamesSport}
      posts={posts}
      />
    </div>
  )
}


export async function getServerSideProps() {

  const [getPosts, getEntertainment, getTvShows, getAnime, getTech, getSecondPage, getCelebGossip, getMovieNews, getGamesSport] = await Promise.all([
    fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed&per_page=5`),
    fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed&categories=1&per_page=5`),
    fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed&categories=41&per_page=5`),
    fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed&categories=22&per_page=5`),
    fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed&categories=23&per_page=5`),
    fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed&per_page=5&page=2`),
    fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed&categories=18&per_page=4`),
    fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed&categories=19&per_page=4`),
    fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed&categories=25&per_page=4`),
  ]);


  const [data, entertainment, tvShows, anime, tech, secondPage, celebGossip, movieNews, gamesSport] = await Promise.all([
    getPosts.json(),
    getEntertainment.json(),
    getTvShows.json(),
    getAnime.json(),
    getTech.json(),
    getSecondPage.json(),
    getCelebGossip.json(),
    getMovieNews.json(),
    getGamesSport.json()
  ]);

 const getHotspot = await fetch(`${baseUrl}/wp-json/wp/v2/posts?_embed&categories=26&per_page=12`)
 const hotspot = await getHotspot.json()


  return { props: { data, entertainment, anime, tvShows, tech, hotspot, secondPage, celebGossip, movieNews, gamesSport } };
}
