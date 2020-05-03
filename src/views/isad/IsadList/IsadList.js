import React from 'react';
import isad from '../../../services/isad/Isad';
import ListTable from "../../../components/ListTable/ListTable";
import {ISAD_VIEW, ISAD_EDIT, ISAD_CREATE} from "../../../config/config-urls";
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import filters from './config/filters';
import {Tooltip} from "antd";
import {Link} from "react-router-dom";
import { PlusOutlined, EyeOutlined, EditOutlined } from "@ant-design/icons";

const IsadList = () => {
  const renderCustomAddButton = (record) => {
    if (record.status === 'Not exists') {
      return (
        <Tooltip title={'Create'}>
          <Link to={ISAD_CREATE.replace(':id', record.id)} className={'ant-btn ant-btn-sm ant-btn-icon-only'}>
            {<PlusOutlined/>}
          </Link>
        </Tooltip>
      )
    }
  };

  const renderCustomViewButton = (record) => {
    if (record.status !== 'Not exists') {
      return (
        <Tooltip title={'View'}>
          <Link to={ISAD_VIEW.replace(':id', record.isad)} className={'ant-btn ant-btn-sm ant-btn-icon-only'}>
            {<EyeOutlined/>}
          </Link>
        </Tooltip>
      )
    }
  };

  const renderCustomEditButton = (record) => {
    if (record.status !== 'Not exists') {
      return (
        <Tooltip title={'Edit'}>
          <Link to={ISAD_EDIT.replace(':id', record.isad)} className={'ant-btn ant-btn-sm ant-btn-icon-only'}>
            {<EditOutlined/>}
          </Link>
        </Tooltip>
      )
    }
  };

  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={isad}
        tableName={'isad'}
        renderCustomViewButton={renderCustomViewButton}
        renderCustomAddButton={renderCustomAddButton}
        renderCustomEditButton={renderCustomEditButton}
        actions={{
          view: {
            link: ISAD_VIEW
          },
          edit: {
            link: ISAD_EDIT
          }
        }}
      />
    </React.Fragment>
  )
};

export default IsadList;
