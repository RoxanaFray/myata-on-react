import React from "react";
import "../App.css";
import { makeStyles } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import ExpandMoreOutlinedIcon from "@material-ui/icons/ExpandMoreOutlined";
import ExpandLessOutlinedIcon from "@material-ui/icons/ExpandLessOutlined";
import Grid from "@material-ui/core/Grid";
import { useTheme } from "@material-ui/core/styles";
import Collapse from "@material-ui/core/Collapse";
import useMediaQuery from "@material-ui/core/useMediaQuery";


const useStyles = makeStyles((theme) => ({
  title: {
    fontFamily: "MyriadPro",
    letterSpacing: 5,
    paddingTop: theme.spacing(10),
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      letterSpacing: 0,
      paddingTop: theme.spacing(5),
    },
  },
  text: {
    width: "75%",
    backgroundColor: "#ffffff",
    border: "3px solid #d1efec",
    borderRadius: 10,
    padding: theme.spacing(4),
    marginLeft: "auto",
    marginRight: "auto",
    marginBottom: theme.spacing(5),
    fontFamily: "MyriadPro",
    textIndent: theme.spacing(4),
    textAlign: 'justify',
    [theme.breakpoints.down("xs")]: {
      padding: theme.spacing(3),
    },
  },
  cardsSection: {
    width: '84%',
    marginLeft: '8%',
    paddingBottom: theme.spacing(5),
    [theme.breakpoints.down("sm")]: {
      paddingBottom: theme.spacing(2),
    },
  },
  card: {
    padding: theme.spacing(2),
    minWidth: 250,
    maxWidth: 300,
  },
  cardTitle: {
    fontFamily: "MyriadPro",
  },
  cardText: {
    fontFamily: "MyriadPro",
    paddingTop: theme.spacing(1),
  },
  button: {
    marginLeft: "auto",
    marginRight: "auto",
    background: "linear-gradient(90deg, #add543 0, #03bab0)",
    color: "white",
    "&:hover": {
      background: "linear-gradient(90deg, #03bab0 0, #add543 )",
    },
  },
}));

const cards = [
  {
    image: "/react-project/images/11centre.jpg",
    title: "ЦЕНТР",
    description: "Самая насыщенная и богатая событиями часть Краснодара!",
    time: "/react-project/images/15mins.png",
  },
  {
    image: "/react-project/images/infrastructure2.jpg",
    title: "ТЦ «МЕГА»",
    description:
      "Один из самых популярных и полюбившихся торгово-развлекательных центров юга.",
    time: "/react-project/images/15mins.png",
  },
  {
    image: "/react-project/images/ikeapark2.jpg",
    title: "ПАРК",
    description:
      "Невероятное место, идеально подходящее для встреч, досуга и развлечений.",
    time: "/react-project/images/5mins.png",
  },
  {
    image: "/react-project/images/magnit.png",
    title: "МАГНИТ",
    description:
      "Одна из самых обширных торгово-розничных сетей края, где можно приобрести всё необходимое.",
    time: "/react-project/images/5mins.png",
  },
  {
    image: "/react-project/images/bzhegokay.png",
    title: "ОЗЕРО",
    description:
      "Пикники и отдых на природе рядом с живописным озером Бжегокай прямо у дома.",
    time: "/react-project/images/5mins.png",
  },
  {
    image: "/react-project/images/metro.jpg",
    title: "ТЦ «МЕТРО»",
    description: "Крупнейший магазин оптово-розничной торговли в городе.",
    time: "/react-project/images/5mins.png",
  },
  {
    image: "/react-project/images/kindergarten.png",
    title: "ДЕТСКИЙ САД",
    description: "Несколько детских садов в районе на выбор",
    time: "/react-project/images/15mins.png",
  },
  {
    image: "/react-project/images/school.png",
    title: "ШКОЛА",
    description:
      "Одна из наиболее выдающихся и современнейших школ Новой Адыгеи.",
    time: "/react-project/images/5mins.png",
  },
];

export default function MyataInfrastructure(props) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [clickedCard, setClickedCard] = React.useState(null);

  return (
    <>
      <Container>
        <Typography
          align="center"
          variant={fullScreenSM ? "h4" : "h3"}
          className={classes.title}
        >
          ИНФРАСТРУКТУРА
        </Typography>
        <Typography className={classes.text} variant="body1">
          ЖК "Мята" находится в сердце одного из самых благоприятных для жизни
          районов Новой Адыгеи. Местоположение позволяет жителям получить все
          удобства развитой социальной, торговой и транспортной инфраструктуры и
          в то же время оставаться вдали от шума, промышленных предприятий и
          загазованности. При этом дорога до центра г. Краснодар занимает всего
          15 минут. Двухуровневая транспортная развязка обеспечивает возможность
          быстро выехать в любом из необходимых направлений, используя личный
          автомобиль. Помимо этого, поблизости от жилого комплекса функционирует
          остановка общественного транспорта с более чем 20 маршрутами.
        </Typography>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          className={classes.cardsSection}
        >
          {cards.map((elem, index) => (
            <Grid
              justify="center"
              alignItems="center"
              item
              md={3}
              sm={6}
              className={classes.card}
            >
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt={elem.title}
                    height="180"
                    image={elem.image}
                    title={elem.title}
                  />
                  <CardContent>
                    <Typography variant="h6" component="h6" align="center" className={classes.cardTitle}>
                      {elem.title}
                    </Typography>

                    <Collapse
                      in={clickedCard === index}
                      mountOnEnter
                      unmountOnExit
                    >
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                        align="center"
                        className={classes.cardText}
                      >
                        {elem.description}
                      </Typography>
                    </Collapse>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <Button
                    onClick={() => {
                      if (clickedCard === index) {
                        setClickedCard(null);
                      } else {
                        setClickedCard(index);
                      }
                    }}
                    className={classes.button}
                    aria-label="Подробнее"
                  >
                    {clickedCard === index && <ExpandLessOutlinedIcon />}
                    {!(clickedCard === index) && <ExpandMoreOutlinedIcon />}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
}
