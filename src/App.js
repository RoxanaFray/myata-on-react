import React, { useEffect } from "react";
import PopularPlansSection from "./PopularPlansSection";
import TopNavigation from "./TopNavigationSection";
import GeneralPlan from "./GeneralPlan";

import TopCarouselBanner from "./TopCarouselBanner";
import YandexMap from "./YandexMap";
import IkeaPark from "./IkeaPark";
import Gallery from "./Gallery";
import Infastructure from "./Infrastructure";
import OurBuildings from "./ourBuildings";
import DocsSection from "./docsSection";
import PaymentMethodsSection from "./paymentMethodsSection";


export default function App() {

  return (
    <>
      <TopNavigation />
      <div class="bodyContent">
        <TopCarouselBanner />
        <GeneralPlan />
        <PopularPlansSection />
        <YandexMap />
        <IkeaPark />
        <Gallery />
        <OurBuildings />
        <DocsSection />
        <PaymentMethodsSection />
      </div>
    </>
  );
  //return <PopularPlansSection/>
}
