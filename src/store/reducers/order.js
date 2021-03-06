import * as actionTypes from '../AC/actionTypes';
import { updateObject } from '../utility';

const initialState = {
  orders: [],
  loading: false,
  purchased: false,
};

const purchaseInit = (state, action) => {
  return updateObject(state, { purchased: false });
};
const purchaseBurgerStart = (state, action) => {
  return updateObject(state, { loading: true });
};
const purchaseBurgerSuccess = (state, action) => {
  const updateOrder = updateObject(action.orderData, { id: action.orderId });
  return updateObject(state, {
    loading: false,
    purchased: true,
    orders: state.orders.concat(updateOrder),
  });
};

const purchaseBurgerFailed = (state, action) => {
  return updateObject(state, { loading: false });
};

const fetchOrderStart = (state, action) => {
  return updateObject(state, { loading: true });
};

const fetchOrdersSuccess = (state, action) => {
  return updateObject(state, { orders: action.orders, loading: false });
};

const fetchOrderFail = (state, action) => {
  return updateObject(state, { loading: false });
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PURCHASE_INIT:
      return purchaseInit(state, action);
    case actionTypes.PURCHASE_BURGER_START:
      return purchaseBurgerStart(state, action);
    case actionTypes.PURCHASE_BURGER_SUCCESS:
      return purchaseBurgerSuccess(state, action);
    case actionTypes.PURCHASE_BURGER_FAIL:
      return purchaseBurgerFailed(state, action);
    case actionTypes.FETCH_ORDERS_START:
      return fetchOrderStart(state, action);
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return fetchOrdersSuccess(state, action);
    case actionTypes.FETCH_ORDERS_FAIL:
      return fetchOrderFail(state, action);
    default:
      return state;
  }
};

export default reducer;
