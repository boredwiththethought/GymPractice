import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex w-full flex-col pt-5">
      <div className="text-center">
        <h1 className="headline-1 uppercase">
          train hard. <span className="text-[#808CFD]">live better</span>
        </h1>
      </div>
      <div className="mt-5 grid w-full grid-cols-3 grid-rows-2 gap-0 border-t border-b bg-[#E9ECFF]">
        {/* Top Row */}
        <div className="col-span-2 row-span-1 flex items-center justify-center">
          <img src="/home/header-1/Image.png" alt="header" className="hidden h-full w-full object-cover lg:block" />
          <img src="/home/header-1/Image-1.png" alt="header" className="block h-full w-full object-cover md:hidden" />
          <img src="/home/header-1/Image-2.png" alt="header" className="block h-full w-full object-cover md:hidden" />
        </div>
        <div className="col-span-1 row-span-1 flex flex-col justify-around border-l px-5 py-10">
          <h1 className="headline-2 uppercase">for the committed</h1>
          <div className="flex flex-col gap-5">
            <p className="paragraph-2">
              Train like an athlete with top-tier equipment and expert programming. Whether you're building muscle or
              breaking PRs, we help you push past limits
            </p>
            <Link to={"/about"} className="links-button px-6 uppercase">
              about us
            </Link>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="col-span-1 row-span-1 flex flex-col justify-between border-t border-r px-5 py-5">
          <h3 className="headline-2 text-center uppercase">guided by experts</h3>
          <p className="paragraph-2 pb-[70px]">
            We believe in creating a positive environment where you can thrive. We're here to help you achieve your
            goals and unlock your full potential.
          </p>
        </div>
        <div className="col-span-1 row-span-1 flex flex-col justify-between border-t border-r px-5 py-5">
          <h3 className="headline-2 text-center uppercase">dynamic open gym</h3>
          <p className="paragraph-2 pb-[70px]">
            Our facility is the optimal environment for strength training and performance, fully equipped with
            top-of-the-line tools, ample training areas, and a focus on functional movement.
          </p>
        </div>
        <div className="col-span-1 row-span-1 flex items-center justify-center border-t">
          <img src="/home/header-2/Image.png" alt="gym" className="h-auto w-full object-cover" />
        </div>
      </div>
    </header>
  );
};

export default Header;
