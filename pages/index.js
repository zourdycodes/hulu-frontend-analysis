import Head from 'next/head';
import axios from 'axios';

import { Header, NavBar, Results } from '../components';
import { fetchHelpers } from '../utils/requests';

export default function Home({ movies }) {
  const moviesData = movies.results;

  return (
    <div>
      <Head>
        <title>Hulu - Front End Design Analysis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <NavBar />
      <Results moviesData={moviesData} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const { genre } = context.query;

  const response = await axios.get(
    `https://api.themoviedb.org/3${
      fetchHelpers[genre]?.url ?? fetchHelpers.fetchTrending.url
    }`
  );

  const movies = await response.data;

  return {
    props: {
      movies,
    },
  };
}
