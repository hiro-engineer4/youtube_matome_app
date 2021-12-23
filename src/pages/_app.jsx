import "../styles/globals.css";
import { Layout } from "src/components/Layout";

const MyApp = ({ Component, pageProps }) => {
  return (
    <div>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
