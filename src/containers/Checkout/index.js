import { Component } from 'react';

import { Route } from 'react-router-dom';

import { connect } from 'react-redux';

import CheckoutSummary from '../../components/Order/CheckoutSummary';
import ContactData from '../Checkout/ContactData';

class Checkout extends Component {
  checkoutCancel = () => {
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
          ingredients={this.props.ings}
        />
        <Route
          path={`${this.props.match.path}/contact-data`}
          component={ContactData}
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.counter.ingredients,
  };
};

export default connect(mapStateToProps)(Checkout);
