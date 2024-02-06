import React from "react";
import Feature from "./Feature/Feature";
import Slide from "./Slider/Slide";
import SupplyItems from "../../components/SupplyItems/SupplyItems";

const Home = () => {
  return (
    <>
      <Slide></Slide>
      <Feature></Feature>
      <SupplyItems></SupplyItems>
    </>
  );
};

export default Home;
