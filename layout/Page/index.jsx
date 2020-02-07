import React from "react";

import { MDXProvider } from "@mdx-js/react";
import Head from "next/head";

import Bullet from "../../components/Bullet";
import Bullets from "../../components/Bullets";
import Link from "../../components/Link";
import Heading from "../../components/Heading";
import Text from "../../components/Text";

import { withTheme } from "../../components/withTheme";

function Page({ children, theme }) {
  return (
    <>
      <Head>
        <title>~ | AsturiasHacking</title>

        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <link
          href="https://fonts.googleapis.com/css?family=Roboto+Mono:400,700&display=swap"
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/modern-normalize/0.5.0/modern-normalize.min.css"
        />

        <link rel="icon" type="image/png" href="/favicon.png?v=1" />
      </Head>

      <article>
        <header>
          <h1>AsturiasHacking</h1>
        </header>

        <MDXProvider
          components={{
            a: Link,
            h1: Heading,
            p: Text,
            ul: Bullets,
            li: Bullet
          }}
        >
          <section>{children}</section>
        </MDXProvider>
      </article>

      <style jsx>{`
        :global(body) {
          margin: 0;
        }

        article {
          min-height: 100vh;
          min-width: 100vw;

          background-color: ${theme.palette.background};
        }

        header {
          padding: 1em;

          background-color: ${theme.palette.accent};
          color: ${theme.palette.white};
        }

        header h1 {
          font-size: 1em;
          margin: 0;

          font-family: ${theme.typography.fontFamily};
        }

        section {
          padding: 5em 1em;
          margin: 0 auto;
          max-width: calc(900px - 2em);
        }
      `}</style>
    </>
  );
}

export default withTheme(Page);
