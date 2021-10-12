import React, { useEffect, useState } from "react";
import "../App.css";
import {
  Container,
  Grid,
  makeStyles,
  Typography,
  useTheme,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Grow from "@material-ui/core/Grow";
import Button from "@material-ui/core/Button";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import FormOnly from "../components/justForm";

const useStyles = makeStyles((theme) => ({
  paymentSection: {
    backgroundImage: "url(react-project/images/course_bg2.png)",
    paddingBottom: theme.spacing(5),
  },
  content: {},
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
  buttonsGroup: {
    marginBottom: theme.spacing(5),
  },
  methodButton: {
    color: "#03bab0",
    borderColor: "#03bab0",
    fontFamily: "MyriadPro",
    backgroundColor: "white",
    
    "&:hover": {
      color: "#03bab0",
      borderColor: "#03bab0",
      backgroundColor: "#f7fdfd",
    },
  },
  selectedMethodButton: {
    background: "#03bab0",
    borderColor: "#03bab0",
    fontFamily: "MyriadPro",
    color: "white",
    "&:hover": {
      background: "#03bab0",
      borderColor: "#03bab0",
      color: "white",
    },
  },
  methodTitle: {
    marginTop: theme.spacing(4),
    marginBottom: theme.spacing(3),
  },
  text: {
    width: "76%",
    paddingLeft: "12%",
    fontFamily: "MyriadPro",
    [theme.breakpoints.down("md")]: {
      width: "90%",
      paddingLeft: "5%",
    },
  },
  form: {
    padding: theme.spacing(4),
    display: "flex",
    flexDirection: "row",
    justify: "space-around",
    alignItems: "center",
    marginTop: theme.spacing(1),
    [theme.breakpoints.down("md")]: {
      paddingLeft: theme.spacing(1),
      paddingRight: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  formTitle: {
    fontFamily: "MyriadPro",
    [theme.breakpoints.down("md")]: {
      fontSize: 16
    },
  },
  formSubtitle: {
    color: "#03bab0",
    fontFamily: "MyriadProSemibold",
    [theme.breakpoints.down("md")]: {
      fontSize: 14
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
    "&:hover": {
      background: "linear-gradient(90deg, #03bab0 0, #add543 )",
    },
  },
  paymentAnchor: {
    position: "absolute",
    marginTop: "-140px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-100px",
    },
  },
  [theme.breakpoints.down("sm")]: {
    marginTop: "-100px",
  },
}));

const methodsArr = [
  /* {
    title: "100% оплата",
    text: `Самая лучшая форма оплаты евар.`,
  }, */
  {
    title: "Ипотека",
    text: `СЗ ООО "Градстрой-Кубань" сотрудничает с ведущими российскими банками и активно развивает партнерскую сеть. Объекты компании пользуются доверием крупнейших банков, в которых Вы можете выбрать для себя наиболее подходящую программу ипотечного кредитования. Сотрудники Отдела ипотечных брокеров нашей компании будут рады помочь Вам выбрать и оформить ипотечный кредит на самых оптимальных условиях.`,
  },
  {
    title: "Mатеринский капитал",
    text: `Приобретая жилье в ЖК Мята Вы также имеете возможность оформить первоначальный взнос используя Сертификат на Материнский капитал. Компания СЗ ООО "Градстрой-Кубань" всегда идет навстречу своим покупателям, использует персональный подход к каждому клиенту и помогает решить все вопросы, связанные с приобретением жилья.`,
  },
  {
    title: "Рассрочка от застройщика",
    text: `Своим клиентам компания СЗ ООО "Градстрой-Кубань" предоставляет возможность вносить платежи по частям. Рассрочка - довольно простой и удобный способ оплаты, не требующий больших временных затрат и затруднений в документальной части. Все вопросы, касающиеся оформления рассрочки, обсуждаются с Вами специалистами СЗ ООО "Градстрой-Кубань" и решаются прямо в офисе компании.`,
  },
];

export default function PaymentMethodsSection(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));

  const [title, setTitle] = React.useState("");
  const [text, setText] = React.useState("");

  const [transition, setTransition] = React.useState(false);

  const [selected, setSelected] = React.useState(1);

  // делаем так, чтобы что-то показывалось при первом рендере
  useEffect(() => {
    setTitle(methodsArr[1].title);
    setText(methodsArr[1].text);
    setSelected(1);
  }, []);

  return (
    <div className={classes.paymentSection}>
      <div className={classes.paymentAnchor} id="payment"></div>
      <Container className={classes.content}>
        <Typography
          className={classes.sectionTitle}
          align="center"
          variant={fullScreenSM ? "h4" : "h3"}
        >
          CПОСОБЫ ОПЛАТЫ
        </Typography>

        <Grid container direction="column" justify="center" alignItems="center">
          <Grid item>
            <ButtonGroup
              orientation={fullScreenSM ? "vertical" : "horizontal"}
              className={classes.buttonsGroup}
              size="large"
              color="primary"
              aria-label="large outlined primary button group"
            >
              {methodsArr.map((elem, index) => (
                <Button
                  className={
                    selected === index
                      ? classes.selectedMethodButton
                      : classes.methodButton
                  }
                  onClick={() => {
                    setSelected(index);

                    // здесь дважды устанавливаем значение для того, чтобы успела сработать анимация
                    setTransition(true);
                    setTimeout(() => {
                      setTitle(elem.title);
                      setText(elem.text);
                      setTransition(false);
                    }, 400);
                  }}
                >
                  {elem.title}
                </Button>
              ))}
            </ButtonGroup>
          </Grid>

          <Grid item>
            <Grow in={!transition} timeout={400} mountOnEnter unmountOnExit>
              <Typography className={classes.text} align="justify" variant="body1">{text}</Typography>
            </Grow>
          </Grid>

          <Grid item>
            <FormOnly
              rootClassName={classes.form}
              title={
                title === "Ипотека"
                  ? "УЗНАЙТЕ БОЛЬШЕ ОБ ИПОТЕКЕ"
                  : "ЗАКАЖИТЕ ОБРАТНЫЙ ЗВОНОК"
              }
              subtitle={
                title === "Ипотека"
                  ? "Получите консультацию кредитного специалиста"
                  : "Перезвоним в течение 5 минут!"
              }
              titleClassName={classes.formTitle}
              subtitleClassName={classes.formSubtitle}
              nameClassName={classes.formName}
              phoneClassName={classes.formPhone}
              buttonClassName={classes.formButton}
            />
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
