import Head from 'next/head';

import { Header, NavBar } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hulu - Front End Design Analysis</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <NavBar />
    </div>
  );
}
