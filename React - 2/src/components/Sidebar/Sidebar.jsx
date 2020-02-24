import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';

const { SubMenu } = Menu;

class Sider extends React.Component {
  // submenu keys of first level
  rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

  state = {
    openKeys: ['sub1']
  };

  onOpenChange = openKeys => {
    const latestOpenKey = openKeys.find(
      key => this.state.openKeys.indexOf(key) === -1
    );
    if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
      this.setState({ openKeys });
    } else {
      this.setState({
        openKeys: latestOpenKey ? [latestOpenKey] : []
      });
    }
  };

  render() {
    return (
      <Menu
        mode='inline'
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 200, height: '100%' }}
      >
        <SubMenu
          key='sub1'
          title={
            <span>
              <Icon type='mail' />
              <span>Calories</span>
            </span>
          }
        >
          <Menu.Item key='1'>
            <Link to='/add-calories'>Add Calories</Link>
          </Menu.Item>
          <Menu.Item key='2'>
            <Link to='/view-calories'>View Calories</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key='sub2'
          title={
            <span>
              <Icon type='appstore' />
              <span>Exercise</span>
            </span>
          }
        >
          <Menu.Item key='5'>
            <Link to='/add-exercise'>Add Exercise</Link>
          </Menu.Item>
          <Menu.Item key='6'>
            <Link to='/live-tracker'>Live Tracker</Link>
          </Menu.Item>
        </SubMenu>
        <SubMenu
          key='sub4'
          title={
            <span>
              <Icon type='setting' />
              <span>Settings</span>
            </span>
          }
        >
          <Menu.Item key='9'>
            <Link to='/health-chart'>Health Chart</Link>
          </Menu.Item>
          <Menu.Item key='10'>
            <Link to='/health-status'>Health Status</Link>
          </Menu.Item>
          <Menu.Item key='11'>
            <Link to='/report'>Report</Link>
          </Menu.Item>
        </SubMenu>
      </Menu>
    );
  }
}

export default Sider;
