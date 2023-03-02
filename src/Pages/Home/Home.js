import React from "react";
import Categories from "../../Components/Categories/Categories";
import Map from "../../Components/Map/Map";
import { Page } from "../../Components/Page";
import Slider from "../../Components/Slider/Slider";
import Advertize from "../Advertize/Advertize";
import Dashboard from "./DashBoard/Dashboard";
import PricingTable from "./PricingTable/PricingTable";
import Proposition from "./Proposition/Proposition";
import Testimonial from "./Testimonial/Testimonial";
import Faq from "./Faq/Faq";

const Home = () => {
  return (
    <Page title="NextPhone - Sell Your Old Phone Now">
      <Slider />
      <Dashboard></Dashboard>
      <Proposition></Proposition>
      <Testimonial></Testimonial>
      <PricingTable></PricingTable>
      <Faq></Faq>

      {/* <Categories /> */}
      {/* <Advertize /> */}
      {/* <Map /> */}
    </Page>
  );
};

export default Home;
