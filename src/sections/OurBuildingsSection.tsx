import React, { useEffect, useState } from "react";
import "../App.css";
import {
  Badge,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Collapse from "@material-ui/core/Collapse";

const customizedTheme = createMuiTheme({
  palette: {
    primary: {
      main: "#add543",
    },
    secondary: {
      main: "#03bab0",
    },
  },
});

const useStyles = makeStyles((theme) => ({
  ourBuildingsAnchor: {
    position: "absolute",
    marginTop: "-140px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-100px",
    },
  },
  ourBuildingsSection: {
   background: "linear-gradient(white, #e8ffdd)",     
   paddingBottom: theme.spacing(7),
  },
  sectionTitle: {
    fontFamily: "MyriadPro",
    letterSpacing: 5,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      letterSpacing: 0,
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(3),
    },
  },
  cardsSection: {
    width: "84%",
    marginLeft: "8%",
  },
  card: {
    margin: theme.spacing(1),
    maxWidth: 250,
    minWidth: 200,
  },
  cardTitle: {
    fontFamily: "MyriadPro",
  },
  cardButton: {
    marginLeft: "auto",
    marginRight: "auto",
    background: "linear-gradient(90deg, #add543 0, #03bab0)",
    color: "white",
    fontFamily: "MyriadPro",
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    "&:hover": {
      background: "linear-gradient(90deg, #03bab0 0, #add543 )",
    },
  },
  showMoreButton: {
    fontFamily: "MyriadPro",
    width: "30%",
    marginLeft: "35%",
    marginTop: theme.spacing(7),
    color: "white",
    background: "linear-gradient(90deg, #add543 0, #03bab0)",
    "&:hover": {
      background: "linear-gradient(90deg, #03bab0 0, #add543 )",
    },
    [theme.breakpoints.down("sm")]: {
      width: "50%",
      marginLeft: "25%",
    },
    [theme.breakpoints.down("xs")]: {
      width: "60%",
      marginLeft: "20%",
    },
  },
  dialogContent: {
    paddingBottom: theme.spacing(4),
  },
  dialogCloseButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  dialogTitle: {
    fontFamily: "MyriadPro",
    marginTop:  theme.spacing(3),
   
  },
  dialogImage: {
    width: "80%",
    marginLeft: "10%",
    borderRadius: 4,
  },
  dialogText: {
    fontFamily: "MyriadPro",
    width: "80%",
    marginLeft: "10%",
    marginTop: theme.spacing(2),
    textAlign: 'justify',
  }

}));

