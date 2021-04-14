import { Component } from 'react';
import { connect } from 'react-redux';
import classes from './style.css';
import Button from '../../../components/UI/Button';
import axios from '../../../axios-orders';
import Spinner from '../../../components/UI/Spinner';
import Input from '../../../components/UI/Input';
import { purchaseBurger } from '../../../store/AC';

class ContactData extends Component {
  state = {
    orderForm: {
      name: {
        inputType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Name',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      email: {
        inputType: 'input',
        elementConfig: {
          type: 'email',
          placeholder: 'Your Email',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      street: {
        inputType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Street',
        },
        value: '',
        validation: {
          required: true,
        },
        valid: false,
        touched: false,
      },
      zipCode: {
        inputType: 'input',
        elementConfig: {
          type: 'text',
          placeholder: 'Your Zip Code',
        },
        value: '',
        validation: {
          required: true,
          minLength: 5,
          maxLength: 5,
        },
        valid: false,
        touched: false,
      },
      deliveryMethod: {
        inputType: 'select',
        elementConfig: {
          options: [
            { value: 'fastest', displayValue: 'Fastest' },
            { value: 'cheapest', displayValue: 'Cheapest' },
          ],
        },
        value: 'fastest',
        valid: true,
        validation: {},
      },
    },
    formIsValid: false,
  };

  orderHandler = (e) => {
    e.preventDefault();
    const formData = {};
    for (let formElement in this.state.orderForm) {
      formData[formElement] = this.state.orderForm[formElement].value;
    }
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.totalPrice.toFixed(2),
      orderData: formData,
    };

    this.props.purchaseBurger(order);
  };

  checkValid(rules, value) {
    let isValid = true;
    if (rules.required) {
      isValid = value.trim() !== '';
    }

    if (rules.minLength) {
      isValid = value.length >= rules.minLength && isValid;
    }
    if (rules.maxLength) {
      isValid = value.length <= rules.maxLength && isValid;
    }
    return isValid;
  }

  onChangeHandler = ({ target }, id) => {
    const updatedOrderForm = {
      ...this.state.orderForm,
    };
    const updatedFormElement = {
      ...updatedOrderForm[id],
    };
    updatedFormElement.value = target.value;
    updatedFormElement.valid = this.checkValid(
      updatedFormElement.validation,
      updatedFormElement.value
    );
    updatedFormElement.touched = true;
    updatedOrderForm[id] = updatedFormElement;
    let formIsValid = true;
    for (let element in updatedOrderForm) {
      console.log(updatedOrderForm[element].valid);
      formIsValid = updatedOrderForm[element].valid && formIsValid;
    }
    this.setState({
      orderForm: updatedOrderForm,
      formIsValid,
    });
  };

  render() {
    console.log(this.props);
    const { orderForm } = this.state;
    const formElementsArray = [];
    for (let key in orderForm) {
      formElementsArray.push({
        id: key,
        config: orderForm[key],
      });
    }
    let form = (
      <form onSubmit={this.orderHandler}>
        {formElementsArray.map((el) => (
          <Input
            key={el.id}
            elementType={el.config.inputType}
            elementConfig={el.config.elementConfig}
            value={el.config.value}
            changed={(e) => this.onChangeHandler(e, el.id)}
            invalid={!el.config.valid}
            shouldValidate={el.config.validation}
            touched={el.config.touched}
          />
        ))}

        <Button disabled={!this.state.formIsValid} btnType="Success">
          ORDER
        </Button>
      </form>
    );
    if (this.props.loading) {
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

const mapStateToProps = (state) => {
  return {
    totalPrice: state.counter.totalPrice,
    loading: state.order.loading,
  };
};

const mapDispatchToProps = { purchaseBurger };

export default connect(mapStateToProps, mapDispatchToProps)(ContactData);
