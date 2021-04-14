import * as type from './actionTypes';
import axios from '../../axios-orders';

export const addIngredient = (name) => {
  return { type: type.ADD_INGREDIENT, ingredient: name };
};

export const removeIngredient = (name) => {
  return { type: type.REMOVE_INGREDIENT, ingredient: name };
};

export const setIngredients = (ingredients) => {
  return {
    type: type.SET_INGREDIENTS,
    ingredients: ingredients,
  };
};

export const fetchIngredientsFailed = () => {
  return { type: type.FETCH_INGREDIENTS_FAILED };
};

export const initIngredients = () => {
  return (dispatch) => {
    axios
      .get(
        'https://react-my-burger-10ca9-default-rtdb.firebaseio.com/ingredients.json'
      )
      .then((res) => {
        dispatch(setIngredients(res.data));
      })
      .catch((err) => {
        dispatch(fetchIngredientsFailed());
      });
  };
};
