import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";
import { InitializeColorMode } from "theme-ui";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          {/* <meta name="viewport" content="width=device-width, initial-scale=1" />*/}
          <link rel="icon" href="/static/icons/favicon.ico" />

          <link rel="manifest" href="/static/manifest.json" />
          

          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/static/icons/icon_32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="48x48"
            href="/static/icons/icon_48.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="128x128"
            href="/static/icons/icon_128.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="256x256"
            href="/static/icons/icon_256.png"
          />

          
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href="/static/icons/icon_180.png"
          />

          <meta
            name="msapplication-TileImage"
            content="/static/icons/icon_150.png"
          />
          {/* 
            <script>
                Add a Google Analytics script here.
            </script>
          */}
        </Head>
        <body>
          {/* InitializeColormode component rendered in HTML before the main application to help prevent the flash of colors that can occur during rehydration*/}
          <InitializeColorMode />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
