import { CssBaseline } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { SessionProvider } from 'next-auth/react';
import "plyr-react/dist/plyr.css";
import { useMemo } from 'react';
import "swiper/css";
import "swiper/css/pagination";
import "../styles/feed.css";
import '../styles/globals.css';
import "../styles/post.css";
import "../styles/profile.css";
import Layout from './components/layout';

function MyApp({ Component,
  pageProps: { session, ...pageProps },
}) {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
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
