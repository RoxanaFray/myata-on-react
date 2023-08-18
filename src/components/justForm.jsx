import React, { useEffect } from "react";
import "../App.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import AccountCircle from "@material-ui/icons/AccountCircle";
import PhoneIcon from "@material-ui/icons/Phone";
import Snackbar from "@material-ui/core/Snackbar";
import Alert from "@material-ui/lab/Alert";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Container from "@material-ui/core/Container";
import { useTheme } from "@material-ui/core/styles";
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/core/styles';
import NumberFormat from "react-number-format";
import { Typography } from "@material-ui/core";

export default function FormOnly(props) {
  const customizedTheme = createMuiTheme({
    palette: {
      primary: {
        main: '#03bab0',
      },
      secondary: {
        main: '#add543',
      },
    },
  });
  const useStyles = makeStyles((theme) => ({
    root: {
      backgroundColor: props.color ? props.color : "white",
      borderRadius: 10,
    },
    chooseApartmentButton: {
      color: "#03bab0",
      borderColor: "#03bab0",
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1),
      background: "white",
    },
    clickedChooseApartmentButton: {
      color: "#ffffff",
      background: "#03bab0",
      borderColor: "#ffffff",
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
      backgroundColor: "#f8f8f8",
    },
  }));
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
      <Container className={classes.root}>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="stretch"
          className={props.rootClassName}
          spacing={3}
        >
          <Grid item>
            <Typography className={props.titleClassName} variant="h5">
              {props.title}
            </Typography>
            <Typography className={props.subtitleClassName} variant="h6">
              {props.subtitle}
            </Typography>
          </Grid>

          <ThemeProvider theme={customizedTheme}>
          <TextField
            className={props.nameClassName}
            size="small"
            label="Имя"
            variant="outlined"
            color="primary"
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <AccountCircle  />
                </InputAdornment>
              ),
            }}
            onChange={(event) => {
              event.preventDefault();
              const newName = event.target.value;
              setName(newName);
            }}
          />
          </ThemeProvider>
          <ThemeProvider theme={customizedTheme}>
          <NumberFormat
            className={props.phoneClassName}
            type="tel"
            color='primary'
            format="+7 (###) ### ## ##"
            size="small"
            allowEmptyFormatting
            mask="_"
            customInput={TextField}
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
          
          </ThemeProvider>
          <Button
            size="normal"
            className={props.buttonClassName}
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
                updateSnackbarMessage("Некорректно введен номер телефона");
                updateSnackbarOpen(true);
                updateSnackbarSeverity("warning");
                updateBackdrop(false);
                return;
              }

              let data = {
                phone: phone,
                name: name,
              };

              if (props.selectedApartment) {
                data.area = props.selectedApartment.area;
                data.floor = props.selectedApartment.floor;
                data.liter = props.selectedApartment.liter;
              }

              fetch("https://icipih3rjertgwnh7wgsyz2lby0azutc.lambda-url.ap-northeast-1.on.aws/", {
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
      </Container>
    </>
  );
}
