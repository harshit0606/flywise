import Document, { Head, Html, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-9506GFX7X1`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
                        window.dataLayer = window.dataLayer || [];
                         function gtag(){
                        dataLayer.push(arguments);
                         }
                         gtag('js', new Date());
                          gtag('config', 'G-9506GFX7X1', {
                        page_path: window.location.pathname,
                          });
                        `,
            }}
          />
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
