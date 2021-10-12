import React, { useEffect, useState } from "react";
import "../App.css";
import {
  Container,
  makeStyles,
  Tooltip,
  Typography,
  useTheme,
} from "@material-ui/core";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Collapse from "@material-ui/core/Collapse";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import PictureAsPdfIcon from "@material-ui/icons/PictureAsPdf";
import GetAppIcon from "@material-ui/icons/GetApp";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  docsSection: {
   backgroundImage: "url(react-project/images/infrastructure_bg.png)",
  },
  content: {
    width: "80%",
  },
  sectionTitle: {
    letterSpacing: 5,
    paddingTop: theme.spacing(10),
    marginBottom: theme.spacing(5),
    fontFamily: "MyriadPro",
    [theme.breakpoints.down("sm")]: {
      letterSpacing: 0,
      paddingTop: theme.spacing(5),
      marginBottom: theme.spacing(3),
    },
  },
  pdfIcon: {
    backgroundColor: "#03bab0",
  },
  showMoreButton: {
    marginLeft: "30%",
    width: "40%",
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(7),
    color: "white",
    border: "none",
    fontFamily: "MyriadPro",
    background: "linear-gradient(90deg, #add543 0, #03bab0)",
    "&:hover": {
      background: "linear-gradient(90deg, #03bab0 0,  #add543)",
    },
    [theme.breakpoints.down("sm")]: {
        marginLeft: "25%",
        width: "50%",
      },
      [theme.breakpoints.down("xs")]: {
        marginLeft: "5%",
        width: "90%",
      },
  },
  listItem: {
    borderRadius: 8,
    marginTop: theme.spacing(2),
    background: "white",
  },
  downloadIcon: {
    color: "black",
    "&:hover": {
      background: "linear-gradient(90deg, #add543 0, #03bab0)",
      color: "white",
      borderColor: "linear-gradient(90deg, #add543 0, #03bab0)",
    },
  },
  documentsAnchor: {
    position: "absolute",
    marginTop: "-140px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-100px",
    },
  },
  docsElem: {
    background: "white",
    borderRadius: 10,
  },
  docsLink: {
     "& > span": {
        fontFamily: 'MyriadPro',
     }
  }
}));

const allDocsArr = [
  {
    title: "Разрешение на строительство - Литер 1",
    url: "react-project/pdf/Литер 1 Мята продление от 29.05.2020 г..pdf",
  },
  {
    title: "Разрешение на строительство - Литер 2",
    url: "react-project/pdf/Литер 2 Мята продление от 29.05.2020 г..pdf",
  },
  {
    title: "Разрешение на строительство - Литер 3",
    url: "react-project/pdf/Литер 3 Мята продление от 30.04.20.pdf",
  },
  {
    title: "Разрешение на строительство - Литер 4",
    url: "react-project/pdf/Литер 4 Мята продление от 29.05.20 г..pdf",
  },
  {
    title: "Проектная декларация - Литер 1",
    url: "react-project/pdf/project_declaration_liter_1.pdf",
  },
  {
    title: "Проектная декларация - Литер 2",
    url: "react-project/pdf/project_declaration_liter_2.pdf",
  },
  {
    title: "Проектная декларация - Литер 3",
    url: "react-project/pdf/project_declaration_liter_3.pdf",
  },
  {
    title: "Проектная декларация - Литер 4",
    url: "react-project/pdf/project_declaration_liter_4.pdf",
  },
  {
    title: "Соглашение об уступке прав и обязанностей по договору аренды земельного участка от 16.06.2020",
    url: "react-project/pdf/Дог_уступки_АВБ-ГСК_(зем_уч._Мята).pdf",
  },
  {
    title: "Соглашение об уступке прав и обязанностей по договору аренды земельного участка от 20.12.2017",
    url:
      "react-project/pdf/С. о уступке прав_Шхалахов Т.Х.-АВБ от 20.12.17г.pdf",
  },
  {
    title:
      "Соглашение о передаче прав и обязанностей по договору аренды земельного участка от 06.12.2017",
    url:
      "react-project/pdf/Соглашение о передаче прав и обязанностей по договору аренды зем.участка.pdf",
  },
  {
    title:
      "Договор об осуществлении технологического присоединения к электрическим сетям",
    url:
      "react-project/pdf/Договор об осуществлении технологического присоединения к электрическим сетям.pdf",
  },
  {
    title: "Договор о подключении к централизованной системе холодного водоснабжения - Литер 1",
    url: "react-project/pdf/Договор ТУ_18В_ТП_водоснабжение от 19.12.19г..pdf",
  },
  {
    title: "Договор о подключении к централизованной системе холодного водоснабжения - Литер 2",
    url: "react-project/pdf/Договор ТУ_19В_ТП_водоснабжение от 19.12.19г..pdf",
  },
  {
    title: "Договор о подключении к централизованной системе холодного водоснабжения - Литер 3",
    url: "react-project/pdf/Договор ТУ_20В_ТП_водоснабжение от 19.12.19г..pdf",
  },
  
  {
    title: "Приказ в связи с изменением наименования застройщика от 01.02.2021 - Литер 1",
    url:
      "react-project/pdf/Приказ № 4 от 01.02.21 г. Л 1 смена наименования2616.pdf",
  },
  {
    title: "Приказ в связи с изменением наименования застройщика от 01.02.2021 - Литер 2",
    url:
      "react-project/pdf/Приказ № 3 от 01.02.21 г. Л 2 смена наименования2613.pdf",
  },
  {
    title: "Приказ в связи с изменением наименования застройщика от 01.02.2021 - Литер 3",
    url:
      "react-project/pdf/Приказ № 5 от 01.02.21 г. Л 3 смена наименования2614.pdf",
  },
  {
    title: "Приказ в связи с изменением наименования застройщика от 01.09.2020 - Литер 1",
    url: "react-project/pdf/Приказ № 51 от 01.09.2020 г. Л 1.pdf",
  },
  {
    title: "Приказ в связи с изменением наименования застройщика от 01.09.2020 - Литер 2",
    url: "react-project/pdf/Приказ №48 _от 01.09.20 г. Л2.pdf",
  },
  {
    title: "Приказ в связи с изменением наименования застройщика от 01.09.2020 - Литер 3",
    url: "react-project/pdf/Приказ № 49 _от 01.09.20 ЖК Мята_Л3.pdf",
  },
  {
    title: "Изменения в разрешение на строительство от 18.11.2020 - Литер 1",
    url: "react-project/pdf/Приказ № 77 от 18.11.2020 г. Л 1.pdf",
  },
  {
    title: "Изменения в разрешение на строительство от 18.11.2020 - Литер 2",
    url: "react-project/pdf/Приказ № 78 от 18.11.2020 г. Л 2.pdf",
  },
  {
    title: "Изменения в разрешение на строительство от 18.11.2020 - Литер 3",
    url: "react-project/pdf/Приказ № 79 от 18.11.2020 г. Л 3.pdf",
  },
  {
    title: "Технические условия для присоединения к электрическим сетям ПАО «Кубаньэнерго»",
    url: "react-project/pdf/ТУ №289 от 21.12.17г.pdf",
  },
  {
    title: "Технические условия газоснабжения",
    url: "react-project/pdf/ТУ_450 кВт.pdf",
  },
  {
    title: "Заключение о соответствии требованиям от 14.09.2021 - Литер 1",
    url: "react-project/pdf/ЗОС_ЖК_Мята_Литер_1.pdf",
  },
  {
    title: "Заключение о соответствии требованиям от 14.09.2021 - Литер 2",
    url: "react-project/pdf/ЗОС_ЖК_Мята_Литер_2.pdf",
  },
  {
    title: "Разрешение на ввод объекта в эксплуатацию от 20.09.2021 - Литер 1",
    url: "react-project/pdf/РНВ_корпус_1_Мята.pdf",
  },
  {
    title: "Разрешение на ввод объекта в эксплуатацию от 20.09.2021 - Литер 2",
    url: "react-project/pdf/РНВ_корпус_2_Мята.pdf",
  },
];

