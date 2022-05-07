import '../styles/globals.css'
import "../styles/feed.css";
import "../styles/post.css";
import "plyr-react/dist/plyr.css";
import "swiper/css";
import "swiper/css/pagination";
import Layout from './components/layout'
import { SessionProvider } from 'next-auth/react'

function MyApp({ Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  )
}

export default MyApp
