import Head from "next/head";
import { FC } from "react";
import { Layout } from "../components/layout";

export const Home: FC = () => {
  return (
    <Layout>
      <div className="text-4xl text-primary text-center py-12 font-mono">Hello, Next!</div>
    </Layout>
  )
};

export default Home;