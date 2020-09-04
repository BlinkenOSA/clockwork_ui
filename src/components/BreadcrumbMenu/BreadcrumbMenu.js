import React, {useEffect, useState} from 'react';
import {Breadcrumb} from "antd";
import {Link, withRouter} from "react-router-dom";
import breadcrumbs from '../../config/config-breadcrumbs'
import { HomeOutlined } from '@ant-design/icons';

import style from './BreadcrumbMenu.module.css';

const BreadcrumbMenu = ({serviceClass, breadcrumbRender, action, match, ...props}) => {
  const [breadcrumb, setBreadcrumb] = useState([]);

  // componentDidMount
  useEffect(() => {
    const recordID = match.params.id;
    let bc = breadcrumbs.filter(b => match.path === b.path);

    if (bc.length > 0) {
      bc = [...bc[0]['breadcrumbs']];
    } else {
      bc = [];
    }

    if (serviceClass && breadcrumbRender && recordID) {
      serviceClass.read(recordID).then((response) => {
        const txt = action === 'view' ?
          `View: ${breadcrumbRender(response.data)}` :
          `Edit: ${breadcrumbRender(response.data)}`;
        bc.push({text: txt});
        setBreadcrumb(bc);
      });
    } else {
      setBreadcrumb(bc);
    }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Breadcrumb className={style.Breadcrumb}>
      <Breadcrumb.Item>
        <Link to={'/'}>
          <HomeOutlined />
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
