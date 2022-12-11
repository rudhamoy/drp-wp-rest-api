import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

import HomeContainer from '../components/home/HomeContainer'

export default function Home({  data, entertainment, anime, tvShows, tech, hotspot, secondPage, celebGossip, movieNews, gamesSport, posts }) {

  const baseUrl = 'https://dailyresearchplot.com'
 
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
    fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=5'),
    fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=1&per_page=5`),
    fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=206&per_page=5`),
    fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=171&per_page=5`),
    fetch(`https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=176&per_page=5`),
    fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&per_page=5&page=2'),
    fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=174&per_page=4'),
    fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=200&per_page=4'),
    fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=175,203&per_page=4'),
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

  const getHotspot = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=204&per_page=12')
 const hotspot = await getHotspot.json()


  return { props: { data, entertainment, anime, tvShows, tech, hotspot, secondPage, celebGossip, movieNews, gamesSport } };
}
