import { AnimatedTextProps } from "../types";
import { twMerge } from "tailwind-merge";

export default function AnimatedText({ text, style }: AnimatedTextProps) {
  return (
    <section
      className={twMerge(
        style,
        "h-[400vh] [view-timeline-name:--reveal-wrapper]",
      )}
    >
      <div className="sticky top-0 flex min-h-screen items-center justify-center">
        <div>
          <h1 className="supports-[animation-timeline]:reveal-text text-xl text-black md:text-4xl lg:text-[60px] lg:leading-[1]">
            {text}
          </h1>
        </div>
      </div>
    </section>
  );
}
