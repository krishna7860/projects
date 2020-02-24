import { combineReducers } from 'redux';
import calories from './reducers/calorieReducer';
import exercise from './reducers/exerciseReducers';
export default combineReducers({
  calorie: calories,
  exercise: exercise
});
