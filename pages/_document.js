import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;700&family=Public+Sans:ital,wght@0,400;0,700;1,600&display=swap"
          rel="stylesheet"
        />
      </Head>
      <body className="text-grayish-dark-blue">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
