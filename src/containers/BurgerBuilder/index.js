import { Component } from 'react';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';

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
    purchasable: false,
    purchasing: false,
  };

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((acc, next) => (acc += next), 0);

    this.setState({
      purchasable: sum > 0,
    });
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
    this.updatePurchaseState(updatedIngredients);
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
    this.updatePurchaseState(updatedIngredients);
  };

  purchaseHandler = () => {
    this.setState({
      purchasing: true,
    });
  };
  purchaseHandlerCancel = () => {
    this.setState({
      purchasing: false,
    });
  };
  purchaseHandlerContinue = () => {
    alert('continue');
  };

  render() {
    const { ingredients, totalPrice, purchasable, purchasing } = this.state;
    const disabledInfo = {
      ...this.state.ingredients,
    };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    return (
      <Aux>
        <Modal show={purchasing} modalClosed={this.purchaseHandlerCancel}>
          <OrderSummary
            cancel={this.purchaseHandlerCancel}
            continue={this.purchaseHandlerContinue}
            ingredients={ingredients}
            totalPrice={totalPrice}
          />
        </Modal>
        <Burger ingredients={ingredients} />
        <BuildControls
          add={this.addIngredients}
          remove={this.removeIngredients}
          disabled={disabledInfo}
          price={totalPrice}
          purchasable={purchasable}
          ordered={this.purchaseHandler}
        />
      </Aux>
    );
  }
}

export default BurgerBuilder;
