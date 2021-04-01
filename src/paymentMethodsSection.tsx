import React, { useEffect, useState } from "react";
import "./App.css";
import { Container, Grid, makeStyles, Tooltip, Typography, useTheme } from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import Collapse from '@material-ui/core/Collapse';
import Grow from '@material-ui/core/Grow';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';


const useStyles = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(10),
        paddingTop: theme.spacing(3),
    },
    sectionTitle: {
        marginBotton: theme.spacing(6),
    },
    buttonsGroup: {
        marginTop: theme.spacing(5),
        marginBottom: theme.spacing(4),
    },
    methodButton: {

    },
    selectedMethodButton: {
        background: "linear-gradient(90deg, #add543 0, #03bab0)",
        color: "white"
    },
    methodTitle: {
        marginTop: theme.spacing(3),
        marginBottom: theme.spacing(3),
    }
}));


const methodsArr = [
    {
        title: "100% оплата",
        text: `Самая лучшая форма оплаты евар.`,
    },
    {
        title: "Ипотека",
        text: `СЗ ООО "Градстрой-Кубань" сотрудничает с ведущими российскими банками и активно развивает партнерскую сеть. Объекты компании пользуются доверием крупнейших банков, в которых Вы можете выбрать для себя наиболее подходящую программу ипотечного кредитования. Сотрудники Отдела ипотечных брокеров нашей компании будут рады помочь Вам выбрать и оформить ипотечный кредит на самых оптимальных условиях.`,
    },
    {
        title: "Mатеринский капитал",
        text: `Приобретая жилье в ЖК Мята Вы также имеете возможность оформить первоначальный взнос используя Сертификат на Материнский капитал. Компания СЗ ООО "Градстрой-Кубань" всегда идет навстречу своим покупателям, использует персональный подход к каждому клиенту и помогает решить все вопросы, связанные с приобретением жилья.`,
    },
    {
        title: "Рассрочка от застройщика",
        text: `Своим клиентам компания СЗ ООО "Градстрой-Кубань" предоставляет возможность вносить платежи по частям. Рассрочка - довольно простой и удобный способ оплаты, не требующий больших временных затрат и затруднений в документальной части. Все вопросы, касающиеся оформления рассрочки, обсуждаются с Вами специалистами СЗ ООО "Градстрой-Кубань" и решаются прямо в офисе компании.`,
    },
]

export default function PaymentMethodsSection(props: any) {
    const classes = useStyles();
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

    const [title, setTitle] = React.useState("");
    const [text, setText] = React.useState("");

    const [transition, setTransition] = React.useState(false);
    const [selectedMethodClasses, setSelectedMethodClasses] = React.useState(methodsArr.map(elem => classes.methodButton));

    // делаем так, чтобы что-то показывалось при первом рендере
    useEffect(() => {
        setTitle(methodsArr[1].title);
        setText(methodsArr[1].text);
        setSelectedMethodClasses((prevVal: any) => {
            // меняем классы нажатой кнопке и всем остальным 
            return prevVal.map((elem: any, innerIndex: number) => {
                if(innerIndex === 1) {
                    return classes.selectedMethodButton;
                } else {
                    return classes.methodButton;
                }
            });
        });

    }, [])

    return (
        <Container className={classes.root}>
            <Typography className={classes.sectionTitle} align="center" variant="h3">Cпособы оплаты</Typography>
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <ButtonGroup className={classes.buttonsGroup} size="large" color="primary" aria-label="large outlined primary button group">
                    {
                        methodsArr.map((elem, index) => (
                            <Button
                                color="default"
                                className={selectedMethodClasses[index]}
                                onClick={() => {
                                    setSelectedMethodClasses((prevVal: any) => {
                                        // меняем классы нажатой кнопке и всем остальным 
                                        return prevVal.map((elem: any, innerIndex: number) => {
                                            if(innerIndex === index) {
                                                return classes.selectedMethodButton;
                                            } else {
                                                return classes.methodButton;
                                            }
                                        });
                                    });

                                    // здесь дважды устанавливаем значение для того, чтобы успела сработать анимация
                                    setTransition(true)
                                    setTimeout(() => {
                                        setTitle(elem.title);
                                        setText(elem.text);
                                        setTransition(false);
                                    }, 400);

                                }}
                            >
                                {elem.title}
                            </Button>
                        ))
                    }
                </ButtonGroup>

            </Grid>
            <Grid
                container
                direction="column"
                justify="flex-start"
                alignItems="stretch"
            >
                <Grow in={!transition} timeout={400} mountOnEnter unmountOnExit>
                    <Typography className={classes.methodTitle} variant="h4">{title}</Typography>
                </Grow>
                <Grow in={!transition} timeout={400} mountOnEnter unmountOnExit>
                    <Typography variant="body1" >{text}</Typography>
                </Grow>
            </Grid>
        </Container>
    );

}