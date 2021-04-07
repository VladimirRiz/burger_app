import Aux from '../../hoc/Aux';

import classes from './style.css';

const layout = (props) => (
  <Aux>
    <div>Toolbar, SideDrawer, BackDrop</div>
    <main className={classes.content}>{props.children}</main>
  </Aux>
);

export default layout;
