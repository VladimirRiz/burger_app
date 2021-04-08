import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: 'capitalize' }}>{igKey}</span>:{' '}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>Burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p>Total Price: {props.totalPrice.toFixed(2)}</p>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.cancel}>
        Cancel
      </Button>
      <Button btnType="Success" clicked={props.continue}>
        Continue
      </Button>
    </Aux>
  );
};

export default OrderSummary;
