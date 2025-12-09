import SecondaryButton from "../../components/buttons/SecondaryButton";
import { useNavigate } from "react-router-dom";

const Personal: React.FC = () => {
  const navigate = useNavigate();

  const handleReserveClick = () => {
    navigate("/reserve");
  };

  return (
    <div className="flex w-full flex-col justify-center items-center gap-5 bg-[#808CFD] py-40 text-center">
      <h3 className="headline-3 uppercase">primal personal training</h3>
      <p className="paragraph-2 max-w-[780px] text-center">
        Receive personalized guidance and tailored programs designed to unlock your individual primal potential. Our
        expert coaches will guide you every step of the way.
      </p>
      <div className="flex justify-center">
        <SecondaryButton className="uppercase links-button" onClick={handleReserveClick}>Reserve your spot</SecondaryButton>
      </div>
    </div>
  );
};

export default Personal;
