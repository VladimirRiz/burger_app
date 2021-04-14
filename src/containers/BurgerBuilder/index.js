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
import * as actionTypes from '../../store/actions';

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

    this.setState({
      purchasable: sum > 0,
    });
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
    const { ingredients } = this.state;

    const queryParams = [];

    for (let i in ingredients) {
      queryParams.push(
        `${encodeURIComponent(i)}=${encodeURIComponent(ingredients[i])}`
      );
    }

    queryParams.push('price=' + this.state.totalPrice);

    const queryString = queryParams.join('&');

    this.props.history.push({
      pathname: '/checkout',
      search: `?${queryString}`,
    });
  };

  render() {
    const { purchasable, purchasing, loading, error } = this.state;
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
            add={this.props.onAddIngredients}
            remove={this.props.onRemoveIngredients}
            disabled={disabledInfo}
            price={this.props.totalPrice}
            purchasable={purchasable}
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
    ing: state.ingredients,
    totalPrice: state.totalPrice,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onAddIngredients: (ingredient) =>
      dispatch({ type: actionTypes.ADD_INGREDIENT, ingredient }),
    onRemoveIngredients: (ingredient) =>
      dispatch({ type: actionTypes.REMOVE_INGREDIENT, ingredient }),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(BurgerBuilder, axios));
