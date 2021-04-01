import React, { useEffect, useState } from "react";
import "./App.css";
import { Container, Grid, makeStyles, Tooltip, Typography, useTheme } from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import Collapse from '@material-ui/core/Collapse';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FolderIcon from '@material-ui/icons/Folder';
import DeleteIcon from '@material-ui/icons/Delete';
import PictureAsPdfIcon from '@material-ui/icons/PictureAsPdf';
import GetAppIcon from '@material-ui/icons/GetApp';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        paddingTop: theme.spacing(3),
    },
    sectionTitle: {
        marginBotton: theme.spacing(6),
    },
    pdfIcon: {

        backgroundColor: "red"
    },
    showMoreButton: {
        width: "100%",
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(4),
        marginLeft: "auto",
        marginRight: "auto",
        color: "black",
        '&:hover': {
            background: "linear-gradient(90deg, #add543 0, #03bab0)",
            color: "white"
        },
    },
    listItem: {
        borderRadius: 8,
        border: "1px solid grey",
        marginTop: theme.spacing(2),
        marginLeft: "auto",
        marginRight: "auto",
        width: "70%",
    },
    downloadIcon: {
        color: "black",
        '&:hover': {
            background: "linear-gradient(90deg, #add543 0, #03bab0)",
            color: "white"
        },
    }
}));

const allDocsArr = [
    {
        title: "Дог_уступки_АВБ-ГСК_(зем_уч._Мята).pdf",
        url: "react-project/pdf/Дог_уступки_АВБ-ГСК_(зем_уч._Мята).pdf"
    },
    {
        title: "Договор об осуществлении технологического присоединения к электрическим сетям.pdf",
        url: "react-project/pdf/Договор об осуществлении технологического присоединения к электрическим сетям.pdf"
    },
    {
        title: "Договор ТУ_18В_ТП_водоснабжение от 19.12.19г..pdf",
        url: "react-project/pdf/Договор ТУ_18В_ТП_водоснабжение от 19.12.19г..pdf"
    },
    {
        title: "Договор ТУ_19В_ТП_водоснабжение от 19.12.19г..pdf",
        url: "react-project/pdf/Договор ТУ_19В_ТП_водоснабжение от 19.12.19г..pdf"
    },
    {
        title: "Договор ТУ_19В_ТП_водоснабжение от 19.12.19г..pdf",
        url: "react-project/pdf/Договор ТУ_19В_ТП_водоснабжение от 19.12.19г..pdf"
    },
    {
        title: "Договор ТУ_20В_ТП_водоснабжение от 19.12.19г..pdf",
        url: "react-project/pdf/Договор ТУ_20В_ТП_водоснабжение от 19.12.19г..pdf"
    },
    {
        title: "Литер 1 Мята продление от 29.05.2020 г..pdf",
        url: "react-project/pdf/Литер 1 Мята продление от 29.05.2020 г..pdf"
    },
    {
        title: "Литер 2 Мята продление от 29.05.2020 г..pdf",
        url: "react-project/pdf/Литер 2 Мята продление от 29.05.2020 г..pdf"
    },
    {
        title: "Литер 3 Мята продление от 30.04.20.pdf",
        url: "react-project/pdf/Литер 3 Мята продление от 30.04.20.pdf"
    },
    {
        title: "Литер 4 Мята продление от 29.05.20 г..pdf",
        url: "react-project/pdf/Литер 4 Мята продление от 29.05.20 г..pdf"
    },
    {
        title: "Приказ № 3 от 01.02.21 г. Л 2 смена наименования2613.pdf",
        url: "react-project/pdf/Приказ № 3 от 01.02.21 г. Л 2 смена наименования2613.pdf"
    },
    {
        title: "Приказ № 4 от 01.02.21 г. Л 1 смена наименования2616.pdf",
        url: "react-project/pdf/Приказ № 4 от 01.02.21 г. Л 1 смена наименования2616.pdf"
    },
    {
        title: "Приказ № 5 от 01.02.21 г. Л 3 смена наименования2614.pdf",
        url: "react-project/pdf/Приказ № 5 от 01.02.21 г. Л 3 смена наименования2614.pdf"
    },
    {
        title: "Приказ № 49 _от 01.09.20 ЖК Мята_Л3.pdf",
        url: "react-project/pdf/Приказ № 49 _от 01.09.20 ЖК Мята_Л3.pdf"
    },
    {
        title: "Приказ № 51 от 01.09.2020 г. Л 1.pdf",
        url: "react-project/pdf/Приказ № 51 от 01.09.2020 г. Л 1.pdf"
    },
    {
        title: "Приказ № 77 от 18.11.2020 г. Л 1.pdf",
        url: "react-project/pdf/Приказ № 77 от 18.11.2020 г. Л 1.pdf"
    },
    {
        title: "Приказ № 78 от 18.11.2020 г. Л 2.pdf",
        url: "react-project/pdf/Приказ № 78 от 18.11.2020 г. Л 2.pdf"
    },
    {
        title: "Приказ № 79 от 18.11.2020 г. Л 3.pdf",
        url: "react-project/pdf/Приказ № 79 от 18.11.2020 г. Л 3.pdf"
    },
    {
        title: "Приказ №48 _от 01.09.20 г. Л2.pdf",
        url: "react-project/pdf/Приказ №48 _от 01.09.20 г. Л2.pdf"
    },
    {
        title: "С. о уступке прав_Шхалахов Т.Х.-АВБ от 20.12.17г.pdf",
        url: "react-project/pdf/С. о уступке прав_Шхалахов Т.Х.-АВБ от 20.12.17г.pdf"
    },
    {
        title: "Соглашение о передаче прав и обязанностей по договору аренды зем.участка.pdf",
        url: "react-project/pdf/Соглашение о передаче прав и обязанностей по договору аренды зем.участка.pdf"
    },
    {
        title: "ТУ №289 от 21.12.17г.pdf",
        url: "react-project/pdf/ТУ №289 от 21.12.17г.pdf"
    },
    {
        title: "ТУ_450 кВт.pdf",
        url: "react-project/pdf/ТУ_450 кВт.pdf"
    }
]


