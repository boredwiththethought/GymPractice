import { Link } from "react-router-dom";
const MainContent = () => {
  return (
    <main className="w-full pt-2.5">
      <h1 className="headline-1 px-5 uppercase">
        join the <span className="text-[#808DFD]">community</span>
      </h1>
      <div className="flex border-t bg-[#E9ECFF]">
        <div className="flex max-h-[600px] max-w-[426px] flex-col">
          {/* Main content goes here */}
          <div className="px-5 py-8">
            <p className="headline-2 uppercase">discover your potential</p>
          </div>
          <div className="flex flex-col gap-1.5 border-t border-b px-5 py-4">
            <h6 className="headline-4 uppercase">expert coaching</h6>
            <p className="paragraph-2 max-w-[350px]">Trainers who are passionate about your progress.</p>
          </div>
          <div className="flex flex-col gap-1.5 border-b px-5 py-4">
            <h6 className="headline-4 uppercase">results-driven programs</h6>
            <p className="paragraph-2 max-w-[350px]">Workouts that deliver tangible, measurable results.</p>
          </div>
          <div className="flex flex-col gap-1.5 border-b px-5 py-4">
            <h6 className="headline-4 uppercase">a supportive tribe</h6>
            <p className="paragraph-2 max-w-[350px]">A community that pushes you to be your best.</p>
          </div>
          <Link to="/reserve" className="links-button px-10 py-9 uppercase">
            view classes
          </Link>
        </div>
        <div className="flex-1">
          <img src="/home/main/Image.png" alt="" className="h-full max-h-[600px] w-full object-cover" />
        </div>
      </div>
    </main>
  );
};

export default MainContent;
