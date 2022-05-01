import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Navbar from "../components/Navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return <div className='w-full h-screen bg-bubbles bg-cover bg-no-repeat bg-center'>
    <Navbar />
  <Component {...pageProps} />
  </div>
}

export default MyApp
