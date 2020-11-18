/** @format */

import Layout from "../components/layout/Layout";
import "./../../public/assets/css/style.css"
function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
