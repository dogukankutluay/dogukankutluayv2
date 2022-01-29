import Head from 'next/head';
import {
  Banner,
  Contact,
  Footer,
  Navigation,
  Projects,
  Skills,
} from '../components';
export default function Home() {
  return (
    <div>
      <Head>
        <title>Doğukan Kutluay</title>
        <meta
          name="description"
          content="It is the official personal website of Doğukan Kutluay"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container">
        <Navigation />
        <Banner />
        <Projects />
        <Skills />
      </div>
      <div className="container-contact">
        <div className="container-contact-wr">
          <Contact />
        </div>
      </div>

      <div className="container">
        <Footer />
      </div>
    </div>
  );
}
