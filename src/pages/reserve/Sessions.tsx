import PrimaryButton from "../../components/buttons/PrimaryButton";
import { useNavigate } from "react-router-dom";

const Sessions: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="grid grid-cols-3">
      <div className="flex flex-col border border-l-0 p-8">
        <h2 className="headline-2 uppercase">strength</h2>
        <div className="flex flex-col gap-6 pt-20">
          <div className="border-b pb-2">
            <p className="paragraph-1">Weekdays at 6AM</p>
          </div>
          <div className="border-b pb-2">
            <p className="paragraph-1">Weekends and Holdays at 8AM</p>
          </div>
          <p className="paragraph-1">
            Build a foundation of raw power with our comprehensive weightlifting and strength training programs.{" "}
          </p>
        </div>
        <PrimaryButton className="links-nav mt-16 uppercase" onClick={() => navigate("/reserve/strength")}>
          reserve your spot
        </PrimaryButton>
      </div>
      <div className="flex flex-col border border-l-0 p-8">
        <h2 className="headline-2 uppercase">conditioning</h2>
        <div className="flex flex-col gap-6 pt-20">
          <div className="border-b pb-2">
            <p className="paragraph-1">Weekdays at 8AM</p>
          </div>
          <div className="border-b pb-2">
            <p className="paragraph-1">Weekends and Holdays at 10AM</p>
          </div>
          <p className="paragraph-1">
            Push your limits with high-intensity workouts that challenge your cardiovascular endurance and build
            functional fitness.
          </p>
        </div>
        <PrimaryButton className="links-nav mt-16 uppercase" onClick={() => navigate("/reserve/conditioning")}>
          reserve your spot
        </PrimaryButton>
      </div>
      <div className="flex flex-col border border-r-0 border-l-0 p-8">
        <h2 className="headline-2 uppercase">
          community <br /> classes
        </h2>
        <div className="flex flex-col gap-6 pt-24">
          <div className="border-b pb-2">
            <p className="paragraph-1">Every day on the hour</p>
          </div>
          <p className="paragraph-1">
            Experience the power of collective effort with our custom Workout of the Day. Push your limits alongside
            like-minded individuals.
          </p>
        </div>
        <PrimaryButton className="links-nav mt-16 uppercase" onClick={() => navigate("/reserve/community")}>
          reserve your spot
        </PrimaryButton>
      </div>
    </div>
  );
};

export default Sessions;
