import { Component } from 'react';

import Aux from '../Aux';

import classes from './style.css';
import Toolbar from '../../components/Navigation/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer';

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
