import "../App.css";
import { makeStyles } from "@material-ui/core";
import Carousel from "react-material-ui-carousel";
import { Typography } from "@material-ui/core";
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";

const useStyles = makeStyles((theme) => ({
    gallerySection: {
      paddingBottom: theme.spacing(5),
      backgroundImage: 'url(react-project/images/light-background2.png)',
    },
    sectionTitle: {
      letterSpacing: 5,
      paddingTop: theme.spacing(10),
      paddingBottom: theme.spacing(7),
      fontFamily: "MyriadPro",
      [theme.breakpoints.down("sm")]: {
        letterSpacing: 0,
        paddingTop: theme.spacing(5),
        paddingBottom: theme.spacing(3),
      },
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
      borderRadius: 4,
      [theme.breakpoints.down("sm")]: {
        width: '90%',
        marginLeft: '5%'
      },
    },
    galleryAnchor: {
      position: 'absolute',
      marginTop: "-140px"
    },
    [theme.breakpoints.down("sm")]: {
      marginTop: "-100px",
    },
  }));

export default function Gallery() {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));
  const slides = [
    {
      image: "/react-project/images/cam_04_fx.jpg",
    },
    {
      image: "/react-project/images/cam_10_fx.jpg",
    },
    {
      image: "/react-project/images/cam_02_fx.jpg",
    },
    {
      image: "/react-project/images/cam_03_fx.jpg",
    },
    {
      image: "/react-project/images/cam_05_fx.jpg",
    },
    {
      image: "/react-project/images/cam_09_fx.jpg",
    },
  ];

  return (
      <div className={classes.gallerySection}>
      <div id="gallery" className={classes.galleryAnchor}></div>
      <Typography
          className={classes.sectionTitle}
          align="center"
          variant={fullScreenSM ? "h4" : "h3"}
        >
          ГАЛЕРЕЯ
        </Typography>

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
