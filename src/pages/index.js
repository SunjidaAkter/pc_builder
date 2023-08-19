import Head from "next/head";
import RootLayout from "../components/layouts/RootLayout";
import Banner from "@/components/ui/Banner";
import Products from "../components/ui/Products";
import Categories from "@/components/ui/Categories";

const HomePage = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Home page</title>
        <meta name="home page" description="this page is created by next js" />
      </Head>
      <Banner />
      <Products />
      <Categories products={products} />
    </div>
  );
};

export default HomePage;
HomePage.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
export async function getStaticProps() {
  try {
    const res = await fetch("https://pc-builder-json.vercel.app/api/products");
    const products = await res.json();
    return {
      props: {
        products: products,
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        products: [],
      },
    };
  }
}
