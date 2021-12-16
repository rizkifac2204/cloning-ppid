import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Rizki Next Level"></meta>
          <link
            rel="stylesheet"
            href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"
          />
          <script src="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.js"></script>
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="//maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument