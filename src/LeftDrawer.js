import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import DomainOutlinedIcon from '@material-ui/icons/DomainOutlined';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import PaymentOutlinedIcon from '@material-ui/icons/PaymentOutlined';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  menuIcon: {
      color: 'black',
  }
});

export default function SwipeableTemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div  className="leftDrawerLogo">
        <img src="react-project/images/Logo.svg" width="200px"></img>
      </div>  
      <Divider />
      <List className="MobileMenuItems">
      <List className="MobileMenuItems">
          <ListItemLink href="#popularPlans" button  key='Планировки'>
          <ListItemIcon>
            <DomainOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary='Планировки'/>
          </ListItemLink>
          <ListItemLink button href="#docs" key='Документы'>
          <ListItemIcon>
            <DescriptionOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary='Документы'/>
          </ListItemLink>
          <ListItemLink button href="#payment_methods" key='Способы оплаты'>
          <ListItemIcon>
            <PaymentOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary='Способы оплаты'/>
          </ListItemLink>
          <ListItemLink button href="#we_built" key='Мы построили'>
          <ListItemIcon>
            <InfoOutlinedIcon/>
            </ListItemIcon>
            <ListItemText primary='Мы построили'/>
          </ListItemLink>
      </List>
      </List>
    </div>
  );

  return (
    <div>
      {[''].map((anchor) => (
        <React.Fragment key={anchor}>
            <IconButton edge="end" className={classes.menuIcon} aria-label="menu" onClick={toggleDrawer(anchor, true)}>
                <MenuIcon/>
                {anchor}
            </IconButton> 
          <SwipeableDrawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            {list(anchor)}
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </div>
  );
}


function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}