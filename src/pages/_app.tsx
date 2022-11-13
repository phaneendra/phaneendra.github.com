import '@/css/tailwind.css';
import '@/css/prism.css';
import 'katex/dist/katex.css';

import '@fontsource/inter/variable-full.css';

import { ThemeProvider } from 'next-themes';
import type { AppProps } from 'next/app';
import Head from 'next/head';

import siteMetadata from '@/data/siteMetadata';
import Analytics from 'src/components/analytics';
import LayoutWrapper from 'src/components/LayoutWrapper';
import { ClientReload } from 'src/components/ClientReload';

const isDevelopment = process.env.NODE_ENV === 'development';
const isSocket = process.env.SOCKET;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider defaultTheme={siteMetadata.theme}>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      {isDevelopment && isSocket && <ClientReload />}
      <Analytics />
      <LayoutWrapper>
        <Component {...pageProps} />
      </LayoutWrapper>
    </ThemeProvider>
  );
}
