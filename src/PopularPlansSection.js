import React, { useEffect } from "react";
import "./App.css";
import Carousel from "react-material-ui-carousel";
import MyMediaCard from "./ApartmentCard";
import useWindowDimensions from "./MyHooks";
import Grid from "@material-ui/core/Grid";
import MyResponsiveDialog from "./dialog";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import CardMedia from "@material-ui/core/CardMedia";
import Menu from "@material-ui/core/Menu";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";

import Paper from "@material-ui/core/Paper";
import Grow from "@material-ui/core/Grow";
import Slide from "@material-ui/core/Slide";
import Collapse from "@material-ui/core/Collapse";
import Fade from "@material-ui/core/Fade";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import NumberFormat from "react-number-format";
import reactDom from "react-dom";

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
  chooseApartmentButton: {
    color: "#03bab0",
    borderColor: "#03bab0",
    marginLeft: 10,
    marginRight: 10,
    background: "white",
  },
  clickedChooseApartmentButton: {
    color: "#ffffff",
    background: "#03bab0",
    borderColor: "#ffffff",
  },
  apartmentDialog: {
    padding: 40,
  },
  sendCallback: {
    background: "linear-gradient(90deg, #add543 0, #03bab0)",
    color: "white",
    width: 350,
    marginTop: 15,
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 10000,
    color: "#fff",
  },
  media: {
    width: 400,
    height: 400,
  },
}));

