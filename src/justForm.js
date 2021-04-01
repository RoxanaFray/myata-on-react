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
import Container from "@material-ui/core/Container";

import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

import NumberFormat from "react-number-format";
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
    backgroundColor: "#f8f8f8",
  },
}));

export default function FormOnly(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const classes = useStyles();

  // данные из полей ввода
  const [name, setName] = React.useState("");
  const [phone, setPhone] = React.useState("");

  // state для snackbar
  const [snackbarMessage, updateSnackbarMessage] = React.useState("");
  const [snackbarSeverity, updateSnackbarSeverity] = React.useState("success");
  const [snackbarOpen, updateSnackbarOpen] = React.useState(false);

  // state для backdrop
  const [backdrop, updateBackdrop] = React.useState(false);

  return (
    <>
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
      <Container>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
          className={props.class}
          spacing={3}
        >
          <Grid item>
            <div>{props.title}</div>
            <div>{props.subtitle}</div>
          </Grid>

          <Grid item>
            <Grid
              container
              justify="space-evenly"
              alignItems="stretch"
              spacing={3}
            >
              <Grid item>
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
                    event.preventDefault();
                    const newName = event.target.value;
                    setName(newName);
                  }}
                />
              </Grid>

              <Grid item>
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
                    event.preventDefault();
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
              </Grid>

              <Grid item>
                <Button
                  size="normal"
                  className="GradientButton"
                  onClick={() => {
                    updateBackdrop(true);
                    // проверка полей
                    if (name == "" || phone == "") {
                      updateSnackbarMessage("Необходимо заполнить оба поля");
                      updateSnackbarOpen(true);
                      updateSnackbarSeverity("warning");
                      updateBackdrop(false);
                      return;
                    }
                    // проверка телефона
                    if (phone.includes("_")) {
                      updateSnackbarMessage(
                        "Некорректно введен номер телефона"
                      );
                      updateSnackbarOpen(true);
                      updateSnackbarSeverity("warning");
                      updateBackdrop(false);
                      return;
                    }

                    let data = {
                      phone: phone,
                      name: name,
                      title: "Форма обратной связи. Сайт жкмята.рф",
                    };

                    if (props.selectedApartment) {
                      data.area = props.selectedApartment.area;
                      data.floor = props.selectedApartment.floor;
                      data.liter = props.selectedApartment.liter;
                    }

                    fetch("/submit/submit-for-react.php", {
                      method: "POST",
                      body: JSON.stringify(data),
                      headers: {
                        "Content-Type": "application/json",
                        // 'Content-Type': 'application/x-www-form-urlencoded',
                      },
                    }).then((res) => {
                      //console.log("Request complete! response:", res);
                      if (res.status === 200) {
                        // закрытие диалога
                        // очистка полей
                        setName("");
                        setPhone("");
                        // сообщение об успешной отправке
                        updateSnackbarMessage("Данные успешно отправлены!");
                        updateSnackbarOpen(true);
                        updateSnackbarSeverity("success");
                        

                        setTimeout(() => {
                          eval(
                            `
                            ym(71943988,'reachGoal','SEND');
                            gtag('event','target',{'event_category':'FORM','event_action':'SEND',});
                            fbq('track', 'Lead');
                          
                            `
                          );
                        }, 2000);
                        
                      } else {
                        // сообщение об успешной отправке
                        updateSnackbarMessage(
                          "Произошла ошибка. Попробуйте ещё раз."
                        );
                        updateSnackbarOpen(true);
                        updateSnackbarSeverity("error");
                      }
                      updateBackdrop(false);
                    });
                  }}
                >
                  Отправить
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
