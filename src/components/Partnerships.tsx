import { PartnershipsProps } from "../types";

const SingleImage = ({ href, imgSrc, Alt }: PartnershipsProps) => {
  return (
    <>
      <a
        href={href}
        className="mx-4 flex w-[200px] items-center justify-center  2xl:w-[180px]"
      >
        <img
          src={imgSrc}
          alt={Alt}
          className="h-auto w-full grayscale hover:grayscale-0"
        />
      </a>
    </>
  );
};

const Partnerships = () => {
  return (
    <>
      <div className="-mx-4 flex flex-wrap">
        <div className="w-full px-4">
          <div className="mx-auto mb-3 max-w-[510px] text-center lg:mb-5">
            <h2 className="text-dark mb-3 text-3xl font-bold leading-[1.2] text-gray-700 sm:text-4xl md:text-[40px]">
              Our Valued Clients
            </h2>
            <p className="text-body-color dark:text-dark-6 text-base max-sm:px-2">
              We are confident that we can find the process that will help you
              meet your goals.
            </p>
          </div>
        </div>
      </div>
      {/* ====== Brands Section Start */}

      <section className="dark:bg-dark bg-white py-20 lg:py-[40px]">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4">
              <div className="flex flex-wrap items-center justify-center">
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/img/partnerships/output-onlinepngtools.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/img/partnerships/Art-Build-Construction.jpg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/img/partnerships/Boxing-Club.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/img/partnerships/CDN_Flooring_&_Renovation.jpg"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/img/partnerships/Sam Amiralaei.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/img/partnerships/Arshia-Esmaeili.PNG"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/img/partnerships/Taurus.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/img/partnerships/Study.png"
                />
                <SingleImage
                  href="#"
                  Alt="Brand Image"
                  imgSrc="/img/partnerships/Visa.png"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ====== Brands Section End */}
    </>
  );
};

export default Partnerships;
