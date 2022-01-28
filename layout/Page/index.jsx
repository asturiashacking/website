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

        <link rel="preconnect" href="https://fonts.googleapis.com" />

        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />

        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
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
          <h1>
            <a href="/">AsturiasHacking</a>
          </h1>

          <nav>
            <ul>
              <li>
                <a href="/dojos">/dojos</a>
              </li>
            </ul>
          </nav>
        </header>

        <MDXProvider
          components={{
            a: Link,
            h1: props => <Heading size="extraLarge" element="h1" {...props} />,
            h2: props => <Heading size="large" element="h2" {...props} />,
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

          background-color: ${theme.palette.background};
        }

        header {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding: 1em;

          background-color: ${theme.palette.accent};
          color: ${theme.palette.white};
          font-family: ${theme.typography.families.monospace};
        }

        header h1 {
          font-size: 1em;
          margin: 0;
        }

        header h1 a {
          text-decoration: none;
        }

        header a {
          color: currentColor;
        }

        header nav ul {
          margin: 0;
        }

        header nav ul li {
          display: inline;
          font-size: 0.9em;
        }

        section {
          padding: 2em 1em;
          margin: 0 auto;
          max-width: calc(900px - 2em);
        }
      `}</style>
    </>
  );
}

export default withTheme(Page);
