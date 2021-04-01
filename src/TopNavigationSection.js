import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Divider from "@material-ui/core/Divider";
import SwipeableTemporaryDrawer from "./LeftDrawer";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import CloseIcon from "@material-ui/icons/Close";
import DialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import { useTheme } from "@material-ui/core/styles";

import FormOnly from "./justForm";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  dialogContent: {
    marginBottom: 30,
    overflow: 'hidden'
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
}));

export default function TopNavigation() {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <div className={classes.root}>
      {/*Верхнее меню в десктопной версии */}
      <AppBar position="fixed" className="MenuDesktop">
        <Container>
          <Toolbar>
            {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu" >
            <MenuIcon />
          </IconButton>
 */}
            <Grid
              container
              className="MenuContent"
              justify="space-evenly"
              alignItems="center"
            >
              <Grid item xs={3}>
                <img src="react-project/images/Logo.svg" width="200px"></img>
              </Grid>

              <Grid item xs={4}>
                <Grid container className="MenuItems" justify="space-between">
                  <Grid item xs={4}>
                    <a href="#popularPlans">Планировки</a>
                  </Grid>

                  <Grid item xs={4}>
                    <a href="#constr_course">Галерея</a>
                  </Grid>

                  <Grid item xs={4}>
                    <a href="#contacts">Контакты</a>
                  </Grid>
                </Grid>
              </Grid>

              <Grid item xs={3}>
                <Button
                  onClick={() => setDialogOpen(true)}
                  className="GradientButton MenuButton"
                  size="large"
                >
                  <span class="menuButtonText"></span>
                </Button>
              </Grid>

              <Grid item xs={2} className="companyPhoneNumber">
                <a href="tel:8 (861) 298-21-33">8 (861) 298-21-33</a>
              </Grid>
            </Grid>
          </Toolbar>
        </Container>
      </AppBar>

      {/*Верхнее меню в узкой версии */}
      <AppBar position="fixed" className="MenuMobile">
        <Toolbar>
          <Grid
            container
            className="MenuContent"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <img src="react-project/images/Logo.svg" width="200px"></img>
            </Grid>
            <Grid item>
              <Button
                onClick={() => setDialogOpen(true)}
                className="GradientButton MenuButton"
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
              <IconButton
                edge="end"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <SwipeableTemporaryDrawer />
            </Grid>
            <Grid item className="companyPhoneNumber">
              <a href="tel:8 (861) 298-21-33">8 (861) 298-21-33</a>
            </Grid>
          </Grid>
        </Container>

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
          <MuiDialogTitle disableTypography  id="simple-dialog-title">
              
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
        <Container>
          <DialogContent className={classes.dialogContent}>
            <FormOnly class="VerticalCallBackForm" title="ПОЛУЧИТЕ КОНСУЛЬТАЦИЮ" subtitle="" />
          </DialogContent>
          </Container>
          </Container>
        </Dialog>
      </AppBar>
    </div>
  );
}
