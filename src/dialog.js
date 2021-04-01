import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";

import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import { withStyles } from "@material-ui/core/styles";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

export default function MyResponsiveDialog(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const DialogTitle = withStyles(styles)((props) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h4">{children}</Typography>
        {props.onClose ? (
          <IconButton
            aria-label="close"
            className={classes.closeButton}
            onClick={props.onClose}
          >
            <CloseIcon />
          </IconButton>
        ) : null}
      </MuiDialogTitle>
    );
  });

  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth="md"
      open={props.open}
      onClose={props.onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="customized-dialog-title" onClose={props.onClose}>
        {props.title}
      </DialogTitle>
      <DialogContent>{props.content}</DialogContent>
      <DialogActions className="dialogSendButton">
        <Button
          id="btn195"
          //type="submit"
          size="large"
          className="slide_form_submit dialogSlideFormSubmit" //{classes.sendCallback}
          variant="contained"
          onClick={() => {
            props.updateBackdropFunc(true);
            // проверка полей 
            if (props.name == "" || props.phone == "") {
              props.updateSnackbarFunc(
                true,
                "Необходимо заполнить оба поля",
                "warning"
              );
              props.updateBackdropFunc(false)
              return;
            }
            // проверка телефона 
            if (props.phone.includes("_")) {
              props.updateSnackbarFunc(
                true,
                "Некорректно введен номер телефона",
                "warning"
              );
              props.updateBackdropFunc(false)
              return;
            }

            let data = {
              phone: props.phone,
              name: props.name,
              title: "Форма обратной связи. Сайт жкмята.рф, раздел Популярные планировки",
              area: props.area
            };
            fetch("/submit/submit-for-react.php", {
              method: "POST",
              body: JSON.stringify(data),
              headers: {
                'Content-Type': 'application/json'
                // 'Content-Type': 'application/x-www-form-urlencoded',
              }
            }).then((res) => {
              //console.log("Request complete! response:", res);
              if (res.status === 200) {
                // закрытие диалога
                props.onClose();
                // очистка полей
                props.updateUserDataFunc("", "");
                // сообщение об успешной отправке
                props.updateSnackbarFunc(
                  true,
                  "Данные успешно отправлены!",
                  "success"
                );

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
                props.updateSnackbarFunc(
                  true,
                  "Произошла ошибка. Попробуйте ещё раз.",
                  "error"
                );
              }
              props.updateBackdropFunc(false);
            });
          }}
        >
          Отправить
        </Button>
      </DialogActions>
    </Dialog>
  );
}

/* 



<div class="remodal layout_popup_wrapper" data-remodal-id="layout_popup4">

    <button data-remodal-action="close" class="remodal-close"></button>

    <div class="layout_popup">
        <div class="layout_popup_title">
            1-КОМНАТНАЯ КВАРТИРА
        </div>

        <div data-remodal-action="cancel" class="layout_popup_close">
            <img src="img/slider-prev-green.png" alt="" />
            <span>Вернуться к выбору квартиры</span>
        </div>

        <div class="layout_popup_info">
            <div class="layout_popup_image">
                <img src="img/plans/et-2-5_kv-16.png" alt="" />
            </div>

            <div class="layout_popup_props_and_form">
                <div class="layout_popup_props">
                    <div class="prop">
                        <span class="prop_name">КОЛИЧЕСТВО КОМНАТ</span>
                        <span class="prop_value">1 КОМНАТА</span>
                    </div>
                    <div class="prop">
                        <span class="prop_name">ОБЩАЯ ПЛОЩАДЬ</span>
                        <span class="prop_value">29,21 м<sup>2</sup></span>
                    </div>
                    <div class="prop">
                        <span class="prop_name">БАЛКОН</span>
                        <span class="prop_value">ЕСТЬ</span>
                    </div>
                </div>
                <div class="layout_popup_form">
                    <div class="slide_form_title">ЗАПИШИТЕСЬ НА ПРОСМОТР</div>
                    <div class="slide_form_subtitle"><!--здесь может быть комментарий под текстом выше--></div>
                    <form data-source-id="556">
                        <div class="slide_form_input">
                            <i class="fa fa-user-circle" aria-hidden="true"></i>
                            <input type="text" name="name" placeholder="Имя" />
                        </div>

                        <div class="slide_form_input">
                            <i class="fa fa-phone" aria-hidden="true"></i>
                            <input type="text" name="phone" id="phone8" placeholder="Номер телефона" />
                        </div>
                        <button id="btn556" type="submit" class="slide_form_submit">
                            ОТПРАВИТЬ <i class="fa fa-angle-right" aria-hidden="true"></i>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</div>
 */
