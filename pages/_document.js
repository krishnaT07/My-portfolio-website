import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          {/* Add the Tidio script here */}
          <script
            type="text/javascript"
            dangerouslySetInnerHTML={{
              __html: `/* Tidio Chat Script */ 
                (function() {
                  var tidioScript = document.createElement('script');
                  tidioScript.src = "//code.tidio.co/your_unique_code.js";
                  tidioScript.async = true;
                  document.body.appendChild(tidioScript);
                })();`,
            }}
          ></script>
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
