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
          smallImage="/img/kengu-1.JPG"
          largeImage="/img/kengu-2.JPG"
          smallImageSide="left"
          parallaxDistance="100%"
          parallaxTitle="Blending strategies with creativity"
          parallaxDesc="At Perseus Studio, we blend innovative strategies and creative storytelling to elevate your brand. From impactful online campaigns to visually stunning content, we turn your vision into memorable experiences that resonate across digital landscapes"
        />
        <ParallaxImage
          smallImage="/img/taurus-2.JPG"
          largeImage="/img/taurus-1.JPG"
          smallImageSide="right"
          parallaxDistance="100%"
          parallaxTitle="Building your digital presence"
          parallaxDesc="Perseus Studio specializes in creating strong digital presences. We combine strategic thinking with creative flair to develop unique brand identities and engaging websites, ensuring your brand makes a lasting impact online"
        />
        <ParallaxImage
          smallImage="/img/kengo-3.JPG"
          largeImage="/img/renovation-1.JPG"
          smallImageSide="right"
          parallaxDistance="100%"
          parallaxTitle="Data-Driven Creativity"
          parallaxDesc="Perseus Studio goes beyond beautiful visuals. We leverage data insights to fuel our creative fire.  Our strategies are built on audience understanding, ensuring your brand message resonates deeply. We translate data into compelling storytelling, maximizing engagement and driving results."
        />
        <ParallaxImage
          smallImage="/img/kengo-4.JPG"
          largeImage="/img/taurus-3.JPG"
          smallImageSide="right"
          parallaxDistance="100%"
          parallaxTitle="Unleash Your Brand's Potential"
          parallaxDesc="At Perseus Studio, we're not just strategists or storytellers. We're brand alchemists. We take your vision and blend it with cutting-edge strategies to create a digital presence that's both powerful and captivating. Watch your brand story come alive and ignite engagement across all platforms."
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
