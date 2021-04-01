import React, { useEffect } from "react";


export default function YandexMap() {

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?um=constructor%3A75fbeaae06d64f5d7de63c44d76b10b80ed94a15ddefa9cfd2cee672b8e740b7&amp;width=100%25&amp;height=600&amp;lang=ru_RU&amp;scroll=false"
    script.async = true;
    script.type = "text/javascript"
    document.getElementById("yandex-map").appendChild(script);
  }, []);

  return (
    <div id="yandex-map"></div>
  )
}