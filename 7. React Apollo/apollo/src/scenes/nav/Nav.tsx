import * as React from 'react';
import { Layout } from 'antd';
import NavSearch from 'scenes/nav/components/NavSearch';
import NavMenu from 'scenes/nav/components/NavMenu';
import 'scenes/nav/styles/nav.less';

const { Sider } = Layout;

const Nav: React.FunctionComponent<any> = () => {
  return (
    <Sider
      width={200}
      style={{
        overflowX: 'hidden',
        height: '100vh',
        position: 'fixed',
        padding: '10px',
        left: 0,
        background: '#fff',
        borderRight: '1px solid #e8e8e8',
      }}
    >
      <div className="nav-item">
        <NavSearch />
      </div>
      <NavMenu />
    </Sider>
  )
};

export default Nav;