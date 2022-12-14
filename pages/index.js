import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
// import { pool } from '../services/mysql_db';
import HomeContainer from '../components/home/HomeContainer'

export default function Home({ 
  data, entertainment, anime, 
  tvShows, tech, hotspot, 
  secondPage, celebGossip, movieNews, 
  gamesSport, stories,
}) {


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
        visualStories={stories}
      />
    </div>
  )
}


export async function getStaticProps() {

  // getCelebGossip, getMovieNews, getGamesSport, getStories

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

  // celebGossip, movieNews, gamesSport, stories

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

  // let entertainmentData = []
  // let animeData = []
  // let tvShowData = []
  // let techData = []
  // let hotspotData = []
  // let celebGossipData = []
  // let movieNewsData = []
  // let gamesSportData = []

  //  datas.forEach(item => {
  //   const category = item._embedded["wp:term"][0]
  //   category.map(cat => {
  //     if(cat.slug === 'entertainment') {
  //        entertainmentData.push(item)
  //     }
  //     if(cat.slug === 'anime') {
  //        animeData.push(item)
  //     }
  //     if(cat.slug === 'tv-show') {
  //       tvShowData.push(item)
  //     }
  //     if(cat.slug === 'technology') {
  //       techData.push(item)
  //     }
  //     if(cat.slug === 'top-trending') {
  //       hotspotData.push(item)
  //     }
  //     if(cat.slug === 'celebrity-gossip') {
  //       celebGossipData.push(item)
  //     }
  //     if(cat.slug === 'movie') {
  //       movieNewsData.push(item)
  //     }
  //     if(cat.slug === 'sports' || 'games') {
  //       gamesSportData.push(item)
  //     }
  //   })
  // });

  // datas.forEach(item => {
  //   const category = item._embedded["wp:term"][0]
  //   category.map(cat => {
  //     if(cat.slug === 'entertainment') {
  //        entertainmentData.push(item)
  //     }
  //   })
  // });


  return { 
    props: { 
      data, 
      entertainment , 
      anime, 
      tvShows, 
      tech, 
      hotspot, 
      secondPage, 
      celebGossip, 
      movieNews, 
      gamesSport, 
      // entertainment : entertainmentData.splice(0, 4), 
      // anime:  animeData.splice(0, 4), 
      // tvShows: tvShowData.splice(0, 4), 
      // tech: techData.splice(0, 4), 
      // hotspot: hotspotData.splice(0, 12), 
      // secondPage: data.splice(5, 10), 
      // celebGossip: celebGossipData.splice(0, 4), 
      // movieNews: movieNewsData.splice(0, 4), 
      // gamesSport: gamesSportData.splice(0, 4), 
    },
    revalidate: 30, // In seconds
  };
}
