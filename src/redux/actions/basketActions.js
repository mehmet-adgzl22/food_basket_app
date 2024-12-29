import { v4 } from 'uuid';
import api from '../../utils/api';
import ActionTypes from '../actionTypes';


export const getCart = () => (dispatch) => {
  dispatch({ type: ActionTypes.CART_LOADING });

  api
    .get('/cart')
    .then((res) =>
      dispatch({ type: ActionTypes.CART_SUCCESS, payload: res.data })
    )
    .catch((err) => dispatch({ type: ActionTypes.CART_ERROR, payload: err }));
};

export const createItem = (item) => (dispatch) => {
  
  const newItem = {
    id: v4(),
    productId: item.id,
    category: item.category,
    title: item.title,
    price: item.price,
    photo: item.photo,
    amount: 1,
  };

 
  api
    .post('/cart', newItem)
    
    .then(() => dispatch({ type: ActionTypes.CREATE_ITEM, payload: newItem }));
};

export const updateItem = (id, newAmount) => (dispatch) => {

  api
    .patch(`/cart/${id}`, { amount: newAmount })
    
    .then((res) =>
      dispatch({ type: ActionTypes.UPDATE_ITEM, payload: res.data })
    );
};

export const deleteItem = (id) => (dispatch) => {
  api
    .delete(`/cart/${id}`)
    .then(() => dispatch({ type: ActionTypes.DELETE_ITEM, payload: id }));
};
