import style from "../../../components/BreadcrumbMenu/BreadcrumbMenu.module.css";
import {Breadcrumb} from "antd";
import {Link} from "react-router-dom";
import React from "react";
import { HomeOutlined } from '@ant-design/icons';
import {FINDING_AIDS} from "../../../config/config-urls";

const ContainerListBreadcrumb = ({title, ...props}) => {
  return (
    <Breadcrumb className={style.Breadcrumb}>
      <Breadcrumb.Item>
        <Link to={'/'}>
          <HomeOutlined />
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <Link to={FINDING_AIDS}>
          Finding Aids
        </Link>
      </Breadcrumb.Item>
      <Breadcrumb.Item>{title}</Breadcrumb.Item>
      <Breadcrumb.Item>Containers</Breadcrumb.Item>
    </Breadcrumb>
  )
};

export default ContainerListBreadcrumb;

