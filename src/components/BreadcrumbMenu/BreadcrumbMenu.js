import React from 'react';
import {Breadcrumb, Icon} from "antd";
import {Link, withRouter} from "react-router-dom";
import style from './BreadcrumbMenu.module.css';
import breadcrumbs from '../../config/config-breadcrumbs'

export const BreadcrumbMenu = withRouter((props) => {
  const pathName = props.location.pathname;
  let breadcrumb = breadcrumbs.filter(b => pathName === b.path);

  if (breadcrumb.length > 0) {
    breadcrumb = breadcrumb[0].breadcrumbs
  } else {
    return null;
  }

  return(
    <Breadcrumb className={style.Breadcrumb} align={'right'}>
      <Breadcrumb.Item>
        <Link to={'/'}>
          <Icon type="home" />
        </Link>
      </Breadcrumb.Item>
      {breadcrumb.map((b, idx) => {
        return(
          <Breadcrumb.Item key={idx}>
            {b.link ? <Link to={b.link}>{b.text}</Link> : b.text}
          </Breadcrumb.Item>
        )
      })}
    </Breadcrumb>
  )
});
