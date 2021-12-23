import React, { useEffect } from "react";
import "../App.css";
import Carousel from "react-material-ui-carousel";
import MyMediaCard from "../components/ApartmentCard";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Collapse from "@material-ui/core/Collapse";
import { Typography } from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import ApartmentDialog from "../components/apartmentDialog";


const apartments = [
  {
    title: "КВАРТИРА-СТУДИЯ",
    rooms: 0,
    area: 24.1,
    image: "/react-project/img/plans/et-2-5_kv-05.png",
  },
  {
    title: "КВАРТИРА-СТУДИЯ",
    rooms: 0,
    area: 24.1,
    image: "/react-project/img/plans/et-2-5_kv-14.png",
  },
  {
    title: "1-КОМНАТНАЯ КВАРТИРА",
    rooms: 1,
    area: 29.2,
    image: "/react-project/img/plans/et-2-5_kv-01.png",
  },
  {
    title: "1-КОМНАТНАЯ КВАРТИРА",
    rooms: 1,
    area: 29.2,
    image: "/react-project/img/plans/et-2-5_kv-16.png",
  },
  {
    title: "1-КОМНАТНАЯ КВАРТИРА",
    rooms: 1,
    area: 30.5,
    image: "/react-project/img/plans/et-2-5_kv-02.png",
  },
  {
    title: "1-КОМНАТНАЯ КВАРТИРА",
    rooms: 1,
    area: 30.5,
    image: "/react-project/img/plans/et-2-5_kv-17.png",
  },
  {
    title: "1-КОМНАТНАЯ КВАРТИРА",
    rooms: 1,
    area: 33.5,
    image: "/react-project/img/plans/et-2-5_kv-04.png",
  },
  {
    title: "1-КОМНАТНАЯ КВАРТИРА",
    rooms: 1,
    area: 33.5,
    image: "/react-project/img/plans/et-2-5_kv-13.png",
  },
  {
    title: "1-КОМНАТНАЯ КВАРТИРА",
    rooms: 1,
    area: 33.8,
    image: "/react-project/img/plans/et-2-5_kv-08.png",
  },
  {
    title: "1-КОМНАТНАЯ КВАРТИРА",
    rooms: 1,
    area: 34.2,
    image: "/react-project/img/plans/et-2-5_kv-12.png",
  },
  {
    title: "1-КОМНАТНАЯ КВАРТИРА",
    rooms: 1,
    area: 35.9,
    image: "/react-project/img/plans/et-2-5_kv-11.png",
  },
  {
    title: "1-КОМНАТНАЯ КВАРТИРА",
    rooms: 1,
    area: 36.3,
    image: "/react-project/img/plans/et-2-5_kv-06.png",
  },
  {
    title: "1-КОМНАТНАЯ КВАРТИРА",
    rooms: 1,
    area: 36.3,
    image: "/react-project/img/plans/et-2-5_kv-07.png",
  },
  {
    title: "1-КОМНАТНАЯ КВАРТИРА",
    rooms: 1,
    area: 36.3,
    image: "/react-project/img/plans/et-2-5_kv-15.png",
  },
  {
    title: "1-КОМНАТНАЯ КВАРТИРА",
    rooms: 1,
    area: 36.7,
    image: "/react-project/img/plans/et-2-5_kv-10.png",
  },
  {
    title: "2-КОМНАТНАЯ КВАРТИРА",
    rooms: 2,
    area: 40.1,
    image: "/react-project/img/plans/et-2-5_kv-09.png",
  },
  {
    title: "3-КОМНАТНАЯ КВАРТИРА",
    rooms: 3,
    area: 63.9,
    image: "/react-project/img/plans/et-2-5_kv-03.png",
  },
  {
    title: "3-КОМНАТНАЯ КВАРТИРА",
    rooms: 3,
    area: 63.9,
    image: "/react-project/img/plans/et-2-5_kv-18.png",
  },
];
const useStyles = makeStyles((theme) => ({
  popularPlansSection: {
    background: "linear-gradient(white, #e6efe8)",
    paddingBottom: theme.spacing(5),
  },
  popularPlansAnchor: {
    position: "absolute",
    marginTop: "-140px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-100px",
    },
  },
  sectionTitle: {
    fontFamily: "MyriadPro",
    letterSpacing: 5,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      letterSpacing: 0,
      paddingTop: theme.spacing(5),
    },
  },
  sectionSubtitle: {
    fontFamily: "MyriadPro",
    marginBottom: theme.spacing(6),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(4),
    },
  },
  chooseApartmentButtonLine: {
    display: "flex",
    justifyContent: "center",
    marginBottom: theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
  chooseApartmentButton: {
    color: "#03bab0",
    borderColor: "#03bab0",
    background: "white",
    fontFamily: 'MyriadPro',
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
    },
    "&:hover": {
      backgroundColor: '#f7fdfd'
    },
  },
  clickedChooseApartmentButton: {
    color: "#ffffff",
    fontFamily: 'MyriadPro',
    background: "#03bab0",
    borderColor: "#03bab0",
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(1),
    },
    "&:hover": {
      background: "#03bab0",
      borderColor: "#03bab0",
      color: "white",
    },
  },
  apartmentDialog: {
    padding: theme.spacing(5),
  },
  sendCallback: {
    background: "linear-gradient(90deg, #add543 0, #03bab0)",
    color: "white",
    width: 350,
    marginTop: theme.spacing(2),
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 10000,
    color: "#fff",
  },
  media: {
    width: 400,
    height: 400,
  },
  lonelyCard: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    marginLeft: "auto",
    marginRight: "auto",
    width: 300,
    maxWidth: 350,
    minWidth: 250,
    paddingBottom: theme.spacing(3),
    minHeight: 524,
  },
  threeCards: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(4),
    width: 300,
    maxWidth: 350,
    minWidth: 250,
    paddingBottom: theme.spacing(3),
    minHeight: 524,
  },
}));

