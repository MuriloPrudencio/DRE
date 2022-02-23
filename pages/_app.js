import '../styles/GlobalNavBar.css';
import Layout from "../components/Layout/Layout";

export default function MyApp({ Component, pageProps }) {
    return (
      <Layout>
        <Component {...pageProps} />
      </Layout>
    )
  }