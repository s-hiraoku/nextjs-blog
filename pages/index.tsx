import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import { headingMd, padding1px, list, listItem } from "../styles/utils.module";
import { getSortedPostsData } from "../lib/posts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={headingMd}>
        <p>Hello! I'm Shinichi.</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
      <section
        className={`
          ${headingMd} ${padding1px}
        `}
      >
        <ul className={list}>
          {allPostsData.map(({ id, date, title }) => (
            <li className={listItem} key={id}>
              {title}
              <br />
              {id}
              <br />
              {date}
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}
