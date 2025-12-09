const OurVision: React.FC = () => {
  return (
    <div className="grid grid-cols-3 bg-[#808CFD]">
      <div className="col-span-2 container flex flex-col justify-between px-5 py-8">
        <div>
          <h2 className="headline-2 uppercase">
            tap into your primal power. <br />
            forge a stronger you.
          </h2>
        </div>
        <div className="flex flex-col gap-2">
          <h5 className="headline-5 uppercase">our vision</h5>
          <p className="paragraph-2 max-w-[813px]">
            Primal Training is committed to delivering a training experience rooted in raw strength, functional fitness,
            and unwavering community support. We empower our members to tap into their primal power, achieve their
            goals, and live a life of strength, resilience, and unwavering determination.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-end">
        <img src="../../../public/about/Image.jpg" alt="" className="h-full w-full object-cover" />
        <img src="/about/Image.jpg" alt="" className="h-full w-full object-cover" />
      </div>
    </div>
  );
};

export default OurVision;
