import React from 'react';
import { connect } from 'react-redux';
import { viewCalories } from '../../redux/actions/calorieActions';
import { fetchExercise } from '../../redux/actions/exerciseActions';
import {
  Row,
  Col,
  List,
  Typography,
  Card,
  Statistic,
  Icon,
  PageHeader
} from 'antd';
import styles from './HealthStatus.module.css';

const { Paragraph, Title } = Typography;
const healthMeter = [
  ['Healthy', 'smile'],
  ['Average', 'meh'],
  ['Junky', 'frown'],
  ['Need Medication', 'fire']
];
let icon = 'smile';
let healthMeterCurrent = 'No Data';

class HealthStatus extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      consumedCalories: 0,
      burnedCalories: 0,
      finalCalories: 0
    };
  }

  componentDidMount() {
    const { calories, exercise } = this.props;
    let { consumedCalories, burnedCalories } = this.state;
    calories.forEach(item => {
      let count = Number(item.calories);
      consumedCalories += count;
    });
    exercise.forEach(item => {
      let count = Number(item.calculated);
      burnedCalories += count;
    });
    let finalCalories = Math.abs(consumedCalories - burnedCalories);
    this.setState({ consumedCalories, burnedCalories, finalCalories });

    if (finalCalories < 1000) {
      healthMeterCurrent = healthMeter[0][0];
      icon = healthMeter[0][1];
    } else if (finalCalories > 1000 && finalCalories < 1500) {
      healthMeterCurrent = healthMeter[1][0];
      icon = healthMeter[1][1];
    } else if (finalCalories > 1500 && finalCalories < 2000) {
      healthMeterCurrent = healthMeter[2][0];
      icon = healthMeter[2][1];
    } else if (finalCalories > 2000) {
      healthMeterCurrent = healthMeter[3][0];
      icon = healthMeter[3][1];
    } else if (finalCalories === 0) {
      healthMeterCurrent = 'No Data';
    }
  }
  render() {
    const { calories, exercise, history } = this.props;
    let { consumedCalories, burnedCalories } = this.state;
    return (
      <div>
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)'
          }}
          onBack={() => {
            history.push('/');
          }}
          title='Health Status'
          subTitle='“A one-hour workout is 4% of your day. No excuses."'
        />
        <div className={styles.healthStatus}>
          <Card hoverable>
            <Statistic
              title='Healthy'
              value={burnedCalories}
              precision={2}
              valueStyle={{ color: '#3f8600' }}
              prefix={<Icon type='arrow-up' />}
              suffix='cal'
            />
          </Card>
          <Card hoverable>
            <Icon type={icon} theme='twoTone' style={{ fontSize: '2rem' }} />
            <Title level={4}>Healthy Meter: {healthMeterCurrent} </Title>
          </Card>
          <Card hoverable>
            <Statistic
              title='Unhealthy'
              value={consumedCalories}
              precision={2}
              valueStyle={{ color: '#cf1322' }}
              prefix={<Icon type='arrow-down' />}
              suffix='cal'
            />
          </Card>
        </div>
        <Row
          gutter={12}
          style={{
            margin: '2rem auto',
            textAlign: 'center',
            width: '80%'
          }}
        >
          <Col span={12}>
            <List
              header={
                <div style={{ fontWeight: 'bold' }}>Calories Consumed</div>
              }
              footer={
                <div style={{ fontWeight: 'bold' }}>
                  Total Calories Consumed : {consumedCalories}
                </div>
              }
              bordered
              style={{ background: 'white' }}
              dataSource={calories}
              renderItem={item => (
                <List.Item>
                  <Paragraph>
                    You Eat {item.foodItem} has {item.calories} Calories
                  </Paragraph>
                </List.Item>
              )}
            />
          </Col>
          <Col span={12}>
            <List
              header={<div style={{ fontWeight: 'bold' }}>Calories Burned</div>}
              footer={
                <div style={{ fontWeight: 'bold' }}>
                  Total Calories Burned : {burnedCalories}
                </div>
              }
              bordered
              style={{ background: 'white' }}
              dataSource={exercise}
              renderItem={item => (
                <List.Item>
                  <Paragraph>
                    Calaroies Burned By {item.title} are {item.calculated}
                  </Paragraph>
                </List.Item>
              )}
            />
          </Col>
        </Row>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  calories: state.calorie.foodItems,
  exercise: state.exercise.addedExercises
});

export default connect(mapStateToProps, { viewCalories, fetchExercise })(
  HealthStatus
);
