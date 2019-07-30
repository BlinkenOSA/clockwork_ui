import React, {useState} from 'react';
import { Layout } from 'antd';
import BreadcrumbMenu from './BreadcrumbMenu'
import SideMenu from './SideMenu';
import style from './DefaultLayout.module.css';
import TopHeader from "./TopHeader";

const { Content, Footer, Sider } = Layout;

export const DefaultLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

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
          <BreadcrumbMenu />
          <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
            Bill is a cat.
          </div>
        </Content>
        <Footer className={style.Footer} align={'middle'}>
          Clockwork Archival Management System - Blinken OSA Archivum
        </Footer>
      </Layout>
    </Layout>
  )
};