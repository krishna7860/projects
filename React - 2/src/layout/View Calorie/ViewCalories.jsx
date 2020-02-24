import React from 'react';
import { PageHeader } from 'antd';
import Cards from './Cards/Cards';
import styles from './ViewCalories.module.css';
import { connect } from 'react-redux';
import {
  viewCalories,
  deleteFoodItem
} from '../../redux/actions/calorieActions';
import placeholder from '../../flame-no-connection.svg';
class ViewCalories extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    const { viewCalories } = this.props;
    viewCalories();

    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  deleteItem = item => {
    const { deleteFoodItem } = this.props;
    deleteFoodItem(item);
  };

  render() {
    const { history, foodItems } = this.props;
    return (
      <div>
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)'
          }}
          onBack={() => {
            history.push('/');
          }}
          title='View Calories'
          subTitle='“Food is an important part of a balanced diet.”  —Fran Lebowitz'
        />
        <div className={styles.calorieView}>
          {foodItems.length === 0 ? (
            <div style={{ margin: '0 auto' }}>
              <img src={placeholder} alt='placeholder' />
              <h1>No Calories Added, Happy Eating</h1>
            </div>
          ) : (
            foodItems.map(item => (
              <Cards
                loading={this.state.loading}
                itemname={item.foodItem}
                calorie={item.calories}
                deleteItem={this.deleteItem}
              ></Cards>
            ))
          )}
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  foodItems: state.calorie.foodItems
});

export default connect(mapStateToProps, { viewCalories, deleteFoodItem })(
  ViewCalories
);
