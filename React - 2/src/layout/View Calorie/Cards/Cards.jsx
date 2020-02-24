import React from 'react';
import { Card, Avatar, Col, Badge, Button, Tooltip } from 'antd';
const { Meta } = Card;
const Cards = ({ loading, itemname, calorie, deleteItem }) => {
  return (
    <Col span={5} style={{ margin: '0px 24px' }}>
      <Card style={{ marginTop: 16 }} loading={loading}>
        <Meta
          avatar={<Avatar src='https://picsum.photos/seed/picsum/200/300' />}
          title={itemname}
        />
        <div className='ant-card-body'>
          Calories : <Badge>{calorie}</Badge>
          <br></br>
          <Tooltip placement='bottom' title='Click to remove item'>
            <Button
              type='danger'
              icon='logout'
              style={{ marginTop: '1rem' }}
              onClick={() => deleteItem(itemname)}
              // loading={this.state.iconLoading}
              // onClick={this.enterIconLoading}
            ></Button>
          </Tooltip>
        </div>
      </Card>
    </Col>
  );
};

export default Cards;