export default function DocsSection(props: any) {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const [showAll, setShowAll] = React.useState<"nothing" | "all" | "firstFour">('nothing');

    useEffect(() => {
        setTimeout(() => {
            setShowAll("firstFour");
        }, 200);
    }, [])

    const firstDocs = fullScreen ? allDocsArr.slice(0, 3) : allDocsArr.slice(0, 4);
    const restRestDocs = fullScreen ? allDocsArr.slice(3, allDocsArr.length) : allDocsArr.slice(4, allDocsArr.length);

    // описываем типовой элемент списка
    function MyListItem(props: { title: string, url: string }) {
        return (

            <ListItem
                button
                className={classes.listItem}
                onClick={() => {
                    window?.open(props.url, '_blank')?.focus();
                }}
            >
                <ListItemAvatar >
                    <Avatar className={classes.pdfIcon}>
                        <PictureAsPdfIcon className={classes.pdfIcon} />
                    </Avatar>
                </ListItemAvatar>
                <ListItemText
                    primary={fullScreen ? props.title.slice(0, 10) + "..." : props.title}
                //secondary={secondary ? 'Secondary text' : null}
                />
                <Tooltip
                    placement="right"
                    title="Скачать документ"
                >
                    <ListItemSecondaryAction
                        onClick={(e) => {
                            e.stopPropagation();
                            /* Helper function */
                        }}
                    >
                        <a
                            onClick={(e) => {
                                e.stopPropagation();
                                /* Helper function */
                            }}
                            href={props.url}
                            download={props.title + ".pdf"}
                        >
                            <IconButton edge="end" aria-label="delete" className={classes.downloadIcon}>
                                <GetAppIcon  />
                            </IconButton>
                        </a>
                    </ListItemSecondaryAction>
                </Tooltip>
            </ListItem>
        );
    }

    return (
        <Container className={classes.root}>
            <Typography className={classes.sectionTitle} align="center" variant="h3">Документы</Typography>
            <Collapse in={showAll === "all" || showAll === "firstFour"} timeout={800} mountOnEnter unmountOnExit>
                <List dense={false}>
                    <Collapse in={showAll === "all" || showAll === "firstFour"} timeout={800} mountOnEnter unmountOnExit>
                        {firstDocs.map((elem) => {
                            return (
                                <MyListItem
                                    title={elem.title}
                                    url={elem.url}
                                />
                            );
                        })
                        }
                    </Collapse>
                    <Collapse in={showAll === "all"} timeout={800} mountOnEnter unmountOnExit>
                        {restRestDocs.map((elem) => {
                            return (
                                <MyListItem
                                    title={elem.title}
                                    url={elem.url}
                                />
                            );
                        })
                        }
                    </Collapse>

                </List>
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
}


