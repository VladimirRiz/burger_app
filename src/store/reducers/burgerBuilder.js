import { updateObject } from '../utility';

import * as actionTypes from '../AC/actionTypes';

const INGREDIENTS_PRICE = {
  salad: 0.4,
  cheese: 0.5,
  bacon: 1.5,
  meat: 1.7,
};

const initialState = {
  ingredients: null,
  totalPrice: 4,
  error: false,
};

const addIngredient = (state, action) => {
  const updateIngredient = {
    [action.ingredient]: state.ingredients[action.ingredient] + 1,
  };
  const updateIngredients = updateObject(state.ingredients, updateIngredient);
  const updatedState = {
    ingredients: updateIngredients,
    totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredient],
  };
  console.log(state);
  return updateObject(state, updatedState);
};

const removeIngredient = (state, action) => {
  const updateIngredient = {
    [action.ingredient]: state.ingredients[action.ingredient] - 1,
  };
  const updateIngredients = updateObject(state.ingredients, updateIngredient);
  const updatedState = {
    ingredients: updateIngredients,
    totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredient],
  };
  console.log(state);
  return updateObject(state, updatedState);
};
const setIngredients = (state, action) => {
  return updateObject(state, {
    ingredients: {
      salad: action.ingredients.salad,
      cheese: action.ingredients.cheese,
      bacon: action.ingredients.bacon,
      meat: action.ingredients.meat,
    },
    totalPrice: 4,
    error: false,
  });
};
const fetchIngredientsFailed = (state, action) => {
  return updateObject(state, { error: true });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return addIngredient(state, action);
    case actionTypes.REMOVE_INGREDIENT:
      return removeIngredient(state, action);
    case actionTypes.SET_INGREDIENTS:
      return setIngredients(state, action);
    case actionTypes.FETCH_INGREDIENTS_FAILED:
      return fetchIngredientsFailed(state, action);
    default:
      return state;
  }
};

export default reducer;
