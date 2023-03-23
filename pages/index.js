import Head from "next/head";
import dynamic from "next/dynamic";
const Navigation = dynamic(() => import("../components/Navigation"), {
  ssr: true,
});
const Banner = dynamic(() => import("../components/Banner"), {
  ssr: true,
});
const Contact = dynamic(() => import("../components/Contact"), {
  ssr: true,
});
const Footer = dynamic(() => import("../components/Footer"), {
  ssr: true,
});

const Skills = dynamic(() => import("../components/Skills"), {
  ssr: true,
});
const Bookmarks = dynamic(() => import("../components/Bookmarks"), {
  ssr: true,
});
export default function Home() {
  return (
    <div>
      <Head>
        <title>Doğukan Kutluay</title>
        <meta
          name="description"
          content="It is the official personal website of Doğukan Kutluay"
        />
        <meta
          property="og:image"
          content="*.vercel.app/api/og?title=Doğukan Kutluay"
        />

        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container">
        <Navigation />
        <Banner />
      </div>

      <div className="container-bookmarks">
        <div className="container-bookmarks-wr">
          <Bookmarks />
        </div>
      </div>
      <div className="container">
        <Skills />
      </div>
      <div className="container-contact">
        <div className="container-contact-wr">
          {" "}
          <Contact />
        </div>
      </div>
      <div className="container">
        {" "}
        <Footer />{" "}
      </div>
    </div>
  );
}
