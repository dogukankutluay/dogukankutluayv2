import Head from "next/head";
/**
 * import {
  Banner,
  Contact,
  Footer,
  Navigation,
  Projects,
  Skills,
  Bookmarks,
} from "../components";
 */
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
/**
 * const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});
 */
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
          content="https://www.renticar.com/_vercel/image?url=https://cdn.renticar.com/campaign/e7e9ef6b-0fce-48fb-9d07-7ed25b65dcd4.jpeg&w=768&q=100"
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
