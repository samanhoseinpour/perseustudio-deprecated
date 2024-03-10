import { ParallaxImageProps } from "../types";
import { twMerge } from "tailwind-merge";

export const ParallaxImage = ({
  smallImage,
  largeImage,
  smallImageSide,
  parallaxDistance,
  parallaxTitle,
  parallaxDesc,
}: ParallaxImageProps) => {
  return (
    <section
      className={twMerge(
        "col-[wide] my-20 grid gap-3 [view-timeline-name:--parallax-wrapper]",
        smallImageSide === "left"
          ? "md:grid-cols-[1fr_2fr]"
          : "md:grid-cols-[2fr_1fr]",
      )}
    >
      <div className="self-start">
        <div
          className="md:supports-[animation-timeline]:parallax-image relative"
          style={{ "--movement": parallaxDistance } as React.CSSProperties}
        >
          <div className="absolute bottom-full pb-5 text-center uppercase">
            <p className="mb-1 text-[16px]">{parallaxTitle}</p>
            <p className="text-[10px] text-gray-400">{parallaxDesc}</p>
          </div>
          <img src={smallImage} alt="services-img" className="rounded-md" />
        </div>
      </div>

      <img
        src={largeImage}
        alt="services-img"
        className={twMerge(
          "rounded-md",
          smallImageSide === "right" && "md:-order-1",
        )}
      />
    </section>
  );
};
