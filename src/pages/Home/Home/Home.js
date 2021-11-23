import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navigation from "../../Shared/Navigation/Navigation";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";

import Service from "../Service/Service";
import TopCars from "../TopCars/TopCars";
import "./Home.css";
const Home = () => {
  return (
    <div className="homepage">
      <Navigation />
      <Banner />
      <TopCars />
      <Service />
      <Review />
      <Footer />
    </div>
  );
};

export default Home;
