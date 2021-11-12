import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import TopCars from "../TopCars/TopCars";
import "./home.css";
const Home = () => {
  return (
    <div className="home">
      <Navigation />
      <Banner />
      <TopCars />
      <Footer />
    </div>
  );
};

export default Home;
