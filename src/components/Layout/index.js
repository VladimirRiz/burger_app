import { Component } from 'react';

import Aux from '../../hoc/Aux';

import classes from './style.css';
import Toolbar from '../Navigation/Toolbar';
import SideDrawer from '../Navigation/SideDrawer';

class Layout extends Component {
  state = {
    show: false,
  };

  closeSideDrawer = () => {
    this.setState((prevState) => {
      return { show: !prevState.show };
    });
  };

  render() {
    return (
      <Aux>
        <Toolbar toggle={this.closeSideDrawer} />
        <SideDrawer open={this.state.show} clicked={this.closeSideDrawer} />
        <main className={classes.content}>{this.props.children}</main>
      </Aux>
    );
  }
}

export default Layout;
