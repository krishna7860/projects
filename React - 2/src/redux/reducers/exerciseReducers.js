import { FETCH_EXERCISE, ADD_EXERCISE } from '../actionType';

const initialState = {
  exercises: [
    {
      title: 'Running',
      caloriePh: 120,
      exerciseType: 'High',
      quote: 'Running is not just exercise; it is a lifestyle.',
      desc:
        'Running is a method of terrestrial locomotion allowing humans and other animals to move rapidly on foot'
    },
    {
      title: 'Cycling',
      caloriePh: 80,
      exerciseType: 'Moderate',
      quote: 'The only bad workout is the one that didn’t happen.',
      desc:
        'Cycling, also called biking or bicycling, is the use of bicycles for transport, recreation, exercise or sport. People engaged in cycling are referred to as "cyclists", "bikers"'
    },
    {
      title: 'Yoga',
      caloriePh: 30,
      exerciseType: 'Moderate',
      quote: 'The body achieves what the mind believes.',
      desc:
        'Yoga as exercise is a physical activity consisting largely of asanas, often connected by flowing sequences called vinyasas'
    },
    {
      title: 'Treadmill',
      caloriePh: 75,
      exerciseType: 'Easy',
      quote: 'Exercise equals endorphins. Endorphins make you happy.',
      desc:
        'A treadmill is a device generally for walking, running or climbing while staying in the same place. '
    },
    {
      title: 'Benchpress',
      caloriePh: 115,
      exerciseType: 'High',
      quote: 'Exercise is therapy..',
      desc:
        'The bench press is an upper-body weight training exercise in which the trainee presses a weight upwards while lying on a weight training bench.'
    }
  ],
  addedExercises: [],
  currentExercise: {}
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case FETCH_EXERCISE: {
      let exercises = [...state.exercises];
      let exercise = exercises.find(item => item.title === payload);
      return {
        ...state,
        currentExercise: exercise
      };
    }
    case ADD_EXERCISE: {
      let addedExercises = [...state.addedExercises];
      addedExercises.push(payload);
      return {
        ...state,
        addedExercises
      };
    }
    default:
      return {
        ...state
      };
  }
};
