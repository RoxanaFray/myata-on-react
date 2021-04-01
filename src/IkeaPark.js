import React, { useEffect, useState } from "react";
import "./App.css";
import FormOnly from "./justForm";
import Grid from "@material-ui/core/Grid";



export default function IkeaPark() {

  return (
    <div className="IkeaParkSection">
      <div className="IkeaParkBackground">
        <img src="react-project/images/parkBackground.jpg"></img>
      </div>
          <Grid
            container
            justify="space-evenly"
            alignItems="center"
            className="IkeaParkContent"
        >
      <Grid item className="ParkSectionText">
        <div className="ParkSectionTextTitle">ПАРК</div>
        <div className="ParkSectionTextSubtitle"> ПО СОСЕДСТВУ</div>
        <span>
          Представьте себе торговый центр нового поколения с ресторанами на
          открытом воздухе, уникальный живописный оазис, где можно расслабиться
          на берегу чистейшего озера, а после этого пройтись по любимым
          магазинам. Место, идеальное для того, чтобы провести здесь целый день
          с семьей или друзьями, забыв о повседневных делах. Место, где каждого
          гостя переполняют яркие впечатления и каждый может найти себе занятие
          по своим интересам.
        </span>
      </Grid>
      <Grid item className="ParkSectionForm">
        <FormOnly
          class="VerticalCallBackForm"
          title="ЗАПИШИТЕСЬ НА ПРОСМОТР"
          subtitle=""
        ></FormOnly>
      </Grid>
    </Grid>
    </div>
  );
}
