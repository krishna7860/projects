import React from 'react';
import { PageHeader } from 'antd';
import styles from './AddExercise.module.css';
import Exercise from './Exercise/Exercise';
import { Route } from 'react-router-dom';
import ExerciseDetail from './ExerciseDetail/ExerciseDetail';
class AddExercise extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      exercises: [
        {
          title: 'Running',
          imgURL: 'https://img.icons8.com/nolan/64/running.png'
        },
        {
          title: 'Cycling',
          imgURL: 'https://img.icons8.com/dusk/64/000000/cycling-road.png'
        },
        {
          title: 'Yoga',
          imgURL: 'https://img.icons8.com/dusk/64/000000/yoga.png'
        },
        {
          title: 'Treadmill',
          imgURL: 'https://img.icons8.com/dusk/50/000000/exercise.png'
        },
        {
          title: 'Benchpress',
          imgURL: 'https://img.icons8.com/color/48/000000/bench-press.png'
        }
      ]
    };
  }

  render() {
    const { url } = this.props.match;
    const { history } = this.props;
    return (
      <>
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)'
          }}
          onBack={() => {
            history.push('/');
          }}
          title='Add Exercises'
          subTitle='“A one-hour workout is 4% of your day. No excuses."'
        />
        <div className={styles.exercises}>
          {this.state.exercises.map(item => (
            <Exercise
              title={item.title}
              key={item.title}
              imgURL={item.imgURL}
              pathname={url}
            ></Exercise>
          ))}
        </div>
        <div>
          <Route
            path={`${url}/:id`}
            render={props => <ExerciseDetail {...props} />}
          />
        </div>
      </>
    );
  }
}

export default AddExercise;
