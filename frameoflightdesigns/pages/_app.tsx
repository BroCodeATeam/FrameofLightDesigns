import 'tailwindcss/tailwind.css'
import type { AppProps } from 'next/app'
import {Navbar} from "../components/navbar/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return <div>
      <Navbar />
      <div>
      </div>
      <Component {...pageProps} />
  </div>
}

export default MyApp