export default function PopularPlansSection() {
  const theme = useTheme();
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));
  const [width, setWidth] = React.useState(document.body.clientWidth);
  window.onresize = () => {
    setWidth(document.body.clientWidth);
  };

  const classes = useStyles();
  let [filteredArr, updateFilteredArr] = React.useState(
    filterApartments("all")
  );

  let [apartmentCards, updateApartmentCards] = React.useState([<></>]);

  const [dialogOpen, setDialogOpen] = React.useState(false);

  const [transition, setTransition] = React.useState(true);

  const [selectedButton, setSelectedButton] = React.useState(0);

  const [selectedApartment, setSelectedApartment] = React.useState({
    area: null,
    image: "",
    rooms: null,
    title: "",
  });

  //эффект, который обновляет верстку карточек квартир, когда меняется выбор кол-ва комнат или
  // ширина экрана
  useEffect(() => {
    updateApartmentCards(createApartmentCards(filteredArr));
  }, [filteredArr, fullScreenSM]);

  function createApartmentCards(filteredArr) {
    let result = [];
    // создание массива разнится в зависимости от ширины экрана
    if (width <= 1020) {
      filteredArr.forEach((elem) => {
        const title = elem.title;
        const rooms = elem.rooms;
        const area = elem.area;
        const image = elem.image;

        result.push(
          <MyMediaCard
            title={title}
            rooms={rooms}
            area={area}
            image={image}
            className={classes.lonelyCard}
            onClick={() => {
              setSelectedApartment(elem);
              setDialogOpen(true);
            }}
          />
        );
      });
    } else {
      // для ПК
      result = [[]];
      filteredArr.forEach((elem, index) => {
        const title = elem.title;
        const rooms = elem.rooms;
        const area = elem.area;
        const image = elem.image;

        result[result.length - 1].push(
          <MyMediaCard
            title={title}
            rooms={rooms}
            area={area}
            image={image}
            className={classes.threeCards}
            onClick={() => {
              setSelectedApartment(elem);
              setDialogOpen(true);
            }}
          />
        );
        if ((index + 1) % 3 === 0 && index != filteredArr.length - 1) {
          result.push([]);
        }
      });

      result = result.map((elem, index) => {
        return (
          <Grid
            key={index}
            container
            direction="row"
            justify="center"
            className={classes.cardsGrid}
            alignItems="flex-end"
          >
            {elem}
          </Grid>
        );
      });
    }
    return result;
  }
  function filterApartments(rooms) {
    let filtered = [];
    if (rooms === "all") {
      filtered = apartments;
    } else {
      filtered = apartments.filter((elem) => {
        if (elem.rooms === rooms) {
          return true;
        } else {
          return false;
        }
      });
    }
    return filtered;
  }
  return (
    <>
      <ApartmentDialog
        rooms={selectedApartment.rooms}
        area={selectedApartment.area}
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
        image={selectedApartment.image}
      />
      <div id="popularPlans" className={classes.popularPlansAnchor}></div>
      <div className={classes.popularPlansSection}>
        <Typography
          className={classes.sectionTitle}
          align="center"
          variant={fullScreenSM ? "h4" : "h3"}
        >
          ПЛАНИРОВКИ КВАРТИР ЖК МЯТА
        </Typography>
        <Typography
          variant={fullScreenSM ? "h6" : "h5"}
          align="center"
          className={classes.sectionSubtitle}
        >
          Посмотрите самые популярные планировки квартир
        </Typography>
        <div className={classes.chooseApartmentButtonLine}>
          {["Студии", "1-комнатные", "2-комнатные", "3-комнатные", "Все"].map(
            (elem, index) => {
              return (
                <Button
                  className={
                    index === selectedButton
                      ? classes.clickedChooseApartmentButton
                      : classes.chooseApartmentButton
                  }
                  size="large"
                  variant="outlined"
                  onClick={() => {
                    setTransition(false);
                    setTimeout(() => {
                      setTransition(true);
                      updateFilteredArr(
                        filterApartments(index === 4 ? "all" : index)
                      );
                    }, 650);

                    setSelectedButton(index);
                  }}
                >
                  {elem}
                </Button>
              );
            }
          )}
        </div>

        <Collapse timeout={600} in={transition}>
          <Carousel
            autoPlay={false}
            animation="slide"
            timeout={350}
            navButtonsAlwaysVisible={true}
          >
            {apartmentCards}
          </Carousel>
        </Collapse>
      </div>
    </>
  );
}
