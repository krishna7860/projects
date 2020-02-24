import { FETCH_EXERCISE, ADD_EXERCISE } from '../actionType';

export const fetchExercise = exerciseName => ({
  type: FETCH_EXERCISE,
  payload: exerciseName
});

export const addExercise = exercise => ({
  type: ADD_EXERCISE,
  payload: exercise
});
