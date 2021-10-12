import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


const useStyles = makeStyles({
  root: {},
  mediaContainer: {
    height: "auto",
  },
  cardTitle: {
    paddingTop: 20,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBotom: 0,
    height: 65,
    fontFamily: 'MyriadPro'
  },
  cardShortInfo: {
    color: "#03bab0",
    paddingTop: 10,
    fontSize: 18,
  },
  media: {
    backgroundSize: "contain",
    minHeight: 300,
  },
  buttonLine: {
    justifyContent: "center",
    marginTop: 15,
    marginBottom: 15,
  },
  cardButton: {
    fontFamily: 'MyriadPro',
      color: 'white',
      background: 'linear-gradient(90deg, #add543 0, #03bab0)',
      paddingLeft: 32,
      paddingRight: 32,
    border: 'none',
    fontSize: 13,
    "&:hover": {
        background:  'linear-gradient(90deg, #03bab0 0, #add543 )'
      },
  }
});

export default function MyMediaCard(props) {
  const classes = useStyles();

  return (
    <div key={props.area}>
      <Card className={props.className}>
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            align="center"
            className={classes.cardTitle}
          >
            {props.title}
          </Typography>
          <Grid
            container
            direction="row"
            justify="space-evenly"
            alignItems="flex-end"
          >
            <div className={classes.cardShortInfo}>
              {props.rooms < 2 ? "1 комната" : props.rooms + " комнаты"}
            </div>
            <div className={classes.cardShortInfo}>
              {props.area} м<sup>2</sup>
            </div>
            <div className={classes.cardShortInfo}>Балкон</div>
          </Grid>
        </CardContent>
        <CardActionArea
          onClick={props.onClick}
          className={classes.mediaContainer}
        >
          <CardMedia
            className={classes.media}
            image={props.image}
            title="Планировка"
          />
        </CardActionArea>
        <CardActions className={classes.buttonLine}>
          <Button
            size="large"
            className={classes.cardButton}
            onClick={props.onClick}

          >
            Узнать больше
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}
