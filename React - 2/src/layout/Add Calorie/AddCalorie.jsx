import React, { Component } from 'react';
import { PageHeader, Col, Form, Icon, Input, Button, message } from 'antd';
import styles from './AddCalorie.module.css';
import back from '../../ginger-cat-723.svg';
import { connect } from 'react-redux';
import { addCalories } from '../../redux/actions/calorieActions';

class AddCalorie extends Component {
  state = {
    itemname: '',
    calorie: '',
    iconLoading: false
  };

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { addCalories } = this.props;
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log('Received values of form: ', values);
        addCalories(values);
        this.setState({ iconLoading: true });
        setTimeout(() => {
          this.setState({ iconLoading: false });
          message.success(
            `Item Added ${this.state.itemname} with ${this.state.calorie} calories`
          );
        }, 1000);
      } else {
      }
    });
  };

  render() {
    const { history } = this.props;
    const { getFieldDecorator } = this.props.form;
    return (
      <div
        style={{
          background: `url(${back}) no-repeat left /cover`,
          height: '90vh',
          backgroundSize: '500px'
        }}
      >
        <PageHeader
          style={{
            border: '1px solid rgb(235, 237, 240)'
          }}
          onBack={() => {
            history.push('/');
          }}
          title='Add Calories'
          subTitle='Eat Healthy, Live Healthy'
        />
        <div className={styles.formDisplay}>
          <Col>
            <Form onSubmit={this.handleSubmit} className={styles.loginform}>
              <label style={{ float: 'left' }}>Add Food</label>
              <Form.Item>
                {getFieldDecorator('foodItem', {
                  rules: [
                    { required: true, message: 'Please input food item!' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon
                        type='pie-chart'
                        style={{ color: 'rgba(0,0,0,.25)' }}
                      />
                    }
                    name='itemname'
                    onChange={this.handleChange}
                    placeholder='Food Item'
                  />
                )}
              </Form.Item>
              <label style={{ float: 'left' }}>Calories</label>
              <Form.Item>
                {getFieldDecorator('calories', {
                  rules: [
                    { required: true, message: 'Please input your Calories' }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon
                        type='plus-circle'
                        style={{ color: 'rgba(0,0,0,.25)' }}
                      />
                    }
                    type='number'
                    name='calorie'
                    onChange={this.handleChange}
                    placeholder='Calories'
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type='primary'
                  htmlType='submit'
                  icon='plus'
                  loading={this.state.iconLoading}
                  className={styles.loginFormAdd}
                >
                  Add Calories
                </Button>
              </Form.Item>
            </Form>
          </Col>
        </div>
      </div>
    );
  }
}
const AddCalories = Form.create({ name: 'normal_login' })(AddCalorie);
export default connect(null, { addCalories })(AddCalories);
