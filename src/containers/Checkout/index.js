import { Component } from 'react';

import { Route } from 'react-router-dom';

import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from '../Checkout/ContactData';

class Checkout extends Component {
  state = {
    ingredients: null,
    totalPrice: 0,
  };
  UNSAFE_componentWillMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredients = {};
    for (let el of query.entries()) {
      if (el[0] === 'price') {
        this.setState({ totalPrice: +el[1] });
      } else {
        ingredients[el[0]] = +el[1];
      }
      this.setState({
        ingredients,
      });
    }
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
          component={(props) => (
            <ContactData
              ingredients={this.state.ingredients}
              {...props}
              totalPrice={this.state.totalPrice}
            />
          )}
        />
      </div>
    );
  }
}

export default Checkout;
