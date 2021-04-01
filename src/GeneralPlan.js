import React, { useEffect, useState } from "react";
import "./App.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";

import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Slide from "@material-ui/core/Slide";
import Collapse from "@material-ui/core/Collapse";

import {
  firstFloorApartments,
  secondAndFifthFloorApartments as secondAndFifthFloor,
} from "./localData";
import { firstFloorApartments as firstFloor } from "./localData";

import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";

import MuiDialogTitle from "@material-ui/core/DialogTitle";

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import FormOnly from "./justForm";
import { resizeMapAreas } from "./utils";

import GenPlanBackground from "./react-project/images/light-background2.png";

const useStyles = makeStyles((theme) => ({
  generalPlanImage: {
    maxWidth: "100%",
    minWidth: "100%",
  },
  floorImage: {
    maxWidth: "70%",
    minWidth: "70%",
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
  },
  area: {
    backgroundColor: "#ff0000",
    color: "#ff0000",
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
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const titleStyles = (theme) => ({
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    backButton: {
      position: "absolute",
      left: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    floorSection: {
      marginTop: theme.spacing(3),
    },
  });
  const DialogTitle = withStyles(titleStyles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h4">{children}</Typography>
        
        <IconButton
          aria-label="close"
          className={classes.backButton}
          onClick={() => {
            setSelectedApartment({});
            setCurrentDisplay("floor");
            setDialogOpen(false);
          }}
        >
          <ArrowBackIcon />
          <Typography align="center">вернуться к выбору квартиры</Typography>
        </IconButton>

        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={() => setDialogOpen(false)}
        >
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
    );
  });

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogTitle, setDialogTitle] = React.useState("");
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
      <div className="GeneralPlanSection">
        <div class="GeneralPlanBackground">
          <img src="react-project/images/light-background2.png"></img>
        </div>
        <Collapse timeout={600} in={currentDisplay === "generalPlan"}>
            <div className="GeneralPlanTitle">{"ГЕНПЛАН РАЙОНА"}</div>
            <div className="GeneralPlanSubtitle">
              {"Выберите этаж и квартиру"}
            </div>
        </Collapse>
        <Collapse timeout={800} in={currentDisplay === "floor"}>
            <div className="GeneralPlanTitle">{liter ? "Литер " + liter : "Литер"}</div>
            <div className="GeneralPlanSubtitle">
              {"Выберите дом для просмотра планировок"}
            </div>
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
                    class="part"
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
            <div class="floorImageSection">
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
                    <Typography align="left">
                      Вернуться к выбору литера
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
                        class="part"
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
                  //alignItems="center"
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
        {/*  )} */}
        <Dialog
          fullScreen={fullScreen}
          open={dialogOpen}
          maxWidth="md"
          fullWidth={true}
          onClose={() => {
            setDialogOpen(false);
          }}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogTitle
            id="customized-dialog-title"
            onClose={() => {
              setDialogOpen(false);
            }}
          ></DialogTitle>
          <DialogContent>
            <>
              <div className="dialogWindow">
                <CardMedia
                  className={classes.media}
                  image={selectedApartment.image}
                />

                <div className="textDialogContentInGeneralPlan">
                  <table className="apartmentDialogInfoTable">
                    <tr>
                      <td>ЛИТЕР</td>
                      <td>{liter}</td>
                    </tr>
                    <tr>
                      <td>ЭТАЖ</td>
                      <td>{floor === 1 ? floor : "2-5"}</td>
                    </tr>
                    <tr>
                      <td>КОЛИЧЕСТВО КОМНАТ</td>
                      <td>
                        {selectedApartment.rooms < 1
                          ? 1
                          : selectedApartment.rooms}
                      </td>
                    </tr>
                    <tr>
                      <td>ОБЩАЯ ПЛОЩАДЬ</td>
                      <td>
                        {selectedApartment.area} м<sup>2</sup>
                      </td>
                    </tr>
                    <tr>
                      <td>БАЛКОН</td>
                      <td>ЕСТЬ</td>
                    </tr>
                  </table>
                  <FormOnly
                    class="VerticalCallBackForm"
                    title="ЗАПИШИТЕСЬ НА ПРОСМОТР"
                    subtitle=""
                    selectedApartment={{
                      area: selectedApartment.area,
                      floor: floor,
                      liter: liter,
                    }}
                  />
                </div>
              </div>
            </>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
