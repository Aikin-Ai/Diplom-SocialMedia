import '../styles/globals.css'
import "../styles/feed.css";
import "plyr-react/dist/plyr.css";
import "swiper/css";
import "swiper/css/pagination";
import Layout from './components/layout'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
