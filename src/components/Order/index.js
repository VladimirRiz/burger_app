import classes from './style.css';

const Order = (props) => {
  const ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName],
    });
  }
  const ingredientsOutput = ingredients.map((ig) => {
    return (
      <span
        key={ig.name}
        style={{
          textTransform: 'capitalize',
          border: '1px solid #eee',
          margin: '0 10px',
          padding: '8px',
        }}
      >
        {ig.name} ({ig.amount})
      </span>
    );
  });
  console.log(ingredients);
  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientsOutput}</p>
      <p>Total Price: USD {props.price}</p>
    </div>
  );
};

export default Order;
