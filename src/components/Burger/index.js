import classes from './style.css';
import BurgerIngredient from './BurgerIngredient';

const Burger = (props) => {
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      <BurgerIngredient type="cheese" />
      <BurgerIngredient type="meat" />
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
