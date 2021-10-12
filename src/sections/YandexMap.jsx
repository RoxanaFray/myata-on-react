
import { useEffect } from "react";
import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) =>
  createStyles({
    yandexMapAnchor: {
      position: 'absolute',
      marginTop: "-140px",
    }
  })
);


export default function YandexMap() {

  const classes = useStyles();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A75fbeaae06d64f5d7de63c44d76b10b80ed94a15ddefa9cfd2cee672b8e740b7&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;scroll=false"
    script.async = true;
    script.type = "text/javascript"
    document.getElementById("yandex-map").appendChild(script);
  }, []);

  return (
    <>
    <div className={classes.yandexMapAnchor} id="yandex-map-anchor"></div>
    <div id="yandex-map"></div>
    </>
  )
}