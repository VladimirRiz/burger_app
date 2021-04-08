import classes from './style.css';

import Logo from '../../Logo';
import NavigationItems from '../NavigationItems';
import Aux from '../../../hoc/Aux';
import Backdrop from '../../UI/Backdrop';

const SideDrawer = (props) => {
  let isOpen = props.open ? classes.Open : classes.Close;
  const attachedClasses = [classes.SideDrawer, isOpen];
  // ....
  return (
    <Aux>
      <Backdrop show={props.open} clicked={props.clicked} />
      <div className={attachedClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Aux>
  );
};

export default SideDrawer;
