import Head from 'next/head'
import Image from 'next/image'
import Router from 'next/router'
import styles from '../styles/Home.module.css'
// import { pool } from '../services/mysql_db';
import HomeContainer from '../components/home/HomeContainer'
import { wrapper } from '../store/store'
import fetcher from '../components/utils/fetcher'
import { ALL_STORIES } from '../components/utils/api'

export default function Home({
  data, entertainment, anime,
  tvShows, tech, hotspot,
  secondPage, celebGossip, movieNews,
  gamesSport, storiesQl,
}) {


  return (
    <>
     <Head>
        <title>Daily Research Plot - Entertainment, Celebrity, Anime, News</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
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
        visualStories={storiesQl}
      />
    </div>
    </>
    
  )
}


export async function getStaticProps() {

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
    getGamesSport.json(),

  ]);

  const getHotspot = await fetch('https://dailyresearchplot.com/wp-json/wp/v2/posts?_embed&categories=204&per_page=12')
  const hotspot = await getHotspot.json()

  const stories = await fetcher(ALL_STORIES)
  const storiesQl = stories.data.webStories.nodes

  return {
    props: {
      data, entertainment, tvShows, anime, tech, secondPage, celebGossip, movieNews, gamesSport,
      hotspot, storiesQl
    },
    revalidate: 1
  }
}
