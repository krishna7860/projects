import { ADD_CALORIE, VIEW_CALORIES, DELETE_FOOD_ITEM } from '../actionType';

export const addCalories = foodItem => {
  return {
    type: ADD_CALORIE,
    payload: foodItem
  };
};

export const viewCalories = () => {
  return {
    type: VIEW_CALORIES
  };
};

export const deleteFoodItem = foodItem => {
  return {
    type: DELETE_FOOD_ITEM,
    payload: foodItem
  };
};
