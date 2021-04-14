import { Component } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-orders';

import Aux from '../../hoc/Aux';
import Burger from '../../components/Burger';
import BuildControls from '../../components/Burger/BuildControls';
import Modal from '../../components/UI/Modal';
import OrderSummary from '../../components/Burger/OrderSummary';
import Spinner from '../../components/UI/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler';
import { addIngredient, removeIngredient } from '../../store/AC';

class BurgerBuilder extends Component {
  state = {
    purchasable: false,
    purchasing: false,
    error: false,
  };

  componentDidMount() {
    // axios
    //   .get(
    //     'https://react-my-burger-10ca9-default-rtdb.firebaseio.com/ingredients.json'
    //   )
    //   .then((res) => {
    //     this.setState({
    //       ingredients: res.data,
    //     });
    //   })
    //   .catch((err) => {
    //     this.setState({ error: true });
    //   });
  }

  updatePurchaseState = (ingredients) => {
    const sum = Object.keys(ingredients)
      .map((igKey) => ingredients[igKey])
      .reduce((acc, next) => (acc += next), 0);

    return sum > 0;
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
    this.props.history.push('/checkout');
  };

  render() {
    const { purchasing, loading, error } = this.state;
    const disabledInfo = {
      ...this.props.ing,
    };
    for (const key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    let orderSummary = null;
    let burger = error ? <p>Ingredients cant be loaded!</p> : <Spinner />;

    if (this.props.ing) {
      burger = (
        <Aux>
          <Burger ingredients={this.props.ing} />
          <BuildControls
            add={this.props.increment}
            remove={this.props.decrement}
            disabled={disabledInfo}
            price={this.props.totalPrice}
            purchasable={this.updatePurchaseState(this.props.ing)}
            ordered={this.purchaseHandler}
          />
        </Aux>
      );
      orderSummary = (
        <OrderSummary
          cancel={this.purchaseHandlerCancel}
          continue={this.purchaseHandlerContinue}
          ingredients={this.props.ing}
          totalPrice={this.props.totalPrice}
        />
      );
    }
    if (loading) {
      orderSummary = <Spinner />;
    }

    return (
      <Aux>
        <Modal show={purchasing} modalClosed={this.purchaseHandlerCancel}>
          {orderSummary}
        </Modal>
        {burger}
      </Aux>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ing: state.counter.ingredients,
    totalPrice: state.counter.totalPrice,
  };
};
const mapDispatchToProps = { addIngredient, removeIngredient };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
