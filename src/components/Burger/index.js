import classes from './style.css';
import BurgerIngredient from './BurgerIngredient';

const Burger = (props) => {
  let ingredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((acc, next) => {
      return acc.concat(next);
    }, []);
  if (ingredients.length === 0) {
    ingredients = <p>Please choose ingredients</p>;
  }
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {ingredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
