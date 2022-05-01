import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='w-full h-screen bg-bgImage bg-cover bg-no-repeat bg-center'>
      <Head>
        <title>Frame of Light Designs</title>
        <meta name="description" content="Frame of Light Designs" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

    </div>
  )
}

export default Home
