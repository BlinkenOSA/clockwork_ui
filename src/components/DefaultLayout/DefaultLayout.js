import React, {Suspense, useState} from 'react';
import { Layout } from 'antd';
import SideMenu from './SideMenu';
import style from './DefaultLayout.module.css';
import TopHeader from "./TopHeader";
import {Route, Switch} from "react-router-dom";
import routes from '../../config/config-routes';
import {BreadcrumbMenu} from "../BreadcrumbMenu/BreadcrumbMenu";

const { Content, Footer, Sider } = Layout;

export const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  const loading = () => <p>Loading...</p>;

  return(
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={() => setCollapsed(!collapsed)}
        width={300}
      >
        <SideMenu collapsed={collapsed} />
      </Sider>
      <Layout>
        <TopHeader />
        <Content style={{ margin: '0 30px' }}>
          <Suspense fallback={loading()}>
            <BreadcrumbMenu />
            <Switch>
              {routes.map((route, idx) => (
                route.component ?
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}
                /> : null
              ))}
            </Switch>
          </Suspense>
        </Content>
        <Footer className={style.Footer} align={'middle'}>
          Clockwork Archival Management System - Blinken OSA Archivum
        </Footer>
      </Layout>
    </Layout>
  )
};