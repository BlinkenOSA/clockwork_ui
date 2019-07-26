import React from 'react';
import { Breadcrumb } from "antd";
import style from './BreadcrumbMenu.module.css'

const BreadcrumbMenu = () => {
  return(
    <Breadcrumb className={style.Breadcrumb}>
      <Breadcrumb.Item>User</Breadcrumb.Item>
      <Breadcrumb.Item>Bill</Breadcrumb.Item>
    </Breadcrumb>
  )
};

export default BreadcrumbMenu;