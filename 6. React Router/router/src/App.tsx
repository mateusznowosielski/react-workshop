import * as React from 'react';
import { Layout } from 'antd';
import { Redirect, Route, Switch } from 'react-router-dom';
import Dashboard from 'scenes/dashboard/Dashboard';
import Provider from 'scenes/provider/Provider';
import Audiences from 'scenes/audiences/Audiences';
import Campaigns from 'scenes/campaigns/Campaigns';
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
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/provider/:id" component={Provider}/>
            <Route path="/audiences" component={Audiences}/>
            <Route path="/campaigns" component={Campaigns}/>
            <Route render={() => {
              return (<Redirect to="/dashboard" />)
            }} />
          </Switch>
        </Content>
      </Layout>
    </Layout>
  );
};

export default App;
