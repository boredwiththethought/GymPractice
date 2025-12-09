import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/Footer";
import MainContent from "./MainContent";
import Header from "./Header";
import React from "react";
import ReserveHome from "./ReserveHome";

export const Home: React.FC = () => {
  return (
    <>
      <NavBar />
      <Header />
      <MainContent />
      <ReserveHome />
      <Footer />
    </>
  );
};

export default Home;
