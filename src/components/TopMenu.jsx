import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import SwipeableTemporaryDrawer from "./LeftDrawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CloseIcon from "@material-ui/icons/Close";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { useTheme } from "@material-ui/core/styles";
import FormOnly from "./justForm";

const useStyles = makeStyles((theme) => ({
  menu: {
    backgroundColor: "white",
    fontFamily: "MyriadProSemibold",
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    height: 140,
    color: "black",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
  },
  menuItem: {
    cursor: "pointer",
  },
  companyPhoneNumber: {
    fontSize: 20,
    [theme.breakpoints.down("md")]: {
      fontSize: 18,
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: 16,
    },
  },
  menuButton: {
    background: "linear-gradient(90deg, #add543 0, #03bab0)",
    color: "white",
    fontFamily: "MyriadPro",

    "&:hover": {
      background:  'linear-gradient(90deg, #03bab0 0, #add543 )'
    },
  },
  menuButtonText: {
    fontSize: 12,
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    paddingTop: 1,
    paddingBottom: 1,
  },
  mobileMenu: {
    display: "none",
    backgroundColor: "white",
    fontFamily: "MyriadProSemibold",
    paddingTop: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      display: "block",
    },
  },
  mobileMenuLogo: {
    width: 200,
    [theme.breakpoints.down("sm")]: {
      width: 150,
    },
    [theme.breakpoints.down("xs")]: {
      width: 100,
    },
  },
  dialogContent: {
    marginBottom: theme.spacing(4),
    overflow: "hidden",
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  formTitle: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(3),
    fontFamily: "MyriadPro",
    color: "black",
    textAlign: 'center'
  },
  formName: {
    marginBottom: theme.spacing(3),
    width: "100%",
  },
  formPhone: {
    marginBottom: theme.spacing(4),
    width: "100%",
  },
  formButton: {
    marginBottom: theme.spacing(2),
    fontFamily: "MyriadPro",
    color: "white",
    background: "linear-gradient(90deg, #add543 0, #03bab0)",
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    "&:hover": {
      background: "linear-gradient(90deg, #03bab0 0, #add543 )",
    },
  },
}));

export default function TopNavigation() {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreenMD = useMediaQuery(theme.breakpoints.down("md"));
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      {/*Верхнее меню в десктопной версии */}
      <AppBar position="fixed" className={classes.menu}>
        <Container>
          <Toolbar>
            <Grid container justify="space-evenly" alignItems="center">
              <Grid item xs={3}>
                <a href="https://xn--80almi4a7e.xn--p1ai/">
                  <img src="react-project/images/Logo.svg" width="200px"></img>
                </a>
              </Grid>

              <Grid item xs={4}>
                <Grid container justify="space-between">
                  <Grid item xs={4}>
                    <a href="#popularPlans" className={classes.menuItem}>
                      Планировки
                    </a>
                  </Grid>

                  <Grid item xs={4}>
                    <a href="#gallery" className={classes.menuItem}>
                      Галерея
                    </a>
                  </Grid>

                  <Grid item xs={4}>
                    <a href="#contacts" className={classes.menuItem}>
                      Контакты
                    </a>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item sm={3} xs={2}>
                <Button
                  onClick={() => setDialogOpen(true)}
                  className={classes.menuButton}
                  size="large"
                >
                  <Typography variant="body2" className={classes.menuButtonText}>
                    {fullScreenMD ? "Консультация" : "Получить консультацию"}
                  </Typography>
                </Button>
              </Grid>

              <Grid item xs={2} >
                <a href="tel:8 (861) 298-21-33" className={classes.companyPhoneNumber}>8 (861) 298-21-33</a>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      {/*Верхнее меню в мобильной версии */}
      <AppBar position="fixed" className={classes.mobileMenu}>
        <Toolbar>
          <Grid
            container
            className={classes.menuContent}
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <a href="https://xn--80almi4a7e.xn--p1ai/">
                <img
                  src="react-project/images/Logo.svg"
                  className={classes.mobileMenuLogo}
                ></img>
              </a>
            </Grid>
            <Grid item>
              <Button
                onClick={() => setDialogOpen(true)}
                className={classes.menuButton}
              >
                Консультация
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
        <Divider />
        <Container>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <SwipeableTemporaryDrawer />
            </Grid>
            <Grid item className={classes.companyPhoneNumber}>
              <a href="tel:8 (861) 298-21-33">8 (861) 298-21-33</a>
            </Grid>
          </Grid>
        </Container>

        {/* Модальное окно для консультации */}
        <Dialog
          fullScreen={false}
          open={dialogOpen}
          className={classes.dialog}
          maxWidth="sm"
          fullWidth={false}
          onClose={() => {
            setDialogOpen(false);
          }}
          aria-labelledby="responsive-dialog-title"
        >
          <MuiDialogTitle disableTypography id="simple-dialog-title">
            <IconButton
              aria-label="close"
              alignItems="left"
              className={classes.closeButton}
              onClick={() => setDialogOpen(false)}
            >
              <CloseIcon />
            </IconButton>
          </MuiDialogTitle>

          <Container>
            <DialogContent className={classes.dialogContent}>
              <FormOnly
                rootClassName={classes.form}
                titleClassName={classes.formTitle}
                subtitleClassName={classes.formSubtitle}
                nameClassName={classes.formName}
                phoneClassName={classes.formPhone}
                buttonClassName={classes.formButton}
                title="ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ"
                subtitle=""
              />
            </DialogContent>
          </Container>
        </Dialog>
      </AppBar>
    </div>
  );
}