export default function DocsSection(props: any) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreenXS = useMediaQuery(theme.breakpoints.down("xs"));
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));
  
  const [showAll, setShowAll] = React.useState<"nothing" | "all" | "firstFour">(
    "nothing"
  );

  useEffect(() => {
    setTimeout(() => {
      setShowAll("firstFour");
    }, 200);
  }, []);

  const firstDocs = fullScreenSM
    ? allDocsArr.slice(0, 3)
    : allDocsArr.slice(0, 4);
  const restRestDocs = fullScreenSM
    ? allDocsArr.slice(3, allDocsArr.length)
    : allDocsArr.slice(4, allDocsArr.length);

  // описываем типовой элемент списка
  function MyListItem(props: { title: string; url: string }) {
    return (
      <ListItem
        button
        className={classes.listItem}
        onClick={() => {
          window?.open(props.url, "_blank")?.focus();
        }}
      >
        <ListItemAvatar>
          <Avatar className={classes.pdfIcon}>
            <PictureAsPdfIcon className={classes.pdfIcon} />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
        
          primary={
            fullScreenXS ? props.title.slice(0, 10) + "..." 
            : fullScreenSM ? props.title.slice(0, 41) + "..." :
            props.title
          }
          className={classes.docsLink}
          //secondary={secondary ? 'Secondary text' : null}
        />
        <Tooltip placement="right" title="Скачать документ">
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
              <IconButton
                edge="end"
                aria-label="delete"
                className={classes.downloadIcon}
              >
                <GetAppIcon />
              </IconButton>
            </a>
          </ListItemSecondaryAction>
        </Tooltip>
      </ListItem>
    );
  }

  return (
    <div className={classes.docsSection}>
      <Container className={classes.content}>
        <div className={classes.documentsAnchor} id="documents"></div>
        <Typography
          className={classes.sectionTitle}
          align="center"
          variant={fullScreenSM ? "h4" : "h3"}
        >
          ДОКУМЕНТЫ
        </Typography>
        
        <Collapse
          in={showAll === "all" || showAll === "firstFour"}
          timeout={800}
          mountOnEnter
          unmountOnExit
        >
     
          <List dense={false}>
            <Collapse
              in={showAll === "all" || showAll === "firstFour"}
              timeout={800}
              mountOnEnter
              unmountOnExit
              className={classes.docsElem}
            >
              {firstDocs.map((elem) => {
                return <MyListItem title={elem.title} url={elem.url} />;
              })}
            </Collapse>
            <Collapse
              in={showAll === "all"}
              timeout={800}
              mountOnEnter
              unmountOnExit
              className={classes.docsElem}
            >
              {restRestDocs.map((elem) => {
                return <MyListItem title={elem.title} url={elem.url} />;
              })}
            </Collapse>
          </List>
   
          <Button
            size="large"
            className={classes.showMoreButton}
            variant="outlined"
            onClick={() => {
              showAll === "nothing" || showAll === "firstFour"
                ? setShowAll("all")
                : setShowAll("firstFour");
            }}
          >
            {showAll === "nothing" || showAll === "firstFour"
              ? "Показать больше"
              : "Показать меньше"}
          </Button>
        </Collapse>
      </Container>
    </div>
  );
}
