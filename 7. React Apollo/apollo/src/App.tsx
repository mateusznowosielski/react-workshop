import * as React from 'react';
import { Layout, message } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';
import Connections from 'scenes/connections/Connections';
import Dashboard from 'scenes/dashboard/Dashboard';
import Provider from 'scenes/provider/Provider';
import Nav from 'scenes/nav/Nav';
import 'App.less';

const { Content } = Layout;

const App: React.FunctionComponent<any> = () => {
  return (
    <Layout>
      <Nav />
      <Layout style={{marginLeft: '200px'}}>
        <Content style={{background: '#fff', padding: 4, margin: 0, minHeight: 280}}>
          <Switch>
            <Route path="/connections" component={Connections}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/provider/:id" component={Provider}/>
            <Route render={() => {
              message.error('Wrong URL!');
              return (<Redirect to="/dashboard" />)
            }} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
