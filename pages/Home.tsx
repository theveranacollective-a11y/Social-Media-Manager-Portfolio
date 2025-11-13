import { Hero } from "../components/Hero";
import { About } from "../components/About";
import { Services } from "../components/Services";
import { Brands } from "../components/Brands";
import { Portfolio } from "../components/Portfolio";
import { UGCVideos } from "../components/UGCVideos";
import { InstagramGrid } from "../components/InstagramGrid";
import { Testimonials } from "../components/Testimonials";
import { Contact } from "../components/Contact";

export function Home() {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Brands />
      <Portfolio />
      <UGCVideos />
      <InstagramGrid />
      <Testimonials />
      <Contact />
    </>
  );
}
