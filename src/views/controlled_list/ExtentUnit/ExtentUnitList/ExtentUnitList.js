import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import extent_unit from "../../../../services/controlled_list/ExtentUnit";
import ExtentUnitForm from "../ExtentUnitForm/ExtentUnitForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const ExtentUnitList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={extent_unit}
        tableName={'extentUnit'}
        formRender={(props) => (ExtentUnitForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default ExtentUnitList;
