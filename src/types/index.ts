export type ParallaxImageProps = {
  smallImage: string;
  largeImage: string;
  smallImageSide: "left" | "right";
  parallaxDistance: string;
  parallaxTitle?: string;
  parallaxDesc?: string;
};

export type AnimatedTextProps = {
  text: string;
  style?: string;
};

export type NavLinkProps = {
  link: string;
  label: string;
};

export type LinkGropuProps = {
  children?: any;
  header: string;
};

export type AccordionItemProps = {
  header: string;
  text: string;
};

export type ServiceCardProps = {
  icon: JSX.Element;
  title: string;
  details: string;
};