export default function PopularPlansSection() {
  const theme = useTheme();
  
  
  const [width, setWidth] = React.useState(document.body.clientWidth)
  window.onresize = () => {setWidth(document.body.clientWidth)};

  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();
  let [filteredArr, updateFilteredArr] = React.useState(
    filterApartments("all")
  );

  let [apartmentCards, updateApartmentCards] = React.useState([<></>]);
  let [dialog, updateDialog] = React.useState(false);
  let [dialogContent, updateDialogContent] = React.useState(<></>);
  let [dialogTitle, updateDialogTitle] = React.useState("");

  // это state для хранения классов кнопок фильтра
  let [buttonClasses, updateButtonClasses] = React.useState([
    classes.chooseApartmentButton,
    classes.chooseApartmentButton,
    classes.chooseApartmentButton,
    classes.chooseApartmentButton,
    classes.chooseApartmentButton,
  ]);

  // данные из полей ввода
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");
  const [currentArea, setCurrentArea] = React.useState("");

  // state для snackbar
  const [snackbarMessage, updateSnackbarMessage] = React.useState("");
  const [snackbarSeverity, updateSnackbarSeverity] = React.useState("success");
  const [snackbarOpen, updateSnackbarOpen] = React.useState(false);

  const [transition, setTransition] = React.useState(true);

  // state для backdrop
  const [backdrop, updateBackdrop] = React.useState(false);

  // меняет стили нажатой кнопки и стили остальных кнопок
  function changeButtonClasses(currentBtnIndex) {
    const newArr = buttonClasses.map((elem, index) => {
      if (currentBtnIndex === index) {
        return classes.clickedChooseApartmentButton;
      } else {
        return classes.chooseApartmentButton;
      }
    });
    updateButtonClasses(newArr);
  }

  //эффект, который обновляет верстку карточек квартир, когда меняется выбор кол-ва комнат или
  // ширина экрана
  useEffect(() => {
    updateApartmentCards(createApartmentCards(filteredArr));
  }, [filteredArr, fullScreen]);

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
            cardClass="lonelyCard"
            onClick={() => {
              updateDialog(true);
              updateDialogTitle(title);
              updateDialogContent(
                <div className="dialogWindow">
                  <CardMedia className={classes.media} image={image} />

                  <div className="textDialogContent">
                    <table className="apartmentDialogInfoTable">
                      <tr>
                        <td>КОЛИЧЕСТВО КОМНАТ</td>
                        <td>{rooms < 1 ? 1 : rooms}</td>
                      </tr>
                      <tr>
                        <td>ОБЩАЯ ПЛОЩАДЬ</td>
                        <td>
                          {area} м<sup>2</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>БАЛКОН</td>
                        <td>ЕСТЬ</td>
                      </tr>
                    </table>
                    <div className="cardFormTitle">ЗАПИШИТЕСЬ НА ПРОСМОТР</div>
                    <TextField
                      size="small"
                      label="Имя"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment fullWidth position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(event) => {
                        const newName = event.target.value;
                        setName(newName);
                      }}
                    />
                    <NumberFormat
                      type="tel"
                      format="+7 (###) ### ## ##"
                      size="small"
                      allowEmptyFormatting
                      mask="_"
                      customInput={TextField}
                      fullWidth
                      variant="outlined"
                      label="Номер телефона"
                      onChange={(event) => {
                        const newPhone = event.target.value;
                        setPhone(newPhone);
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment fullWidth position="start">
                            <PhoneIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
              );
              setCurrentArea(area);
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
            cardClass="threeCards"
            onClick={() => {
              updateDialog(true);
              updateDialogTitle(title);
              updateDialogContent(
                <div className="dialogWindow">
                  <CardMedia className={classes.media} image={image} />

                  <div className="textDialogContent">
                    <table className="apartmentDialogInfoTable">
                      <tr>
                        <td>КОЛИЧЕСТВО КОМНАТ</td>
                        <td>{rooms < 1 ? 1 : rooms}</td>
                      </tr>
                      <tr>
                        <td>ОБЩАЯ ПЛОЩАДЬ</td>
                        <td>
                          {area} м<sup>2</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>БАЛКОН</td>
                        <td>ЕСТЬ</td>
                      </tr>
                    </table>

                    <div className="cardFormTitle">ЗАПИШИТЕСЬ НА ПРОСМОТР</div>
                    <TextField
                      size="small"
                      label="Имя"
                      variant="outlined"
                      fullWidth
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <AccountCircle />
                          </InputAdornment>
                        ),
                      }}
                      onChange={(event) => {
                        const newName = event.target.value;
                        setName(newName);
                      }}
                    />
                    <NumberFormat
                      type="tel"
                      format="+7 (###) ### ## ##"
                      size="small"
                      allowEmptyFormatting
                      mask="_"
                      customInput={TextField}
                      fullWidth
                      variant="outlined"
                      label="Номер телефона"
                      onChange={(event) => {
                        const newPhone = event.target.value;
                        setPhone(newPhone);
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">
                            <PhoneIcon />
                          </InputAdornment>
                        ),
                      }}
                    />
                  </div>
                </div>
              );
              setCurrentArea(area);
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
            className="cardsGrid"
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

  function doTransitionShit() {
    setTimeout(() => {
      setTransition(false);
    });
    setTimeout(() => {
      setTransition(true);
    }, 600);
  }
  return (
    <div className="popularPlansSection" id="popularPlans">
      <div className="PopularPlansSectionTitle">ПЛАНИРОВКИ КВАРТИР ЖК МЯТА</div>
      <div className="PopularPlansSectionSubtitle">
        Посмотрите самые популярные планировки квартир
      </div>
      <div className="chooseApartmentButtonLine">
        <Button
          className={buttonClasses[0]}
          size="large"
          variant="outlined"
          onClick={() => {
            doTransitionShit();
            setTimeout(() => updateFilteredArr(filterApartments(0)), 600);
            changeButtonClasses(0);
          }}
        >
          Студии
        </Button>
        <Button
          className={buttonClasses[1]}
          size="large"
          variant="outlined"
          onClick={() => {
            doTransitionShit();
            setTimeout(() => updateFilteredArr(filterApartments(1)), 600);
            changeButtonClasses(1);
          }}
        >
          1-комнатные
        </Button>
        <Button
          className={buttonClasses[2]}
          size="large"
          variant="outlined"
          onClick={() => {
            doTransitionShit();
            setTimeout(() => updateFilteredArr(filterApartments(2)), 600);
            changeButtonClasses(2);
          }}
        >
          2-комнатные
        </Button>
        <Button
          className={buttonClasses[3]}
          size="large"
          variant="outlined"
          onClick={() => {
            doTransitionShit();
            setTimeout(() => updateFilteredArr(filterApartments(3)), 600);
            changeButtonClasses(3);
          }}
        >
          3-комнатные
        </Button>
        <Button
          className={buttonClasses[4]}
          size="large"
          variant="outlined"
          onClick={() => {
            doTransitionShit();
            setTimeout(() => updateFilteredArr(filterApartments("all")), 600);
            changeButtonClasses(4);
          }}
        >
          Все
        </Button>
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
      <MyResponsiveDialog
        open={dialog}
        onClose={() => {
          updateDialog(false);
        }}
        updateUserDataFunc={(phone, name) => {
          setName(name);
          setPhone(phone);
        }}
        updateSnackbarFunc={(open, message, severity) => {
          updateSnackbarMessage(message);
          updateSnackbarOpen(open);
          updateSnackbarSeverity(severity);
        }}
        updateBackdropFunc={(isOpen) => updateBackdrop(isOpen)}
        content={dialogContent}
        title={dialogTitle}
        phone={phone}
        name={name}
        area={currentArea}
        //classes={classes.ApartmentDialog}
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={10000}
        onClose={() => updateSnackbarOpen(false)}
      >
        <Alert
          onClose={() => updateSnackbarOpen(false)}
          severity={snackbarSeverity}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
      <Backdrop className={classes.backdrop} open={backdrop} onClick={() => {}}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}
