// # Global Imports
import React from "react";
import App from "next/app";
import Head from "next/head";
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
export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;

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
