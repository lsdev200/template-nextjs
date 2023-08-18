import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap"
          rel="stylesheet"
        />
        <title>Chain App Dev - App Landing Page HTML5 Template</title>

        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />

        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.8.1/css/all.css"
          integrity="sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf"
          crossOrigin="anonymous"
          
        />
        <link rel="stylesheet" href="assets/css/templatemo-chain-app-dev.css" />
        <link rel="stylesheet" href="assets/css/animated.css" />
        <link rel="stylesheet" href="assets/css/owl.css" />
        
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script src="vendor/jquery/jquery.min.js"></Script>
        <Script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></Script>
        <Script src="assets/js/animation.js"></Script>
        <Script src="assets/js/owl-carousel.js"></Script>
        <Script src="assets/js/imagesloaded.js"></Script>
        <Script src="assets/js/popup.js"></Script>
        <Script src="assets/js/custom.js"></Script>
        
      </body>
    </Html>
  );
}
