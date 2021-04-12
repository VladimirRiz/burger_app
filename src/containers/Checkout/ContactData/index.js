import { Component } from 'react';
import classes from './style.css';
import Button from '../../../components/UI/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: '',
    },
    loading: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    console.log(this.props.ingredients);
    this.setState({
      loading: true,
    });
    const order = {
      ingredients: this.state.ingredients,
      price: this.props.totalPrice.toFixed(2),
      customer: {
        name: 'Riz',
        zipCode: '123123',
        email: 'test@test.com',
      },
    };
    axios
      .post('/orders.json', order)
      .then((response) => {
        this.setState({
          loading: false,
          purchasing: false,
        });
        this.props.history.push('/');
      })
      .catch((err) =>
        this.setState({
          loading: false,
          purchasing: false,
        })
      );
  };

  render() {
    let form = (
      <form>
        <input
          className={classes.Input}
          type="text"
          name="name"
          placeholder="Enter Your Name"
        />
        <input
          className={classes.Input}
          type="email"
          name="email"
          placeholder="Enter Your Email"
        />
        <input
          className={classes.Input}
          type="text"
          name="street"
          placeholder="Enter Your Street"
        />
        <input
          className={classes.Input}
          type="text"
          name="zipCode"
          placeholder="Enter Your Zip Code"
        />
        <Button clicked={this.orderHandler} btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />;
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data!</h4>
        {form}
      </div>
    );
  }
}

export default ContactData;
