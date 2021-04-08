import Aux from '../../../hoc/Aux';

const OrderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li>
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
    </Aux>
  );
};

export default OrderSummary;
