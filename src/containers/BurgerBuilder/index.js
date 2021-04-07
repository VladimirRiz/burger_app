import { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger';

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <Burger />
        <div>Burger Builder Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
