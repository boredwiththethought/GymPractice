import SecondaryButton from "../../components/buttons/SecondaryButton";

const Reserve = () => {
  return (
    <div className="flex w-full items-center justify-center bg-[#808CFD] py-[162px]">
      <div className="flex flex-col gap-5 text-center">
        <p className="paragraph-1 uppercase">what we believe in</p>
        <h1 className="headline-3 uppercase">join the primal tribe todat!</h1>
        <div className="flex justify-center">
          <SecondaryButton onClick={() => (window.location.href = "/reserve")} className="uppercase links-button">reserve your spot</SecondaryButton>
        </div>
      </div>
    </div>
  );
};

export default Reserve;
