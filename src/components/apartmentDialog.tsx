import "../App.css";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import CardMedia from "@material-ui/core/CardMedia";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { withStyles } from "@material-ui/core/styles";
import { useTheme } from "@material-ui/core/styles";
import { Typography } from "@material-ui/core";
import FormOnly from "../components/justForm";

const useStyles = makeStyles((theme) => ({
  generalPlanImage: {
    maxWidth: "100%",
    minWidth: "100%",
  },
  floorImage: {
    maxWidth: "70%",
    minWidth: "70%",
  },
  backdrop: {
    zIndex: theme.zIndex.drawer + 10000,
    color: "#fff",
  },
  floorBtns: {
    margin: theme.spacing(2),
  },
  area: {
    backgroundColor: "#ff0000",
    color: "#ff0000",
  },
  generalPlanAnchor: {
    position: "absolute",
    marginTop: "-140px",
  },
  dialog: {
    overflowX: "hidden"
  },
  dialogTitle: {
    textAlign: "center",
    paddingTop: theme.spacing(4),
    fontFamily: "MyriadPro",
  },
  dialogContent: {
  },
  media: {
    width: 400,
    height: 400,
    [theme.breakpoints.down("xs")]: {
      width: 250,
      height: 250,
    },
  },
  textDialogContent: {
    width: 400,
    marginTop: theme.spacing(3),
    fontFamily: "MyriadPro",
    [theme.breakpoints.down("xs")]: {
      width: 250,
    },
  },
  textDialogContentBlock: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
    textAlign: "center",
  },
  table: {
    width: 400,
    "& td:nth-child(even)": {
      textAlign: "right",
    },
    "& td:nth-child(odd)": {
      textAlign: "left",
    },
    [theme.breakpoints.down("xs")]: {
      width: 250,
    },
  },
  form: {
    marginTop: theme.spacing(1),
  },
  formTitle: {
  },
  formSubtitle: {
    textAlign: 'center',
    fontFamily: "MyriadPro",
  },
  formName: {
    width: '100%',
    marginTop: theme.spacing(1),
  },
  formPhone: {
    width: '100%',
    marginTop: theme.spacing(2),
  },
  formButton: {
    background: 'linear-gradient(90deg, #add543 0, #03bab0)',
    color: "white",
    width: "70%",
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(4),
    fontFamily: 'MyriadPro',
    "&:hover": {
      background:  'linear-gradient(90deg, #03bab0 0, #add543 )'
    },
  },
}));

export default function ApartmentDialog(props: {
  area: number;
  floor: number;
  rooms: number;
  liter: number;
  image: string;
  onClose: () => void;
  open: boolean;
}) {
  const classes = useStyles();
  const theme = useTheme();
  const fullScreenSM = useMediaQuery(theme.breakpoints.down("sm"));

  const titleStyles: any = (theme: any) => ({
    closeButton: {
      position: "absolute",
      right: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
    },
    backButton: {
      position: "absolute",
      left: theme.spacing(1),
      top: theme.spacing(1),
      color: theme.palette.grey[500],
      fontFamily: "MyriadPro",
    },
    backButtonText: {
      fontFamily: "MyriadPro",
    },
    floorSection: {
      marginTop: theme.spacing(3),
    },
  });
  const DialogTitle = withStyles(titleStyles)((props: any) => {
    const { children, classes, onClose, ...other } = props;
    return (
      <MuiDialogTitle disableTypography className={classes.root} {...other}>
        <Typography variant="h4">{children}</Typography>

        <IconButton
          aria-label="close"
          className={classes.backButton}
          onClick={() => {
            props.onClose();
          }}
        >
          <ArrowBackIcon />
          <Typography align="center" className={classes.backButtonText}>вернуться к выбору квартиры</Typography>
        </IconButton>

        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={() => props.onClose()}
        >
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
    );
  });

  return (
    <>
      <Dialog
        fullScreen={fullScreenSM}
        className={classes.dialog}
        open={props.open}
        maxWidth="md"
        fullWidth={true}
        onClose={() => {
          props.onClose();
        }}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle
          className={classes.dialogTitle}
          onClose={() => {
            props.onClose();
          }}
        ></DialogTitle>
        <DialogContent>
          <>
            <Grid
              container
              direction={fullScreenSM ? "column" : "row"}
              justify="space-evenly"
              alignItems="center"
              className={classes.dialogContent}
            >
              <Grid item>
                <CardMedia className={classes.media} image={props.image} />
              </Grid>
              <Grid item>
                <Grid 
                container 
                className={classes.textDialogContent}
                >
                  <Grid item className={classes.textDialogContentBlock}>
                    <table className={classes.table}>
                      {props.liter && (
                        <tr>
                          <td>ЛИТЕР</td>
                          <td>{props?.liter}</td>
                        </tr>
                      )}
                      {props.floor && (
                        <tr>
                          <td>ЭТАЖ</td>
                          <td>{props?.floor === 1 ? props?.floor : "2-5"}</td>
                        </tr>
                      )}

                      <tr>
                        <td>КОЛИЧЕСТВО КОМНАТ</td>
                        <td>{props.rooms < 1 ? 1 : props.rooms}</td>
                      </tr>
                      <tr>
                        <td>ОБЩАЯ ПЛОЩАДЬ</td>
                        <td>
                          {props.area} м<sup>2</sup>
                        </td>
                      </tr>
                      <tr>
                        <td>БАЛКОН</td>
                        <td>ЕСТЬ</td>
                      </tr>
                    </table>
                  </Grid>
                  <Grid item>
                    <FormOnly
                      title=""
                      subtitle="ЗАПИШИТЕСЬ НА ПРОСМОТР"
                      selectedApartment={{
                        area: props.area,
                        floor: props?.floor,
                        liter: props?.liter,
                      }}
                      rootClassName={classes.form}
                      titleClassName={classes.formTitle}
                      subtitleClassName={classes.formSubtitle}
                      nameClassName={classes.formName}
                      phoneClassName={classes.formPhone}
                      buttonClassName={classes.formButton}
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </>
        </DialogContent>
      </Dialog>
    </>
  );
}
