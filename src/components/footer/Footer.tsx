import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#E9ECFF]">
      <div className="container mx-auto flex px-1 py-[30px] sm:flex-col sm:gap-20 md:flex-col md:gap-[170px]">
        <div className="flex w-full py-5 sm:flex-col md:flex-row md:items-center md:justify-between">
          <img src="../../../public/footer/Vector (1).png" alt="Logo" className="block sm:hidden" />
          <img src="/footer/Vector (1).png" alt="Logo" className="block sm:hidden" />
          <img src="../../../public/footer/Vector (2).png" alt="" className="hidden sm:block" />
          <img src="/footer/Vector (2).png" alt="" className="hidden sm:block" />
          <h1 className="text-[52px] leading-[110%] font-bold">PrimalTraining</h1>
        </div>
        <div className="flex px-4 sm:flex-col sm:gap-10 md:flex-row md:justify-between">
          <div className="flex flex-col gap-[15px]">
            <p className="headline-5 uppercase">contact</p>
            <div className="flex flex-col gap-0.5">
              <div>
                <span className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl">Email:</span>{" "}
                <span className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl">
                  hello@figma.com
                </span>
              </div>
              <div>
                <span className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl">Phone:</span>{" "}
                <span className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl">
                  (203) 555-5555
                </span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <p className="headline-5 uppercase">opening hours</p>
            <div className="flex gap-[25px]">
              <div>
                <p className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl uppercase">mon - fri</p>
                <p className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl uppercase">saturdays</p>
                <p className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl uppercase">sundays</p>
                <p className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl uppercase">holidays</p>
              </div>
              <div>
                <p className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl">5:00 - 23:00</p>
                <p className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl">5:00 - 23:00</p>
                <p className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl">8:00 - 16:00</p>
                <p className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl">8:00 - 13:00</p>
                <p className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl">8:00 - 16:00</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-[15px]">
            <p className="headline-5 uppercase">social</p>
            <div className="flex flex-col">
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl underline"
              >
                Instagram
              </a>
              <a
                href="https://x.com"
                target="_blank"
                rel="noopener noreferrer"
                className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl underline"
              >
                X
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl underline"
              >
                LinkedIn
              </a>
              <a
                href="https://open.spotify.com"
                target="_blank"
                rel="noopener noreferrer"
                className="paragraph-3 md:paragraph-3_md lg:paragraph-3_lg xl:paragraph-3_xl underline"
              >
                Spotify
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
