import classes from './style.css';
import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle';

const Toolbar = (props) => (
  <header className={classes.Toolbar}>
    <DrawerToggle toggle={props.toggle} />
    <Logo height={'80%'} />
    <nav className={classes.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default Toolbar;
