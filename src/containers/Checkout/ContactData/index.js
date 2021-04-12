import { Component } from 'react';
import classes from './style.css';
import Button from '../../../components/UI/Button';

class ContactData extends Component {
  state = {
    name: '',
    email: '',
    address: {
      street: '',
      zipCode: '',
    },
  };

  render() {
    return (
      <div className={classes.ContactData}>
        <h4>Enter Your Contact Data!</h4>
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
          <Button btnType="Success">ORDER</Button>
        </form>
      </div>
    );
  }
}

export default ContactData;
