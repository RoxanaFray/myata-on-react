import React, { useEffect } from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Collapse from "@material-ui/core/Collapse";
import Container from "@material-ui/core/Container";
import { secondAndFifthFloorApartments as secondAndFifthFloor } from "../localData";
import { firstFloorApartments as firstFloor } from "../localData";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import { resizeMapAreas } from "../utils";
import ApartmentDialog from "../components/apartmentDialog";

const useStyles = makeStyles((theme) => ({
  generalPlanSection: {
    backgroundImage: "url(react-project/images/light-background2.png)",
  },
  generalPlanAnchor: {
    position: "absolute",
    marginTop: "-140px",
  },
  generalPlanTitle: {
    marginTop: theme.spacing(10),
    fontFamily: "MyriadPro",
    letterSpacing: 5,
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(5),
      letterSpacing: 0,
    },
  },
  generalPlanSubtitle: {
    fontFamily: "MyriadPro",
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(10),
    [theme.breakpoints.down("sm")]: {
      marginBottom: theme.spacing(5),
    },
  },
  generalPlanImage: {
    width: "100%",
  },
  floorImageSection: {
    backgroundColor: "white",
  },
  floorImage: {
    width: "70%",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 10000,
    color: "#fff",
  },
  media: {
    width: 400,
    height: 400,
  },
  floorBtns: {
    margin: theme.spacing(2),
    color: "#03bab0",
    borderColor: "#03bab0",
    "&:hover": {
      color: "#03bab0",
      borderColor: "#03bab0",
      backgroundColor: "#f7fdfd",
    },
  },
  area: {
    backgroundColor: "#ff0000",
    color: "#ff0000",
  },
  backButton: {

  },
  backButtonText: {
    fontFamily: "MyriadPro",
  },
}));

const literAreas = [
  "530,438,457,441,446,521,501,568,488,707,313,706,235,655,305,268,498,270,542,348",
  "573,377,608,443,644,446,641,529,557,526,547,658,588,701,790,702,803,343,786,272,585,267",
  "1165,341,1195,265,1395,265,1404,379,1377,434,1336,436,1344,528,1428,529,1439,652,1395,701,1187,701",
  "1439,326,1451,441,1517,440,1531,528,1517,529,1470,568,1485,694,1663,697,1753,650,1682,262,1477,262",
];

export default function GeneralPlan() {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));
  const fullScreenXS = useMediaQuery(theme.breakpoints.down("xs"));
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [currentDisplay, setCurrentDisplay] = React.useState("generalPlan");
  const [liter, setLiter] = React.useState(null);
  const [floor, setFloor] = React.useState(1);
  const floorData = floor === 1 ? firstFloor : secondAndFifthFloor;

  const [selectedApartment, setSelectedApartment] = React.useState({
    area: null,
    image: "",
    rooms: null,
    title: "",
  });

  useEffect(() => {
    const coefficient = floor === 1 ? 0.77 : 0.73;
    resizeMapAreas("generalPlanMap", 1920);
    resizeMapAreas("floorMap", 1530 * coefficient);
  }, [currentDisplay, floor]);

  return (
    <>
      <ApartmentDialog
        liter={liter}
        rooms={selectedApartment.rooms}
        area={selectedApartment.area}
        floor={floor}
        onClose={() => setDialogOpen(false)}
        open={dialogOpen}
        image={selectedApartment.image}
      />
      <div className={classes.generalPlanAnchor} id="genplan"></div>
      <div className={classes.generalPlanSection}>
        <Collapse timeout={600} /* mountOnEnter unmountOnExit */ in={currentDisplay === "generalPlan"}>
          <Container >
            <Typography
              variant={fullScreenSM ? "h4" : "h3"}
              align="center"
              className={classes.generalPlanTitle}
            >
              {"ГЕНПЛАН РАЙОНА"}
            </Typography>
            <Typography
              variant={fullScreenSM ? "h6" : "h5"}
              align="center"
              className={classes.generalPlanSubtitle}
            >
              {"Выберите дом для просмотра планировок"}
            </Typography>
          </Container>
        </Collapse>
        <Collapse timeout={800} /* mountOnEnter unmountOnExit */  in={currentDisplay === "floor"}>
          <Container>
            <Typography
              variant="h3"
              align="center"
              className={classes.generalPlanTitle}
            >
              {"ЛИТЕР " + (liter ?? "")}
            </Typography>
            <Typography
              variant="h5"
              align="center"
              className={classes.generalPlanSubtitle}
            >
              {"Выберите этаж и квартиру"}
            </Typography>
          </Container>
        </Collapse>

        <Collapse timeout={800} in={currentDisplay === "generalPlan"}>
          <img
            id="generalPlanImage"
            className={classes.generalPlanImage}
            usemap="#image-map"
            src="react-project/images/generalplan.jpeg"
          />
          <map name="image-map" id="generalPlanMap">
            {/* создаем area для литеров */}
            {currentDisplay === "generalPlan" &&
              literAreas.map((coords, index) => (
                <area
                  className="part"
                  coords={coords}
                  shape="poly"
                  onClick={() => {
                    setLiter(index + 1);
                    setFloor(1);
                    setCurrentDisplay("floor");
                  }}
                  onMouseEnter={() => {}}
                  onMouseLeave={() => {}}
                />
              ))}
          </map>
        </Collapse>
        {/* {currentDisplay === "floor" && ( */}
        <Collapse timeout={800} in={currentDisplay === "floor"}>
          <div className={classes.floorImageSection}>
            <Grid
              container
              direction="column"
              justify="center"
              alignItems="center"
            >
              <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
              >
                <IconButton
                  aria-label="close"
                  className={classes.backButton}
                  onClick={() => {
                    setSelectedApartment({});
                    setLiter(null);
                    setFloor(1);
                    setCurrentDisplay("generalPlan");
                  }}
                >
                  <ArrowBackIcon />
                  <Typography align="center" className={classes.backButtonText}>
                  {fullScreenXS ? "к выбору литера" : "вернуться к выбору литера"}
            
                  </Typography>
                </IconButton>
              </Grid>
              <img
                id="floorImage"
                className={classes.floorImage}
                usemap="#floor-map"
                src={
                  floor === 1
                    ? "/react-project/images/1.png"
                    : "/react-project/images/2-5.png"
                }
              />
              <map name="floor-map" id="floorMap">
                {/* создаем area для этажей */}
                {currentDisplay === "floor" &&
                  floorData.map((apartment, index) => (
                    <area
                      className="part"
                      coords={apartment.coords}
                      shape="poly"
                      onClick={() => {
                        setSelectedApartment(apartment);
                        setDialogOpen(true);
                      }}
                      onMouseEnter={() => {}}
                      onMouseLeave={() => {}}
                    />
                  ))}
              </map>
              <Grid
                container
                direction="row"
                justify="center"
              >
                <Button
                  className={classes.floorBtns}
                  size="large"
                  color="inherit"
                  variant="outlined"
                  onClick={() => {
                    setFloor(1);
                  }}
                >
                  1 этаж
                </Button>
                <Button
                  className={classes.floorBtns}
                  size="large"
                  color="inherit"
                  variant="outlined"
                  onClick={() => {
                    setFloor(2);
                  }}
                >
                  2-5 этаж
                </Button>
              </Grid>
            </Grid>
          </div>
        </Collapse>
      </div>
    </>
  );
}
