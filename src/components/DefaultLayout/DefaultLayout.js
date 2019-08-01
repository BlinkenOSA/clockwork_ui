import React, {useState} from 'react';
import { Layout } from 'antd';
import BreadcrumbMenu from './BreadcrumbMenu'
import SideMenu from './SideMenu';
import style from './DefaultLayout.module.css';
import TopHeader from "./TopHeader";
import {BrowserRouter as Router, Route} from "react-router-dom";
import routes from '../../config/config-routes';

const { Content, Footer, Sider } = Layout;

export const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return(
    <Router>
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
            <BreadcrumbMenu />
            {routes.map((route, idx) => (
              route.component ? (
              <Route
                key={idx}
                path={route.path}
                exact={route.exact}
                render={props => (
                  <route.component {...props} />
                )} />) : null)
            )}
          </Content>
          <Footer className={style.Footer} align={'middle'}>
            Clockwork Archival Management System - Blinken OSA Archivum
          </Footer>
        </Layout>
      </Layout>
    </Router>
  )
};