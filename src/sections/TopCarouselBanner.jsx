import "../App.css";
import Carousel from "react-material-ui-carousel";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import FormOnly from "../components/justForm";
import { useTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Container from "@material-ui/core/Container";
const slides = [
  {
    title: "ЖИЛОЙ КОМПЛЕКС",
    subtitle: "В ЭКОЛОГИЧЕСКИ ЧИСТОМ РАЙОНЕ",
    image: "react-project/images/cam_09_fx_dark.jpg",
  },
  {
    title: "ВСЕ НЕОБХОДИМОЕ",
    subtitle: "В ШАГОВОЙ ДОСТУПНОСТИ",
    image: "react-project/images/cam_10_fx_dark.jpg",
  },
  {
    title: "ЖИЛЬЁ КОМФОРТ-КЛАССА",
    subtitle: "СТРОИМ ПО 214 ФЗ",
    image: "react-project/images/cam_05_fx_dark.jpg",
  },
];

export default function TopCarouselBanner() {
  const theme = useTheme();
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));
  const useStyles = makeStyles((theme) => ({
    sliderRoot: {
      height: 600,
      marginTop: 140,
      [theme.breakpoints.down("sm")]: {
        marginTop: 115,
      },
    },
    topSlider: {
      backgroundRepeat: "no-repeat",
      backgroundSize: "cover",
      backgroundPosition: "center",
      height: "100%",
      position: "relative",
    },
    sliderTitle: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(4),
      fontFamily: "MyriadPro",
      color: "white",
      zIndex: 100,
      [theme.breakpoints.down("sm")]: {
        paddingTop: theme.spacing(25),
      },
    },
    sliderSubtitle: {
      paddingBottom: theme.spacing(4),
      color: "white",
      fontFamily: "MyriadPro",
      zIndex: 100,
    },
    sliderDown: {
      bottom: "-65px",
      position: "absolute",
    },
    form: {
      padding: theme.spacing(4),
      display: "flex",
      flexDirection: "row",
      justify: "space-around",
      alignItems: "center",
      marginTop: theme.spacing(1),
      [theme.breakpoints.down("md")]: {
        padding: theme.spacing(2),
      },
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },
    formTitle: {
      fontFamily: "MyriadPro",
      [theme.breakpoints.down("md")]: {
        fontSize: 20,
      },
    },
    formSubtitle: {
      color: "#03bab0",
      fontFamily: "MyriadProSemibold",
      [theme.breakpoints.down("md")]: {
        fontSize: 18,
      },
    },
    formName: {
      marginRight: theme.spacing(2),
      marginLeft: theme.spacing(2),
    },
    formPhone: {
      marginRight: theme.spacing(2),
    },
    formButton: {
      fontFamily: "MyriadPro",
      color: "white",
      background: "linear-gradient(90deg, #add543 0, #03bab0)",
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      fontSize: 12,
      "&:hover": {
        background: "linear-gradient(90deg, #03bab0 0, #add543 )",
      },
    },
  }));
  const classes = useStyles();

  return (
    <Carousel
      autoPlay={false}
      indicators={false}
      animation="slide"
      timeout={300}
      navButtonsAlwaysVisible={true}
    >
      {slides.map((elem) => (
        <div key={elem.title} className={classes.sliderRoot}>
          <div
            className={classes.topSlider}
            style={{ backgroundImage: `url(${elem.image})` }}
          >
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
              className={classes.content}
            >
              <Grid item>
                <Container>
                  <Typography
                    className={classes.sliderTitle}
                    color="white"
                    align="center"
                    variant={fullScreenSM ? "h4" : "h2"}
                  >
                    {elem.title}
                  </Typography>
                </Container>
              </Grid>
              <Grid item>
                <Container>
                  <Typography
                    className={classes.sliderSubtitle}
                    color="white"
                    align="center"
                    variant={fullScreenSM ? "h5" : "h4"}
                  >
                    {elem.subtitle}
                  </Typography>
                </Container>
              </Grid>
              <Grid item>
                <FormOnly
                  rootClassName={classes.form}
                  titleClassName={classes.formTitle}
                  subtitleClassName={classes.formSubtitle}
                  nameClassName={classes.formName}
                  phoneClassName={classes.formPhone}
                  buttonClassName={classes.formButton}
                  title="ЗАПИШИТЕСЬ НА ПРОСМОТР"
                  subtitle="своей будущей квартиры"
                />
              </Grid>
              <div className={classes.sliderDown}>
                <a href="#genplan">
                  <img src="react-project/images/slider_down.png" />
                </a>
              </div>
            </Grid>
          </div>
        </div>
      ))}
    </Carousel>
  );
}
