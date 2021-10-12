import React, { useEffect } from "react";
import PopularPlansSection from "./sections/PopularPlansSection";
import TopNavigation from "./components/TopMenu";
import GeneralPlan from "./sections/GeneralPlan";
import TopCarouselBanner from "./sections/TopCarouselBanner";
import YandexMap from "./sections/YandexMap";
import IkeaPark from "./sections/IkeaPark";
import Gallery from "./sections/Gallery";
import MyataInfrastructure from "./sections/Infrastructure"
import OurBuildings from "./sections/OurBuildingsSection";
import DocsSection from "./sections/DocsSection";
import PaymentMethodsSection from "./sections/PaymentMethodsSection";
import Footer from "./sections/Footer";

export default function App() {

  return (
    <>
      <TopNavigation />
        <TopCarouselBanner />
        <GeneralPlan />
        <PopularPlansSection />
        <YandexMap />
        <IkeaPark />
        <Gallery />
        <MyataInfrastructure />
        <DocsSection />
        <OurBuildings />
        <PaymentMethodsSection />
        <Footer />
    </>
  );
}
