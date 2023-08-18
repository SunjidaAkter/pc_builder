import Head from "next/head";
import RootLayout from "../components/layouts/RootLayout";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="home page" description="this page is created by next js" />
      </Head>
      <h1>This is HomePage</h1>
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
