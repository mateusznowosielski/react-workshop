import * as React from 'react';
import { Layout } from 'antd';
import NavMenu from 'scenes/nav/components/NavMenu';

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
      <NavMenu />
    </Sider>
  )
}

export default Nav;