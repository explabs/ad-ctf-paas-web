import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';
import theme from 'styles/theme';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return {
      ...initialProps,
    };
  }

  render() {
    return (
      <Html lang="ru" dir="ltr">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Lobster&amp;subset=cyrillic" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto&family=Open+Sans&&display=swap"/>
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat&display=swap" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
          />

          <meta name="author" content="Lu Perfect" />

          <meta name="theme-color" content={theme.palette.primary.main} />

          <meta name="robots" content="none" />
          <meta name="googlebot" content="none" />

          <title>CTF</title>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
