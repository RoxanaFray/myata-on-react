import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
  

const useStyles = makeStyles({
    root: {
    },
    mediaContainer: {
        height: 'auto'
    },
    media: {
        backgroundSize: 'contain',
        minHeight: 300
    },

});

export default function MyMediaCard(props) {
    const classes = useStyles();

    return (
        <div key={props.area}>
            <Card className={props.cardClass}>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="h2" align="center" className="cardTitle">
                        {props.title}
                    </Typography>
                    <Grid
                        container
                        direction="row"
                        justify="space-evenly"
                        alignItems="flex-end"
                    >
                        <div className="layout_prop">{props.rooms < 2 ? "1 комната" : props.rooms + " комнаты"}</div>
                        <div className="layout_prop">{props.area} м<sup>2</sup></div>
                        <div className="layout_prop">Балкон</div>
                    </Grid>
                </CardContent>
                <CardActionArea onClick={props.onClick} className={classes.mediaContainer}>
                    <CardMedia
                        className={classes.media}
                        image="/img/plans/et-2-5_kv-01.png"
                        title="Contemplative Reptile"
                    />
                </CardActionArea>
                <CardActions className="buttonLine" >
                    <Button size="large" variant="contained" className="myCardButton" onClick={props.onClick}>
                        Узнать больше
                    </Button>
                </CardActions>
        
            </Card>
        </div>
    );
}
