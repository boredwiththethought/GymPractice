import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/Footer";
import Sessions from "./Sessions";
import Personal from "./Personal";
import React from "react";

const Reserve: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto p-5">
        <h1 className="headline-1 uppercase">
          book a <span className="text-[#808DFD]">session</span>
        </h1>
      </div>
      <Sessions />
      <Personal />
      <Footer />
    </>
  );
};
export default Reserve;
