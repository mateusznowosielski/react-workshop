import * as React from 'react';
import { Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';

const NavMenu: React.FunctionComponent<any> = () => {
  return (
    <Menu mode="inline" style={{borderRight: 0, textAlign: 'left'}}>
      <Menu.Item key="dashboard">
        <Link to="/dashboard">
          <Icon type="appstore" />
          <span className="nav-text">My Dashboard</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="provider">
        <Link to="/provider/123456">
            <Icon type="team"/>
            <span className="nav-text">Provider</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="audiences">
        <Link to="/audiences">
          <Icon type="team"/>
          <span className="nav-text">Audiences</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="campaign">
        <Link to="/campaigns">
          <Icon type="pie-chart" />
          <span className="nav-text">Campaigns</span>
        </Link>
      </Menu.Item>
    </Menu>
  )
};

export default NavMenu;