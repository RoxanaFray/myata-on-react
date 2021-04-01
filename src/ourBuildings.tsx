import React, { useEffect, useState } from "react";
import "./App.css";
import { Badge, Container, Grid, makeStyles, Typography, useTheme } from '@material-ui/core';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';

import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";


import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Collapse from '@material-ui/core/Collapse';
import { isClassExpression } from "typescript";

const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        paddingTop: theme.spacing(3),
    },
    sectionTitle: {
        marginBotton: theme.spacing(6),
    },
    cardRoot: {
        marginTop: theme.spacing(6),
        marginBottom: theme.spacing(3),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
    },
    cardUnderBadge: {
        borderRadius: 8,
    },
    cardMedia: {
        height: 200,
    },
    cardButton: {
        //backgroundColor: "green",
        color: "black",
        '&:hover': {
            background: "linear-gradient(90deg, #add543 0, #03bab0)",
            color: "white"
        },
    },
    imageInsideDialog: {
        width: "80%",
        borderRadius: 8,
        marginBottom: theme.spacing(2),
        marginTop: theme.spacing(2),
    },
    dialogCloseButton: {
        position: "absolute",
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
    showMoreButton: {
        width: "100%",
        marginTop: theme.spacing(5),
        //marginBottom: theme.spacing(3),
        marginLeft: "auto",
        marginRight: "auto",
        color: "black",
        '&:hover': {
            background: "linear-gradient(90deg, #add543 0, #03bab0)",
            color: "white"
        },
    },
}));

