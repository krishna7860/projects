import { ADD_CALORIE, VIEW_CALORIES, DELETE_FOOD_ITEM } from '../actionType';

const initialState = {
  foodItems: []
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADD_CALORIE: {
      let foodItems = [...state.foodItems];
      foodItems.push(payload);
      return {
        ...state,
        foodItems
      };
    }
    case VIEW_CALORIES:
      return {
        ...state
      };
    case DELETE_FOOD_ITEM: {
      let foodItems = [...state.foodItems];

      foodItems.forEach((item, index) => {
        if (item.foodItem === payload) {
          foodItems.splice(index, 1);
        }
      });
      return {
        ...state,
        foodItems
      };
    }
    default:
      return {
        ...state
      };
  }
};
