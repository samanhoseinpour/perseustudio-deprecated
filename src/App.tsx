import { AnimatedText, Services, Faq } from "./components";
import { ParallaxImage } from "./components/ParallaxImage";
import "./index.css";

export default function App() {
  return (
    <>
      <main className="wrapper">
        <AnimatedText
          text="Take your brand to the next level using the latest marketing tools and creative ideas to make your brand's presence stand out.
        We're all about making your business shine in the competitive digital world."
          style="mt-[-100vh] text-[8px]"
        />
        <ParallaxImage
          smallImage="/img/sample-1.webp"
          largeImage="/img/sample-2.webp"
          smallImageSide="left"
          parallaxDistance="100%"
          parallaxTitle="Blending strategies with creativity"
          parallaxDesc="At Perseus Media, we blend innovative strategies and creative storytelling to elevate your brand. From impactful online campaigns to visually stunning content, we turn your vision into memorable experiences that resonate across digital landscapes"
        />
        <ParallaxImage
          smallImage="/img/sample-3.webp"
          largeImage="/img/sample-4.webp"
          smallImageSide="right"
          parallaxDistance="100%"
          parallaxTitle="Building your digital presence"
          parallaxDesc="Perseus Media specializes in creating strong digital presences. We combine strategic thinking with creative flair to develop unique brand identities and engaging websites, ensuring your brand makes a lasting impact online"
        />
      </main>
      <section>
        <AnimatedText text="Explore Our Services" style="mt-[-40vh]" />
        <Services />
        <Faq />
      </section>
    </>
  );
}
