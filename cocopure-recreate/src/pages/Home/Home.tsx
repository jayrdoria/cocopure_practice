// src/pages/Home.tsx
import React from "react";
import Banner from "./Banner";
import WhyChoosePage from "./WhyChoosePage";
import OurProductsPage from "./OurProductsPage";
import OurMission from "./OurMission";
import BenefitsPage from "./BenefitsPage";
import CustomerReviewsPage from "./CustomerReviewPage";

const Home: React.FC = () => {
  return (
    <>
      <Banner />
      <WhyChoosePage />
      <OurProductsPage />
      <OurMission />
      <BenefitsPage />
      <CustomerReviewsPage />
    </>
  );
};

export default Home;
