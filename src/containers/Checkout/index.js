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
      const purchasedRedirect = this.props.purchased ? (
        <Redirect to="/" />
      ) : null;
      console.log(this.props.loading, this.props.purchased);

      summary = (
        <div>
          {purchasedRedirect}
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
    return <div>{summary}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    ings: state.burgerBuilder.ingredients,
    purchased: state.order.purchased,
    loading: state.order.loading,
  };
};

export default connect(mapStateToProps)(Checkout);
