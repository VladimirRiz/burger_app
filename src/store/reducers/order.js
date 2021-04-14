import * as actionTypes from '../AC/actionTypes';

const initialState = {
  order: [],
  loading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_BURGER_START:
      return {
        ...state,
        loading: true,
      };
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      const updateOrder = {
        ...action.orderData,
        id: action.orderId,
      };
      return {
        ...state,
        order: this.state.concat(updateOrder),
        loading: false,
      };
    case actionTypes.PURCHASE_BURGER_FAILED:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

export default reducer;
