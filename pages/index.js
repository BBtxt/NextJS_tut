import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello</p>
        <p>
          I'm Brandon. I'm an engineer and photographer. You can contact me on <a href="https://twitter.com/yungbeej">twitter</a>
        </p>
      </section>
    </Layout>
  );
}