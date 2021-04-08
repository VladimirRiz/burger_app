import { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';

const INGREDIENTS_PRICE = {
  salad: 0.4,
  cheese: 0.5,
  bacon: 1.5,
  meat: 1.7,
};

class BurgerBuilder extends Component {
  state = {
    ingredients: {
      salad: 0,
      cheese: 0,
      bacon: 0,
      meat: 0,
    },
    totalPrice: 4,
  };

  addIngredients = (type) => {
    const oldCount = this.state.ingredients[type];
    const newCount = oldCount + 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice + priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  };

  removeIngredients = (type) => {
    const oldCount = this.state.ingredients[type];
    if (oldCount <= 0) return;
    const newCount = oldCount - 1;
    const updatedIngredients = {
      ...this.state.ingredients,
    };
    updatedIngredients[type] = newCount;
    const priceAddition = INGREDIENTS_PRICE[type];
    const oldPrice = this.state.totalPrice;
    const newPrice = oldPrice - priceAddition;
    this.setState({
      ingredients: updatedIngredients,
      totalPrice: newPrice,
    });
  };

  render() {
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }
    return (
      <Aux>
        <Burger ingredients={this.state.ingredients} />
        <BuildControls
          add={this.addIngredients}
          remove={this.removeIngredients}
          disabled={disabledInfo}
          price={this.state.totalPrice}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
