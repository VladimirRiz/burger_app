import { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger';

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 1,
      cheese: 2,
      bacon: 3,
      meat: 1,
    },
  };
  render() {
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <div>Burger Builder Controls</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
