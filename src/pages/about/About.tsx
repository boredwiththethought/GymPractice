import React from "react";
import NavBar from '../../components/nav/NavBar'
import Footer from "../../components/footer/Footer";
import OurVision from "./OurVision";
import Dynamic from "./Dynamic";
import Space from "./Space";
import Join from "./Join";

const About: React.FC = () => {
  return (
    <>
      <NavBar />
      <div className="container mx-auto px-5">
        <h1 className="headline-1 uppercase py-5">about us</h1>
      </div>
      <OurVision />
      <Dynamic />
      <Space />
      <Join />
      <Footer />
    </>
  );
};

export default About;