const objectsArr = [
  {
    title: "ЖК Мята",
    text: ``,
    image: "react-project/images/myata.jpg",
    status: "построен",
  },
  {
    title: "ЖК Баланс",
    text: `Жилой комплекс находится в развитом районе, на левом берегу реки Кубань напротив парка 30-летия Победы. Дорога до ул. Красной через Тургеневский мост займет нe более 15 минут нa автомобиле,и вся инфраструктура центра города в Вашем распоряжении. Кроме того, в пешей доступности от жилого комплекса современная школа, детский сад и крупные гипермаркеты.`,
    image: "react-project/images/balance.jpeg",
    status: "построен",
  },
  {
    title: "ЖК Виноград 2",
    text: `ЖК «ВиноградЪ 2» - это монолитно-кирпичные шестиэтажные дома с лифтом класса
    «Комфорт», где
    созданы все условия для уютного семейного проживания. Стоит отметить, что «ВиноградЪ
    2» находится
    в экологически чистом районе за пределами города около реки Кубань. Данный комплекс
    отличается
    качеством строительства и удивительным разнообразием планировок: студии,
    однокомнатные, двухкомнатные
    квартиры и трехкомнатные квартиры.`,
    image: "react-project/images/vinograd2.jpeg",
    status: "построен",
  },
  {
    title: "ЖК Виноград",
    text: `ЖК «ВиноградЪ» - это монолитно-кирпичные трёхэтажные дома класса «Комфорт»,
    где созданы все условия для уютного семейного проживания. Стоит отметить, что
    «ВиноградЪ»
    находится в экологически чистом районе за пределами города около реки Кубань. Данный
    комплекс отличается качеством строительства и удивительным разнообразием планировок:
    студии, однокомнатные и двухкомнатные квартиры, площадью от 20 до 62 кв.м`,
    image: "react-project/images/vinograd1.jpeg",
    status: "построен",
  },
  {
    title: "ЖК Оазис",
    text: ``,
    image: "react-project/images/oasis1.jpeg",
    status: "построен",
  },
  {
    title: "ЖК Оазис 2",
    text: `Квартиры ЖК «Оазис» - это идеальное сочетание цены и качества от компании Альянс
    Вега Билдинг.
    Кирпичные дома с толстыми стенами построены по современным технологиям и отвечают
    всем требованиям качества.
    Наши клиенты получили квартиры с предчистовой отделкой, идеально ровными стенами,
    что позволило сразу приступить
    к ремонту жилья. Все дома построены и сданы в срок.`,
    image: "react-project/images/oasis2.jpeg",
    status: "построен",
  },
  {
    title: "Congress Hotel",
    text: `Hotel Congress Krasnodar находится на пересечении улиц Аэродромная и Гаврилова и
    представляет собой 6-этажное здание площадью 6000 кв.м.
    Это современный отель, который включает в себя 76 номеров различных категорий,
    тренажерный зал, 2 оборудованных конференц-зала и комнату переговоров.
    На территории отеля также располагаются ресторан и СПА-салон, включающий в себя 6
    студий массажа, 3 бассейна и множество других комнат для расслабления.
    Здание оборудовано всеми системами коммуникации: электро-, тепло- и водоснабжения,
    вентиляционными системами, внешними и внутренними сетями связи и т.д. 
    Объект сдан в эксплуатацию в начале 2018 года.`,
    image: "react-project/images/hotel.jpg",
    status: "построен",
  },
  {
    title: "Бизнес центр",
    text: `Бизнес-центр "Вега", площадь которого составляет 6000 кв.м, был построен и
    успешно введен в эксплуатацию в 2009 году. В здании находятся торговые и офисные
    помещения, оборудованные системами тепло-, водо- и электроснабжения.`,
    image: "react-project/images/vega_centre.jpg",
    status: "построен",
  },
  /* {
    title: "Детский сад 1",
    text: ``,
    image: "react-project/images/kindergarten1.jpg",
    status: "построен",
  },
  {
    title: "Детский сад 2",
    text: ``,
    image: "react-project/images/kindergarten2.jpg",
    status: "построен",
  }, */
];
export default function OurBuildings(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreenMD = useMediaQuery(theme.breakpoints.down("md"));
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));
  const fullScreenXS = useMediaQuery(theme.breakpoints.down("xs"));

  const [dialogOpen, setDialogOpen] = React.useState(false);
  const [dialogTitle, setDialogTitle] = React.useState("");
  const [dialogContentText, setDialogContentText] = React.useState("");
  const [dialogDevObjStatus, setDialogDevObjStatus] = React.useState("");
  const [dialogImage, setDialogImage] = React.useState("");

  const [transition, setTransition] = React.useState(false);

  const [showAll, setShowAll] = React.useState<"nothing" | "all" | "firstFour">(
    "nothing"
  );

  useEffect(() => {
    setTimeout(() => {
      setShowAll("firstFour");
      setTransition(true);
    }, 200);
  }, []);
  const firstObjects = 
  fullScreenXS ? objectsArr.slice(0, 2) 
  : fullScreenSM ? objectsArr.slice(0, 4)  
  : fullScreenMD ? objectsArr.slice(0, 6)
  : objectsArr.slice(0, 4);
  const restObjects = fullScreenSM
    ? objectsArr.slice(3, objectsArr.length)
    : objectsArr.slice(4, objectsArr.length);

  // описываем типовую карточку объекта
  function MyObjectCard(props: {
    title: string;
    text: string;
    status: string;
    image: string;
  }) {
    return (
      <Grid item className={classes.card}>
        <ThemeProvider theme={customizedTheme}>
          <Badge
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            badgeContent={props.status}
            color={props.status === "построен" ? "primary" : "secondary"}
          >
            <Card>
              <CardActionArea
                onClick={() => {
                  setDialogOpen(true);
                  setDialogTitle(props.title);
                  setDialogContentText(props.text);
                  setDialogDevObjStatus(props.status);
                  setDialogImage(props.image);
                }}
              >
                <CardMedia
                  image={props.image}
                  component="img"
                  alt={props.title}
                  height="180"
                  title={props.title}
                />
                <CardContent>
                  <Typography
                    align="center"
                    variant="h6"
                    component="h2"
                    className={classes.cardTitle}
                  >
                    {props.title}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Grid
                  container
                  direction="row"
                  justify="center"
                  alignItems="center"
                >
                  <Button
                    onClick={() => {
                      setDialogOpen(true);
                      setDialogTitle(props.title);
                      setDialogContentText(props.text);
                      setDialogDevObjStatus(props.status);
                      setDialogImage(props.image);
                    }}
                    className={classes.cardButton}
                    variant="text"
                    size="medium"
                    color="primary"
                  >
                    Подробнее
                  </Button>
                </Grid>
              </CardActions>
            </Card>
          </Badge>
        </ThemeProvider>
      </Grid>
    );
  }
  return (
    <div className={classes.ourBuildingsSection}>
      <div className={classes.ourBuildingsAnchor} id="our_buildings"></div>
      <Typography
        className={classes.sectionTitle}
        align="center"
        variant={fullScreenSM ? "h4" : "h3"}
      >
        НАШИ ОБЪЕКТЫ
      </Typography>
      <Dialog
        fullScreen={fullScreenXS}
        open={dialogOpen}
        fullWidth
        maxWidth="md"
        onClose={() => {
          setDialogOpen(false);
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title" >
          <Typography align="center" variant="h4" className={classes.dialogTitle}>
            {dialogTitle}
          </Typography>
          <IconButton
            aria-label="close"
            className={classes.dialogCloseButton}
            onClick={() => {
              setDialogOpen(false);
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>

        {/* <Typography align="center">{"Текущий статус: " + dialogDevObjStatus}</Typography> */}

        <DialogContent className={classes.dialogContent}>
          <img
            id={dialogImage + "-id"}
            className={classes.dialogImage}
            src={dialogImage}
          />

          <DialogContentText className={classes.dialogText}>{dialogContentText}</DialogContentText>
        </DialogContent>
      </Dialog>

      <Collapse
        in={transition}
        timeout={600}
        mountOnEnter
        unmountOnExit
      >
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={2}
          className={classes.cardsSection}
        >
          {showAll === "firstFour"
            ? firstObjects.map((elem) => (
                <MyObjectCard
                  title={elem.title}
                  image={elem.image}
                  text={elem.text}
                  status={elem.status}
                />
              ))
            : objectsArr.map((elem) => (
                <MyObjectCard
                  title={elem.title}
                  image={elem.image}
                  text={elem.text}
                  status={elem.status}
                />
              ))}
        </Grid>
      </Collapse>

      <Button
        size="large"
        className={classes.showMoreButton}
        onClick={() => {
          // здесь дважды устанавливаем значение для того, чтобы успела сработать анимация
          setTransition(false);

          if (showAll === "nothing" || showAll === "firstFour") {
            setTimeout(() => {
              setShowAll("all");
              setTransition(true);
            }, 400);
          } else {
            setTimeout(() => {
              setShowAll("firstFour");
              setTransition(true);
            }, 400);
          }
        }}
      >
        {showAll === "nothing" || showAll === "firstFour"
          ? "Показать больше"
          : "Показать меньше"}
      </Button>
    </div>
  );
}
