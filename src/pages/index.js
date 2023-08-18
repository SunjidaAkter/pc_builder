import Head from "next/head";
import RootLayout from "../components/layouts/RootLayout";
import Banner from "@/components/ui/Banner";
import Products from "@/components/ui/products";

const HomePage = () => {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="home page" description="this page is created by next js" />
      </Head>
      <Banner />
      <Products />
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
