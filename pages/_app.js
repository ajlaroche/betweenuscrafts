import Head from "next/head";
import Layout from "../components/layout/layout";
// add bootstrap css
import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Between Us Crafts</title>{" "}
        {/* Gets overwritten in subsequent pages if finds another title block */}
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Dancing+Script"
        ></link>
        <meta
          name="Between Us Crafts"
          content="Personalized Crafts for Every Occasion"
        />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />{" "}
        {/* Added to all pages to ensure page scales correctly */}
      </Head>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