const objectsArr = [
    {
        title: "ЖК Мята",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lacinia sem. Duis ullamcorper mi sit amet ligula viverra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis facilisis sapien, sit amet pretium orci imperdiet at. Aliquam aliquet sem sem, egestas sodales purus bibendum quis. Praesent ut turpis et est faucibus suscipit. Suspendisse nec eros ullamcorper, volutpat mauris ac, fermentum massa. In hac habitasse platea dictumst. Praesent aliquet convallis turpis ut finibus. Aliquam est urna, condimentum sit amet finibus a, rutrum id risus. Nulla bibendum vel velit ut vulputate. Nullam consectetur massa mauris, a fringilla mauris tempus eu. Maecenas porta neque nec egestas auctor. Ut feugiat justo non tortor posuere, vitae iaculis nisi ornare.",
        image: "react-project/images/generalplan.jpeg",
        status: "строится"
    },
    {
        title: "ЖК Баланс",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lacinia sem. Duis ullamcorper mi sit amet ligula viverra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis facilisis sapien, sit amet pretium orci imperdiet at. Aliquam aliquet sem sem, egestas sodales purus bibendum quis. Praesent ut turpis et est faucibus suscipit. Suspendisse nec eros ullamcorper, volutpat mauris ac, fermentum massa. In hac habitasse platea dictumst. Praesent aliquet convallis turpis ut finibus. Aliquam est urna, condimentum sit amet finibus a, rutrum id risus. Nulla bibendum vel velit ut vulputate. Nullam consectetur massa mauris, a fringilla mauris tempus eu. Maecenas porta neque nec egestas auctor. Ut feugiat justo non tortor posuere, vitae iaculis nisi ornare.",
        image: "react-project/images/generalplan.jpeg",
        status: "строится"
    },
    {
        title: "ЖК Виноград 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lacinia sem. Duis ullamcorper mi sit amet ligula viverra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis facilisis sapien, sit amet pretium orci imperdiet at. Aliquam aliquet sem sem, egestas sodales purus bibendum quis. Praesent ut turpis et est faucibus suscipit. Suspendisse nec eros ullamcorper, volutpat mauris ac, fermentum massa. In hac habitasse platea dictumst. Praesent aliquet convallis turpis ut finibus. Aliquam est urna, condimentum sit amet finibus a, rutrum id risus. Nulla bibendum vel velit ut vulputate. Nullam consectetur massa mauris, a fringilla mauris tempus eu. Maecenas porta neque nec egestas auctor. Ut feugiat justo non tortor posuere, vitae iaculis nisi ornare.",
        image: "react-project/images/generalplan.jpeg",
        status: "строится"
    },
    {
        title: "ЖК Виноград",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lacinia sem. Duis ullamcorper mi sit amet ligula viverra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis facilisis sapien, sit amet pretium orci imperdiet at. Aliquam aliquet sem sem, egestas sodales purus bibendum quis. Praesent ut turpis et est faucibus suscipit. Suspendisse nec eros ullamcorper, volutpat mauris ac, fermentum massa. In hac habitasse platea dictumst. Praesent aliquet convallis turpis ut finibus. Aliquam est urna, condimentum sit amet finibus a, rutrum id risus. Nulla bibendum vel velit ut vulputate. Nullam consectetur massa mauris, a fringilla mauris tempus eu. Maecenas porta neque nec egestas auctor. Ut feugiat justo non tortor posuere, vitae iaculis nisi ornare.",
        image: "react-project/images/generalplan.jpeg",
        status: "построен"
    },
    {
        title: "ЖК Оазис",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lacinia sem. Duis ullamcorper mi sit amet ligula viverra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis facilisis sapien, sit amet pretium orci imperdiet at. Aliquam aliquet sem sem, egestas sodales purus bibendum quis. Praesent ut turpis et est faucibus suscipit. Suspendisse nec eros ullamcorper, volutpat mauris ac, fermentum massa. In hac habitasse platea dictumst. Praesent aliquet convallis turpis ut finibus. Aliquam est urna, condimentum sit amet finibus a, rutrum id risus. Nulla bibendum vel velit ut vulputate. Nullam consectetur massa mauris, a fringilla mauris tempus eu. Maecenas porta neque nec egestas auctor. Ut feugiat justo non tortor posuere, vitae iaculis nisi ornare.",
        image: "react-project/images/generalplan.jpeg",
        status: "построен"
    },
    {
        title: "ЖК Оазис 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lacinia sem. Duis ullamcorper mi sit amet ligula viverra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis facilisis sapien, sit amet pretium orci imperdiet at. Aliquam aliquet sem sem, egestas sodales purus bibendum quis. Praesent ut turpis et est faucibus suscipit. Suspendisse nec eros ullamcorper, volutpat mauris ac, fermentum massa. In hac habitasse platea dictumst. Praesent aliquet convallis turpis ut finibus. Aliquam est urna, condimentum sit amet finibus a, rutrum id risus. Nulla bibendum vel velit ut vulputate. Nullam consectetur massa mauris, a fringilla mauris tempus eu. Maecenas porta neque nec egestas auctor. Ut feugiat justo non tortor posuere, vitae iaculis nisi ornare.",
        image: "react-project/images/generalplan.jpeg",
        status: "построен"
    },
    {
        title: "Congress Hotel",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lacinia sem. Duis ullamcorper mi sit amet ligula viverra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis facilisis sapien, sit amet pretium orci imperdiet at. Aliquam aliquet sem sem, egestas sodales purus bibendum quis. Praesent ut turpis et est faucibus suscipit. Suspendisse nec eros ullamcorper, volutpat mauris ac, fermentum massa. In hac habitasse platea dictumst. Praesent aliquet convallis turpis ut finibus. Aliquam est urna, condimentum sit amet finibus a, rutrum id risus. Nulla bibendum vel velit ut vulputate. Nullam consectetur massa mauris, a fringilla mauris tempus eu. Maecenas porta neque nec egestas auctor. Ut feugiat justo non tortor posuere, vitae iaculis nisi ornare.",
        image: "react-project/images/generalplan.jpeg",
        status: "построен"
    },
    {
        title: "Бизнес центр",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lacinia sem. Duis ullamcorper mi sit amet ligula viverra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis facilisis sapien, sit amet pretium orci imperdiet at. Aliquam aliquet sem sem, egestas sodales purus bibendum quis. Praesent ut turpis et est faucibus suscipit. Suspendisse nec eros ullamcorper, volutpat mauris ac, fermentum massa. In hac habitasse platea dictumst. Praesent aliquet convallis turpis ut finibus. Aliquam est urna, condimentum sit amet finibus a, rutrum id risus. Nulla bibendum vel velit ut vulputate. Nullam consectetur massa mauris, a fringilla mauris tempus eu. Maecenas porta neque nec egestas auctor. Ut feugiat justo non tortor posuere, vitae iaculis nisi ornare.",
        image: "react-project/images/generalplan.jpeg",
        status: "построен"
    },
    {
        title: "Детский сад 1",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lacinia sem. Duis ullamcorper mi sit amet ligula viverra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis facilisis sapien, sit amet pretium orci imperdiet at. Aliquam aliquet sem sem, egestas sodales purus bibendum quis. Praesent ut turpis et est faucibus suscipit. Suspendisse nec eros ullamcorper, volutpat mauris ac, fermentum massa. In hac habitasse platea dictumst. Praesent aliquet convallis turpis ut finibus. Aliquam est urna, condimentum sit amet finibus a, rutrum id risus. Nulla bibendum vel velit ut vulputate. Nullam consectetur massa mauris, a fringilla mauris tempus eu. Maecenas porta neque nec egestas auctor. Ut feugiat justo non tortor posuere, vitae iaculis nisi ornare.",
        image: "react-project/images/generalplan.jpeg",
        status: "построен"
    },
    {
        title: "Детский сад 2",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In vitae lacinia sem. Duis ullamcorper mi sit amet ligula viverra bibendum. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus mollis facilisis sapien, sit amet pretium orci imperdiet at. Aliquam aliquet sem sem, egestas sodales purus bibendum quis. Praesent ut turpis et est faucibus suscipit. Suspendisse nec eros ullamcorper, volutpat mauris ac, fermentum massa. In hac habitasse platea dictumst. Praesent aliquet convallis turpis ut finibus. Aliquam est urna, condimentum sit amet finibus a, rutrum id risus. Nulla bibendum vel velit ut vulputate. Nullam consectetur massa mauris, a fringilla mauris tempus eu. Maecenas porta neque nec egestas auctor. Ut feugiat justo non tortor posuere, vitae iaculis nisi ornare.",
        image: "react-project/images/generalplan.jpeg",
        status: "построен"
    },

]
export default function OurBuildings(props: any) {
    const classes = useStyles();
    const theme = useTheme();


    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [dialogOpen, setDialogOpen] = React.useState(false);
    const [dialogTitle, setDialogTitle] = React.useState("");
    const [dialogContentText, setDialogContentText] = React.useState("");
    const [dialogDevObjStatus, setDialogDevObjStatus] = React.useState("");
    const [dialogImage, setDialogImage] = React.useState("");

    const [showAll, setShowAll] = React.useState<"nothing" | "all" | "firstFour">('nothing');

    useEffect(() => {
        setTimeout(() => {
            setShowAll("firstFour");
        }, 200);
    }, [])
    const firstObjects = fullScreen ? objectsArr.slice(0, 3) : objectsArr.slice(0, 4);
    const restObjects = fullScreen ? objectsArr.slice(3, objectsArr.length) : objectsArr.slice(4, objectsArr.length);

    // описываем типовую карточку объекта
    function MyObjectCard(props: { title: string, text: string, status: string, image: string }) {
        return (
            <Badge
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                badgeContent={props.status}
                color={props.status === "построен" ? "primary" : "secondary"}
                className={classes.cardRoot}
            >

                <Card
                    className={classes.cardUnderBadge}
                >
                    <CardActionArea
                        onClick={() => {
                            setDialogOpen(true);
                            setDialogTitle(props.title);
                            setDialogContentText(props.text);
                            setDialogDevObjStatus(props.status);
                            setDialogImage(props.image);
                        }}
                    >
                        <CardMedia
                            className={classes.cardMedia}
                            image={props.image}
                        //title={elem.title}
                        />
                        <CardContent>
                            <Typography align="center" gutterBottom variant="h5" component="h2">
                                {props.title}
                            </Typography>
                            {/* <Typography variant="body2" color="textSecondary" component="p">
                                                {elem.text.slice(0, 60)}
                                            </Typography> */}
                        </CardContent>
                    </CardActionArea>
                    <CardActions

                    >
                        <Grid
                            container
                            direction="row"
                            justify="center"
                            alignItems="center"
                        >
                            <Button
                                onClick={() => {
                                    setDialogOpen(true);
                                    setDialogTitle(props.title);
                                    setDialogContentText(props.text);
                                    setDialogDevObjStatus(props.status);
                                    setDialogImage(props.image);
                                }}
                                className={classes.cardButton}
                                variant="text"
                                size="large"
                                color="primary"
                            >
                                Узнать подробнее
                            </Button>
                        </Grid>
                    </CardActions>
                </Card>
            </Badge>
        );
    }
    return (
        <Container className={classes.root}>
            <Typography className={classes.sectionTitle} align="center" variant="h3">Наши объекты</Typography>
            <Dialog
                fullScreen={fullScreen}
                open={dialogOpen}
                fullWidth
                maxWidth="md"
                onClose={() => { setDialogOpen(false) }}
                aria-labelledby="responsive-dialog-title"
            >
                <DialogTitle id="responsive-dialog-title">
                    <Typography align="center" variant="h4">{dialogTitle}</Typography>
                    <IconButton
                        aria-label="close"
                        className={classes.dialogCloseButton}
                        onClick={() => { setDialogOpen(false) }}
                    >
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>


                <Typography align="center" >{dialogDevObjStatus}</Typography>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                >
                    <img
                        id={dialogImage + "-id"}
                        className={classes.imageInsideDialog}
                        src={dialogImage}
                    />
                </Grid>
                <DialogContent>
                    <DialogContentText>
                        {dialogContentText}
                    </DialogContentText>

                </DialogContent>
            </Dialog>

            <Collapse in={showAll === "all" || showAll === "firstFour"} timeout={800} mountOnEnter unmountOnExit>
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={3}
                >
                    {firstObjects.map((elem) => (
                        <MyObjectCard
                            title={elem.title}
                            image={elem.image}
                            text={elem.text}
                            status={elem.status}
                        />
                    ))}
                </Grid>
                <Collapse in={showAll === "all"} timeout={800} mountOnEnter unmountOnExit>
                <Grid
                    container
                    direction="row"
                    justify="space-around"
                    alignItems="center"
                    spacing={3}
                >
                    {restObjects.map((elem) => (
                        <MyObjectCard
                            title={elem.title}
                            image={elem.image}
                            text={elem.text}
                            status={elem.status}
                        />
                    ))}
                </Grid>
            </Collapse>
            </Collapse>
            
            <Button
                size="large"
                className={classes.showMoreButton}
                variant="contained"
                onClick={() => {
                    (showAll === "nothing" || showAll === "firstFour") ? setShowAll("all") : setShowAll("firstFour");
                }}
            >
                {showAll === "nothing" || showAll === "firstFour" ? "Показать больше" : "Показать меньше"}
            </Button>

        </Container >
    );
};
