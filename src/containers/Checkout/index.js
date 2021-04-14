import { Component } from 'react';

import { Route, Redirect } from 'react-router-dom';

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
    let summary = <Redirect to="/" />;
    if (this.props.ings) {
      summary = (
        <CheckoutSummary
          checkoutCancel={this.checkoutCancel}
          checkoutContinue={this.checkoutContinue}
          ingredients={this.props.ings}
        />
      );
    }
    return (
      <div>
        {summary}
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
