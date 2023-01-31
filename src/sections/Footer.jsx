import "../App.css";
import { makeStyles, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  footerNavigation: {
    backgroundColor: "#f4fff6",
    padding: theme.spacing(4),
  },
  bottomFooter: {
    background: "linear-gradient(90deg, #add543 0, #03bab0)",
    color: "white",
  },
  bottomFooterContent: {
    padding: theme.spacing(4),
    textAlign: "center",
  },
  phoneNumber: {
    paddingRight: theme.spacing(7),
    [theme.breakpoints.down("sm")]: {
      paddingRight: theme.spacing(0),
    },
  },
  social: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
      
    },
  },
  socialIcon: {
    color: "white",
    border: "2px solid white",
    borderRadius: 30,
    padding: theme.spacing(1),
    margin: theme.spacing(1),
  },
  menuItem: {
    fontFamily: 'MyriadProSemibold',
    paddingRight: theme.spacing(3),
  },
  footerRights: {
    fontFamily: 'MyriadPro',
  },
  saleOfficeLocation: {
    fontFamily: 'MyriadPro',
  }
}));

export default function Footer() {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <div id="contacts" className={classes.root}>
      <div className={classes.footerNavigation}>
        <Container>
          <Grid
            container
            direction={fullScreenSM ?  'column' : 'row'}
            justify="space-evenly"
            alignItems='center'
          >
            {fullScreenSM ? "" : (<Grid item>
              <Grid
                container
                direction="row"
                justify="space-evenly"
                alignItems="center"
                className={classes.menuItem}
                
              >
                <Grid item>
                  <a href="#yandex-map-anchor"><Typography variant="body2" className={classes.menuItem}>
                    Карта
                    </Typography></a>
                </Grid>
                <Grid item>
                  <a href="#documents"><Typography variant="body2" className={classes.menuItem}>Документы</Typography></a>
                </Grid>
                <Grid item>
                  <a href="#payment"><Typography variant="body2" className={classes.menuItem}>Способы оплаты</Typography></a>
                </Grid>
                <Grid item>
                  <a href="#our_buildings"><Typography variant="body2" className={classes.menuItem}>Наши объекты</Typography></a>
                </Grid>
              </Grid>
            </Grid>)}
          


            <Grid item>
              <Typography variant="body1" align="center" className={classes.saleOfficeLocation} >
              ОТДЕЛ ПРОДАЖ: Новая Адыгея, ул. Бжегокайская, дом 19, корпус 1
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </div>
      <div className={classes.bottomFooter}>
        <Container>
          <Grid
            container
            className={classes.bottomFooterContent}
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Grid item>
                <Typography variant="body1" align="center" className={classes.footerRights}>ООО «СЗ «ГРАДСТРОЙ-КУБАНЬ» 2021</Typography>
                <Typography variant="body1" align="center" className={classes.footerRights}>© Все права защищены</Typography>
            </Grid>
            <Grid item>
              <Grid container direction={fullScreenSM ?  'column' : 'row'}
            justify="space-around"
            alignItems="center"
          >
            <Grid item className={classes.phoneNumber}>
            <Typography variant="h5" align="center" className="phone_number">+7 (928) 272-40-44</Typography>
            </Grid>
            <Grid item className={classes.social}>
              <a
                className={classes.socialIcon}
                href="https://vk.com/jkmyatakrd"
                target="_blank"
              >
                ВКонтакте
              </a>

              {/* <a
                className={classes.socialIcon}
                href="https://www.instagram.com/myata.krd/?igshid=v6uh5v6mxjn2"
                target="_blank"
              >
                Instagram
              </a> */}
            </Grid>
            </Grid>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
