import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AddCalorie from '../Add Calorie/AddCalorie';
import NotFound from '../../components/NotFound/NotFound';
import ViewCalories from '../View Calorie/ViewCalories';
import AddExercise from '../Add Exercise/AddExercise';
import HealthStatus from '../Health Status/HealthStatus';
import Home from '../Home/Home';

const Content = () => {
  return (
    <div style={{ marginBottom: '2rem' }}>
      <Switch>
        <Route path='/' exact component={Home}></Route>
        <Route path='/add-calories' component={AddCalorie}></Route>
        <Route path='/view-calories' component={ViewCalories}></Route>
        <Route path='/add-exercise' component={AddExercise} />
        <Route path='/health-status' component={HealthStatus} />
        <Route component={NotFound}></Route>
      </Switch>
    </div>
  );
};

export default Content;
