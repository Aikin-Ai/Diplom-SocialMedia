import '../styles/globals.css'
import "../styles/feed.css";
import "../styles/post.css";
import "../styles/profile.css";
import "plyr-react/dist/plyr.css";
import "swiper/css";
import "swiper/css/pagination";
import Layout from './components/layout'
import { SessionProvider } from 'next-auth/react'
import { useMemo } from 'react';
import useMediaQuery from '@mui/material/useMediaQuery';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

function MyApp({ Component,
  pageProps: { session, ...pageProps },
}) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: 'light', //prefersDarkMode ? 'dark' : 'light',
        },
      }),
    [prefersDarkMode],
  );

  return (
    <SessionProvider session={session}>
      <ThemeProvider theme={theme}>
        <CssBaseline enableColorScheme />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default MyApp
