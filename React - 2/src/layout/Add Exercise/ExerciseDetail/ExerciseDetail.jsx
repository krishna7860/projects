import React from 'react';
import {
  Card,
  Typography,
  notification,
  Icon,
  Tooltip,
  Tag,
  Input,
  Button,
  message
} from 'antd';
import { connect } from 'react-redux';
import {
  fetchExercise,
  addExercise
} from '../../../redux/actions/exerciseActions';

const { Paragraph, Title } = Typography;

class ExerciseDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'true',
      exerciseHour: 0,
      addingHardwork: false
    };
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const { fetchExercise } = this.props;
    fetchExercise(id);
    setTimeout(() => {
      this.setState({ loading: false });
    }, 1000);
  }

  componentDidUpdate(newState) {
    if (this.props.match.params.id !== newState.match.params.id) {
      const { id } = this.props.match.params;
      const { fetchExercise } = this.props;
      fetchExercise(id);
    }
  }

  launchQuote = (title, quote) => {
    notification.open({
      message: title,
      description: quote,
      icon: <Icon type='smile' style={{ color: '#108ee9' }} />
    });
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addHardwork = (title, calculated) => {
    const { addExercise } = this.props;
    this.setState({ addingHardwork: true });
    setTimeout(() => {
      addExercise({ title, calculated });
      this.setState({ addingHardwork: false, exerciseHour: 0 });
      message.success(`You have Successfully saved some hours of life`);
    }, 1000);
  };

  render() {
    const { title, caloriePh, exerciseType, quote, desc } = this.props.exercise;
    let calculated = parseInt(this.state.exerciseHour) * caloriePh;
    if (isNaN(calculated)) {
      calculated = 0;
    }

    return (
      <div>
        <Card
          hoverable
          loading={this.state.loading}
          style={{ width: '400px', margin: '0 auto' }}
        >
          <Title level={4}>
            {title}{' '}
            <Tooltip title='Quote..'>
              <Icon
                type='question-circle'
                onClick={() => this.launchQuote(title, quote)}
              ></Icon>
            </Tooltip>
          </Title>
          <Paragraph>{desc}</Paragraph>
          <Paragraph style={{ textAlign: 'left' }}>
            Exercise Type : <Tag color='magenta'>{exerciseType} </Tag>
          </Paragraph>
          <Paragraph style={{ textAlign: 'left' }}>
            Calories Per Hours : <Tag color='magenta'>{caloriePh}</Tag>
          </Paragraph>
          <Paragraph>Tell us how many hours you sweat</Paragraph>
          <Input
            type='number'
            value={this.state.exerciseHour}
            name='exerciseHour'
            onChange={this.handleChange}
          />
          <Paragraph style={{ marginTop: '10px' }}>
            Calories Burned By You
          </Paragraph>
          <Title level={4} style={{ margin: '5px 0' }}>
            {calculated}
          </Title>
          <Button
            type='primary'
            shape='round'
            icon='thunderbolt'
            size='large'
            onClick={() => this.addHardwork(title, calculated)}
            loading={this.state.addingHardwork}
          >
            Add Hardwork
          </Button>
        </Card>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  exercise: state.exercise.currentExercise
});

export default connect(mapStateToProps, { fetchExercise, addExercise })(
  ExerciseDetail
);
