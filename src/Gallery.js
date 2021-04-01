import React, { useEffect, useState } from "react";
import "./App.css";
import { createStyles, makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import Background from "./react-project/images/light-background2.png";

const useStyles = makeStyles((theme) =>
  createStyles({
    background: {
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      bacgroundRepeat: "no-repeat",
      height: 600,
      padding: 70,
    },
    title: {
      textAlign: 'center',
      fontFamily: 'MyriadPro',
      fontSize: 40,
      letterSpacing: 7,
      padding: 30
    },
    slider: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center'
    },
    slide: {
      height: 'auto',
      
    },
    slideImage: {
      maxHeight: 500,
      height: 'auto',
      maxWidth: '100%',
      borderRadius: 10
    }
  })
);

export default function Gallery() {
  const slides = [
    {
      image: "/react-project/images/cam_02_fx.jpg",
    },
    {
      image: "/react-project/images/cam_03_fx.jpg",
    },
    {
      image: "/react-project/images/cam_04_fx.jpg",
    },
    {
      image: "/react-project/images/cam_05_fx.jpg",
    },
    {
      image: "/react-project/images/cam_09_fx.jpg",
    },
    {
      image: "/react-project/images/cam_10_fx.jpg",
    },
  ];
  const classes = useStyles();
  return (
    <div className={classes.background} id="constr_course">
      <div className={classes.title}>ГАЛЕРЕЯ</div>

      <Carousel
        autoPlay={false}
        indicators={false}
        animation="slide"
        timeout={500}
        navButtonsAlwaysVisible={true}
        className={classes.slider}
      >
        {slides.map((elem) => (
          <div className={classes.slide}>
            <img className={classes.slideImage} src={elem.image}></img>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
