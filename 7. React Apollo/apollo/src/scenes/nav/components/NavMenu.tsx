import * as React from 'react';
import { Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';
import 'scenes/nav/components/styles/navMenu.less';

const NavMenu: React.FunctionComponent<any> = () => {
  return (
    <Menu mode="inline" style={{borderRight: 0, textAlign: 'left'}}>
      <Menu.Item key="dashboard">
        <Link to="/dashboard">
          <Icon type="appstore" />
          <span className="nav-text">My Dashboard</span>
        </Link>
      </Menu.Item>
      <Menu.Item key="connections">
        <Link to="/connections">
          <Icon type="global"/>
          <span className="nav-text">Connections</span>
        </Link>
      </Menu.Item>
    </Menu>
  )
};

export default NavMenu;