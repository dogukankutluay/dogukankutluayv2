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
  ssr: false,
});
const Banner = dynamic(() => import("../components/Banner"), {
  ssr: false,
});
const Contact = dynamic(() => import("../components/Contact"), {
  ssr: false,
});
const Footer = dynamic(() => import("../components/Footer"), {
  ssr: false,
});
const Projects = dynamic(() => import("../components/Projects"), {
  ssr: false,
});
const Skills = dynamic(() => import("../components/Skills"), {
  ssr: false,
});
const Bookmarks = dynamic(() => import("../components/Bookmarks"), {
  ssr: false,
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
        <link rel="icon" href="/favicon.png" />
      </Head>
      <div className="container">
        <Navigation />
        <Banner />
        <Projects />
      </div>

      {/** 
       * <div className="container-bookmarks">
        <div className="container-bookmarks-wr">
          <Bookmarks />
         </div>
      </div> 
      */}
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
