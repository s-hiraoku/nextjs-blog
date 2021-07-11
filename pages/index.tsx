import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { HeadingMd } from "../styles/utils.module";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section css={HeadingMd}>
        <p>Hello! I'm Shinichi.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
