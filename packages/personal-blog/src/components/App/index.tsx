// # Global Imports
import React from "react";
import Head from "next/head";
import NextApp from "next/app";
import { ThemeProvider } from "styled-components";
// #end Global Imports

// # Styles and Themes
import ResetCss from "./resetCSS";
import theme from "@theme/index";
// #end Styles and Themes

// # Modules and Configs
import config from "@config/default";
// #end Modules and Configs

// # Main Application Class
class App extends NextApp {
  render() {
    const { pageProps, Component } = this.props;
    return (
      <React.Fragment>
        <Head>
          <title>{config.title}</title>
        </Head>
        <ThemeProvider theme={theme}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <ResetCss />
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default App;
