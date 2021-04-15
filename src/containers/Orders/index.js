import { connect } from 'react-redux';
import { Component } from 'react';
import Order from '../../components/Order';
import axios from '../../axios-orders';
import withErrorHandler from '../../hoc/withErrorHandler';
import { fetchOrders } from '../../store/AC';
import Spinner from '../../components/UI/Spinner';

class Orders extends Component {
  state = {
    orders: [],
    loading: true,
  };
  componentDidMount() {
    this.props.fetchOrders();
  }

  render() {
    let order = <Spinner />;
    if (!this.props.loading)
      order = this.props.orders.map((order) => {
        return (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={order.price}
          />
        );
      });

    return <div>{order}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.order.orders,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = { fetchOrders };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withErrorHandler(Orders, axios));
