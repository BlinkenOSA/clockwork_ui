import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import extent_unit from "../../../../services/controlled_list/ExtentUnit";
import ExtentUnitForm from "../ExtentUnitForm/ExtentUnitForm";

const ExtentUnitList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={extent_unit}
        tableName={'extentUnit'}
        formOpen={'drawer'}
        formRender={(props) => (ExtentUnitForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default ExtentUnitList;