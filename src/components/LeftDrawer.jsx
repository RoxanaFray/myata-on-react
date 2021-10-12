import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import DomainOutlinedIcon from "@material-ui/icons/DomainOutlined";
import DescriptionOutlinedIcon from "@material-ui/icons/DescriptionOutlined";
import PaymentOutlinedIcon from "@material-ui/icons/PaymentOutlined";
import InfoOutlinedIcon from "@material-ui/icons/InfoOutlined";

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  menuIcon: {
    color: "black",
  },
  logo: {
    marginTop: theme.spacing(5),
    marginBottom: theme.spacing(5),
    marginLeft: "5%",
    width: "90%",
  },
  items: {
    marginTop: theme.spacing(5),
    marginRight: theme.spacing(4),
  },
  itemText: {
    "& span": {
      fontFamily: "MyriadPro",
    },
  }
}));

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <>
      <IconButton
        edge="end"
        className={classes.menuIcon}
        aria-label="menu"
        onClick={() => setIsOpen(true)}
      >
        <MenuIcon />
      </IconButton>
      <SwipeableDrawer
        anchor="left"
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onOpen={() => setIsOpen(true)}
      >
        <div>
          <div className={classes.logo}>
            <a href="#">
              <img src="react-project/images/Logo.svg" width="200px"></img>
            </a>
          </div>
          <Divider />

          <List className={classes.items}>
            <ListItemLink
              onClick={() => {
                setIsOpen(false);
              }}
              href="#popularPlans"
              button
              key="Планировки"
            >
              <ListItemIcon>
                <DomainOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Планировки" className={classes.itemText}/>
            </ListItemLink>
            <ListItemLink
              onClick={() => {
                setIsOpen(false);
              }}
              button
              href="#documents"
              key="Документы"
            >
              <ListItemIcon>
                <DescriptionOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Документы" className={classes.itemText}/>
            </ListItemLink>
            <ListItemLink
              onClick={() => {
                setIsOpen(false);
              }}
              button
              href="#payment"
              key="Способы оплаты"
            >
              <ListItemIcon>
                <PaymentOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Способы оплаты" className={classes.itemText}/>
            </ListItemLink>
            <ListItemLink
              onClick={() => {
                setIsOpen(false);
              }}
              button
              href="#our_buildings"
              key="Наши объекты"
            >
              <ListItemIcon>
                <InfoOutlinedIcon />
              </ListItemIcon>
              <ListItemText primary="Наши объекты" className={classes.itemText}/>
            </ListItemLink>
          </List>
        </div>
      </SwipeableDrawer>
    </>
  );
}

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}
