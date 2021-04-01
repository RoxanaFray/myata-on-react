import React, { useEffect } from "react";
import PopularPlansSection from "./PopularPlansSection";
import TopNavigation from "./TopNavigationSection";
import GeneralPlan from "./GeneralPlan";
import FormOnly from "./justForm";
import TopCarouselBanner from "./TopCarouselBanner";
import YandexMap from "./YandexMap";
import IkeaPark from "./IkeaPark";
import Gallery from "./Gallery";
import Infastructure from "./Infrastructure";

export default function App() {

  return (
    <>
      <TopNavigation />
      <div class="bodyContent">
        <TopCarouselBanner />
        <GeneralPlan />
        <PopularPlansSection />
        <FormOnly
          class="HorizontalCallBackForm"
          title="ЗАКАЖИТЕ ОБРАТНЫЙ ЗВОНОК"
          subtitle="Перезвоним в течение 5 минут!"
        />
        <YandexMap />
        <IkeaPark />
        <Gallery />
       
      </div>
    </>
  );
  //return <PopularPlansSection/>
}
