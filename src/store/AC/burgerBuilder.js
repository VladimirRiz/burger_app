import * as type from './actionsType';

export const addIngredient = (name) => {
  return { type: type.ADD_INGREDIENT, ingredient: name };
};

export const removeIngredient = (name) => {
  return { type: type.REMOVE_INGREDIENT, ingredient: name };
};
