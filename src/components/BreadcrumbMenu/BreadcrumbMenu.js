import React from 'react';
import {Breadcrumb, Icon} from "antd";
import {Link, withRouter} from "react-router-dom";
import style from './BreadcrumbMenu.module.css';
import breadcrumbs from '../../config/config-breadcrumbs'

const BreadcrumbMenu = (props) => {
  const pathName = props.match.path;
  let breadcrumb = breadcrumbs.filter(b => pathName === b.path);

  if (breadcrumb.length > 0) {
    breadcrumb = breadcrumb[0].breadcrumbs
  } else {
    return null;
  }

  if (props.match.params.hasOwnProperty('action')) {
    let lastBreadcrumb = breadcrumb.pop();
    lastBreadcrumb['text'] = props.match.params.action === 'view' ?
      `View ${lastBreadcrumb['text']}` :
      `Edit ${lastBreadcrumb['text']}`;
    breadcrumb.push(lastBreadcrumb);
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
};

export default withRouter(BreadcrumbMenu);