import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="ru" dir="ltr">
        <Head>
          <meta charSet="utf-8" />

          <link href="https://fonts.googleapis.com/css?family=Montserrat:100,100i,200,200i,300,300i,400,400i,500,500i,600,600i,700,700i,800,800i,900,900i&family=Barlow|Tomorrow:400,700&display=swap&subset=cyrillic,cyrillic-ext,latin-ext" rel="stylesheet" />

          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css"
            integrity="sha384-F3w7mX95PdgyTmZZMECAngseQB83DfGTowi0iMjiWaeVhAn4FJkqJByhZMI3AhiU"
            crossOrigin="anonymous"
          />

          <title>CTF</title>

          <meta name="author" content="Lu Perfect" />

          <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

          <meta name="theme-color" content="#ff6400" />

          <meta name="robots" content="none" />
          <meta name="googlebot" content="none" />
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
