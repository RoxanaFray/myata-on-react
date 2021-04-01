import React, { useEffect } from "react";
import "./App.css";
import Carousel from "react-material-ui-carousel";
import Button from "@material-ui/core/Button";

import FormOnly from "./justForm";

export default function TopCarouselBanner() {
  const slides = [
    {
      title: "ЖИЛОЙ КОМПЛЕКС",
      subtitle: "В ЭКОЛОГИЧЕСКИ ЧИСТОМ РАЙОНЕ",
      image: "react-project/images/cam_09_fx.jpg",
    },
    {
      title: "ВСЯ НЕОБХОДИМАЯ ИНФРАСТРУКТУРА",
      subtitle: "В ШАГОВОЙ ДОСТУПНОСТИ",
      image: "react-project/images/cam_10_fx.jpg",
    },
    {
      title: "ЖИЛЬЁ КОМФОРТ-КЛАССА",
      subtitle: "СТРОИМ ПО 214 ФЗ",
      image: "react-project/images/cam_05_fx.jpg",
    },
  ];
  return (
    <Carousel
      autoPlay={false}
      indicators={false}
      animation='slide'
      timeout={300}
      navButtonsAlwaysVisible={true}
      NavButton={({ onClick, className, style, next, prev }) => {
        // Other logic

        return (
          <Button onClick={onClick} className={className} style={style}>
            {next && "Next"}
            {prev && "Previous"}
          </Button>
        );
      }}
    >
      {slides.map((elem) => (
        <div className="TopSliderSection">
          <div
            className="firstTopSlide"
            style={{ backgroundImage: `url(${elem.image})` }}
          >
            <div className="topSlideDarkCover">
              <img src="react-project/images/dark-bg.png"></img>
            </div>
            <div className="topSliderContent">
              <div className="topSliderTitle">{elem.title}</div>
              <div className="topSliderSubtitle">{elem.subtitle}</div>
              <div class="topSliderForm">
                <FormOnly
                  class="HorizontalCallBackForm"
                  title="ЗАПИШИТЕСЬ НА ПРОСМОТР"
                  subtitle="своей будущей квартиры"
                ></FormOnly>
              </div>
              <div className="sliderDownButton">
                <img src="react-project/images/slider_down.png" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
