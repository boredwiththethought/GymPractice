import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Join: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex w-full justify-center border-b-5 py-[162px] text-center">
      <div className="flex flex-col items-center gap-5">
        <p className="paragraph-2 uppercase">what we believe in</p>
        <h3 className="headline-3 uppercase">join the primal tribe today!</h3>
        <div className="flex justify-center">
          <PrimaryButton className="uppercase links-button" onClick={() => navigate("/reserve")}>reserve your spot</PrimaryButton>
        </div>
      </div>
    </div>
  );
};

export default Join;
