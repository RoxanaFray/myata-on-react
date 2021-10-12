export function resizeMapAreas(id, width) {
  // код, который делает так, чтобы map ресайзился когда меняется размер изображения
  var ImageMap = function (map) {
    var n,
      areas = map.getElementsByTagName("area"),
      len = areas.length,
      coords = [],
      previousWidth = width;
    for (n = 0; n < len; n++) {
      coords[n] = areas[n].coords.split(",");
    }
    this.resize = function () {
      var n,
        m,
        clen,
        x = document.body.clientWidth / previousWidth;
      for (n = 0; n < len; n++) {
        clen = coords[n].length;
        for (m = 0; m < clen; m++) {
          coords[n][m] *= x;
        }
        areas[n].coords = coords[n].join(",");
      }
      previousWidth = document.body.clientWidth;
      return true;
    };
    window.onresize = this.resize;
  };
  if (document.getElementById(id)) {
    let imageMap = new ImageMap(document.getElementById(id));
    imageMap.resize();
  }
}

// dataObj содержит ключи со значениями, которые надо передавать на сервер
// backdropFunction - функция, обновляющая backdrop
// snackbarFunctions - объект с функциями, которые обновляют snackbar
export function sendForm(dataObj, backdropFunction, snackbarFunctions) {
  const updateSnackbarMessage = snackbarFunctions.updateSnackbarMessage;
  const updateSnackbarOpen = snackbarFunctions.updateSnackbarOpen;
  const updateSnackbarSeverity = snackbarFunctions.updateSnackbarSeverity;

  const updateBackdrop = backdropFunction;


  const name = dataObj.name;
  const phone = dataObj.phone;
  const title = dataObj.title;

  const area = dataObj.area ?? "";
  const liter = dataObj.liter ?? "";
  const comment = dataObj.comment ?? "";


  updateBackdrop(true);
  // проверка полей
  if (name == "" || phone == "") {
    updateSnackbarMessage("Необходимо заполнить оба поля");
    updateSnackbarOpen(true);
    updateSnackbarSeverity("warning");
    updateBackdrop(false);
    return;
  }
  // проверка телефона
  if (phone.includes("_")) {
    updateSnackbarMessage("Некорректно введен номер телефона");
    updateSnackbarOpen(true);
    updateSnackbarSeverity("warning");
    updateBackdrop(false);
    return;
  }

  fetch("/submit/submit-for-react.php", {
    method: "POST",
    body: JSON.stringify({
      area: area,
      title: title,
      phone: phone,
      name: name,
      liter: liter,
      comment: comment,
    }),
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
  }).then((res) => {
    //console.log("Request complete! response:", res);
    if (res.status === 200) {
      // закрытие диалога
      // сообщение об успешной отправке
      updateSnackbarMessage("Данные успешно отправлены!");
      updateSnackbarOpen(true);
      updateSnackbarSeverity("success");

      // отправление данных в трекеры 
      setTimeout(() => {
        eval(
          `
          ym(71943988,'reachGoal','SEND');
          gtag('event','target',{'event_category':'FORM','event_action':'SEND',});
          fbq('track', 'Lead');
          `
        );
      }, 2000);
    } else {
      // сообщение об успешной отправке
      updateSnackbarMessage("Произошла ошибка. Попробуйте ещё раз.");
      updateSnackbarOpen(true);
      updateSnackbarSeverity("error");
    }
    updateBackdrop(false);
  });
}
