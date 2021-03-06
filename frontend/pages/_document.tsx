import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <meta
            name="keywords"
            content="search, 검색, 혼자어때, SSAFY, click"
          />
          <meta name="description" content="혼자어때 관광 사이트"></meta>
          <script
            type="text/JavaScript"
            src="https://developers.kakao.com/sdk/js/kakao.min.js"
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
