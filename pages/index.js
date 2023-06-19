import HomeLayout from "@/Components/HomeLayout";
import Layout from "@/Components/Layout";

export default function Home() {
  return (
    <>
      <HomeLayout />
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};
