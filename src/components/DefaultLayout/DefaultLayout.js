import React, {Suspense, useState} from 'react';
import { Layout } from 'antd';
import SideMenu from './SideMenu';
import TopHeader from "./TopHeader";
import {Route, Switch} from "react-router-dom";
import routes from '../../config/config-routes';
import style from './DefaultLayout.module.css';

const { Content, Sider } = Layout;

const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const loading = () => <p>Loading...</p>;

  return(
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        width={300}
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'sticky',
          top: 0,
          left: 0,
        }}
      >
        <SideMenu collapsed={collapsed} />
      </Sider>
      <Layout className="site-layout">
        <TopHeader />
        <Content className={style.Content}>
          <Suspense fallback={loading()}>
            <Switch>
              {routes.map((route, idx) => (
                route.component ?
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  render={(props) => <route.component {...props} action={route.action}/>}
                /> : null
              ))}
            </Switch>
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
};

export default DefaultLayout;
