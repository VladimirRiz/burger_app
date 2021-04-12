import { Component } from 'react';

import CheckoutSummary from '../../components/Order/CheckoutSummary';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      meat: 1,
      cheese: 1,
    },
  };
  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    console.log(query);
    const ingredients = {};
    for (let el of query.entries()) {
      ingredients[el[0]] = +el[1];
    }
    this.setState({
      ingredients,
    });
  }

  checkoutCancel = () => {
    console.log('clicked');
    this.props.history.goBack();
  };

  checkoutContinue = () => {
    this.props.history.replace('/checkout/contact-data');
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          checkoutCancel={this.checkoutCancel}
          checkoutContinue={this.checkoutContinue}
          ingredients={this.state.ingredients}
        />
      </div>
    );
  }
}

export default Checkout;
