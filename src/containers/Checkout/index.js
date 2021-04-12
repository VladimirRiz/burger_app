import { Component } from 'react';

import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from '../Checkout/ContactData';

class Checkout extends Component {
  state = {
    ingredients: {
      salad: 0,
      bacon: 0,
      meat: 0,
      cheese: 0,
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
        <Route
          path={`${this.props.match.path}/contact-data`}
          component={ContactData}
        />
      </div>
    );
  }
}

export default Checkout;
