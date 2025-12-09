const Dynamic = () => {
  return (
    <div className="grid w-full grid-cols-3 bg-[#E9ECFF]">
      <div className="col-span-2">
        <img src="../../../public/about/img-2.jpg" alt="" className="h-auto w-full object-cover" />
      </div>
      <div className="flex flex-col justify-between px-5 py-8">
        <h2 className="headline-2 uppercase">dynamic open gym</h2>
        <p className="paragraph-2">
          At Primal Training, we strip away the fluff and focus on the fundamentals. Our expert coaches guide you
          through intense, functional workouts designed to build raw strength, resilience, and a body capable of
          anything.
        </p>
      </div>
    </div>
  );
};

export default Dynamic;
