import Document, { Html, Head, Main, NextScript } from 'next/document'
import Script from 'next/script'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="description" content="Rizki Next Level"></meta>
          <link
            rel="stylesheet"
            type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700"
          />
          <link 
            href="/assets/css/nucleo-icons.css" 
            rel="stylesheet" 
          />
          <link 
            href="/assets/css/nucleo-svg.css" 
            rel="stylesheet" 
          />
          <link
            href="https://fonts.googleapis.com/icon?family=Material+Icons+Round"
            rel="stylesheet"
          />
          <link
            id="pagestyle"
            href="/assets/css/material-dashboard.css?v=3.0.0"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />

          <Script src="/assets/js/core/popper.min.js" />
          <Script src="/assets/js/core/bootstrap.min.js" />
          <Script src="/assets/js/plugins/perfect-scrollbar.min.js" />
          <Script src="/assets/js/plugins/smooth-scrollbar.min.js" />
          <Script
            dangerouslySetInnerHTML={{
              __html: `
              var win = navigator.platform.indexOf('Win') > -1;
              if (win && document.querySelector('#sidenav-scrollbar')) {
                var options = {
                  damping: '0.5'
                }
                Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
              }
              `,
            }}
          />
          <Script src="https://buttons.github.io/buttons.js" />
          <Script src="/assets/js/material-dashboard.min.js?v=3.0.0" />
        </body>
      </Html>
    )
  }
}

export default MyDocument