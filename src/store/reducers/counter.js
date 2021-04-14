import * as actionTypes from '../AC/actionsType';

const INGREDIENTS_PRICE = {
  salad: 0.4,
  cheese: 0.5,
  bacon: 1.5,
  meat: 1.7,
};

const initialState = {
  ingredients: {
    salad: 0,
    bacon: 0,
    meat: 0,
    cheese: 0,
  },
  totalPrice: 4,
};

const counter = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] + 1,
        },
        totalPrice: state.totalPrice + INGREDIENTS_PRICE[action.ingredient],
      };
    case actionTypes.REMOVE_INGREDIENT:
      return {
        ...state,
        ingredients: {
          ...state.ingredients,
          [action.ingredient]: state.ingredients[action.ingredient] - 1,
        },
        totalPrice: state.totalPrice - INGREDIENTS_PRICE[action.ingredient],
      };
    default:
      return state;
  }
};

export default counter;
