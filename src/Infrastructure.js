import React, { useEffect } from "react";
import "./App.css";
import { createStyles, makeStyles } from "@material-ui/core";
import Background from "./react-project/images/infrastructure_bg.png";
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme) =>
  createStyles({
    background: {
      backgroundImage: `url(${Background})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      bacgroundRepeat: "no-repeat",
      height: 600,
      padding: 70,
    },
    title: {
        fontSize: 40,
        fontFamily: 'MyriadPro',
        color: 'black',
        textAlign: 'center',
        marginBottom: 30,
        letterSpacing: 7
    },
    text: {
    width: '80%',
    fontSize: 23,
    fontFamily: 'MyriadPro',
    color: 'black',
    textAlign: 'left',
    backgroundSize: 'cover',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 40,
    lineHeight: 1.5,
    marginLeft: 'auto',
    marginRight: 'auto'
    }
  })
);

export default function Infrastructure() {
  const classes = useStyles();
  return (
    <div className={classes.background}>
        <Container>
      <div className={classes.title}>ИНФРАСТРУКТУРА</div>
      <div className={classes.text}>
        ЖК "Мята" находится в сердце одного из самых благоприятных для жизни
        районов Новой Адыгеи. Местоположение позволяет жителям получить все
        удобства развитой социальной, торговой и транспортной инфраструктуры и в
        то же время оставаться вдали от шума, промышленных предприятий и
        загазованности. При этом дорога до центра г. Краснодар занимает всего 15
        минут. Двухуровневая транспортная развязка обеспечивает возможность
        быстро выехать в любом из необходимых направлений, используя личный
        автомобиль. Помимо этого, поблизости от жилого комплекса функционирует
        остановка общественного транспорта с более чем 20 маршрутами.
      </div>
      <div className={classes.cardsSection}>
          <div className={classes.card}>
            
          </div>
      </div>
      </Container>
    </div>
  );
}
