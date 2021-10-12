import "../App.css";
import FormOnly from "../components/justForm";
import Grid from "@material-ui/core/Grid";
import {makeStyles} from "@material-ui/core";
import Typography from '@material-ui/core/Typography';
import { useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";


export default function IkeaPark() {
  const theme = useTheme();
  const fullScreenMD = useMediaQuery(theme.breakpoints.down("md"));
  

  const useStyles = makeStyles((theme) => ({

parkSectionСontent: {
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(7),
  backgroundImage: "url(react-project/images/parkBackground.jpg)",
},
textContent: {
  backgroundColor: 'white',
  padding: theme.spacing(5),
  borderRadius: 10,
  fontFamily: 'MyriadPro',
  color: 'black',
  maxWidth: 600,
  fontSize: 20,
  lineHeight: 1.5,
  letterSpacing: 1,
},
textTitle: {
  fontFamily: 'MyriadPro',
  letterSpacing: 3,
  color: '#add543',
  lineHeight: 1,
  [theme.breakpoints.down("xs")]: {
    fontSize: 50,
    letterSpacing: 1
  },
},
textSubtitle: {
  letterSpacing: 5,
  color: '#03bab0',
  lineHeight: 1,
  paddingBottom: theme.spacing(3),
  [theme.breakpoints.down("xs")]: {
    fontSize: 25,
    letterSpacing: 1
  },
},
text: {
  fontFamily: "MyriadPro"
},
form: {
  backgroundColor: 'white',
  maxWidth: 450,
  padding: theme.spacing(2),
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  [theme.breakpoints.down("md")]: {
    display: "none",
  }
},
  formTitle: {
  },
  formSubtitle: {
    fontFamily: "MyriadPro",
    letterSpacing: 3
  },
  formName: {
    marginTop: theme.spacing(1),
    width: "90%"
  },
  formPhone: {
    marginTop: theme.spacing(2),
    width: "90%"
  },
  formButton: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
    fontFamily: 'MyriadPro',
    color: 'white',
    background: 'linear-gradient(90deg, #add543 0, #03bab0)',
    paddingLeft: theme.spacing(3),
    paddingRight: theme.spacing(3),
    "&:hover": {
      background:  'linear-gradient(90deg, #03bab0 0, #add543 )'
    },
  },
  }));


  const classes = useStyles();


  return (
    <div>
      <Grid
        container
        justify={fullScreenMD ? "center" : "space-evenly"}    
        alignItems="center"
        className={classes.parkSectionСontent}
      >
        <Grid item className={classes.textContent} >
          <Typography variant="h1" className={classes.textTitle}>ПАРК</Typography>
          <Typography variant="h4" className={classes.textSubtitle}> ПО СОСЕДСТВУ</Typography>
          <Typography variant="h6" className={classes.text} align='justify'>
            Представьте себе торговый центр нового поколения с ресторанами на
            открытом воздухе, уникальный живописный оазис, где можно
            расслабиться на берегу чистейшего озера, а после этого пройтись по
            любимым магазинам. Место, идеальное для того, чтобы провести здесь
            целый день с семьей или друзьями, забыв о повседневных делах. Место,
            где каждого гостя переполняют яркие впечатления и каждый может найти
            себе занятие по своим интересам.
          </Typography>
        </Grid>
        <Grid item >
        <FormOnly
                  rootClassName={classes.form}
                  titleClassName={classes.formTitle}
                  subtitleClassName={classes.formSubtitle}
                  nameClassName={classes.formName}
                  phoneClassName={classes.formPhone}
                  buttonClassName={classes.formButton}
                  title=""
                  subtitle="ЗАПИШИТЕСЬ НА ПРОСМОТР"
                />
        </Grid>
      </Grid>
    </div>
  );
}
