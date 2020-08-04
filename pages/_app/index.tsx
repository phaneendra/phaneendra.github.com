// #region Global Imports
import React from "react";
import App from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { ColorModeProvider, ThemeProvider, GlobalStyle } from "@chakra-ui/system";
import CSSReset from "@chakra-ui/css-reset";
// import theme from "@chakra-ui/theme";
// #endregion Global Imports

// #region Local Imports
import config from "../../src/config";
import theme from "../../src/themes/default";
// #endregion Local Imports

// #############################################################################

class Site extends App {
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // static async getInitialProps(appContext) {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <React.Fragment>
        <Head>
          <meta name="keywords" content={config.keywords} />
          <meta name="apple-mobile-web-app-title" content={config.siteName} />
        </Head>
        <DefaultSeo {...config.seo} />
        <ThemeProvider theme={theme}>
          <ColorModeProvider>
            <CSSReset />
            <GlobalStyle />
            <Component {...pageProps} />
          </ColorModeProvider>
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default Site;
