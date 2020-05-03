import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import primary_type from "../../../../services/controlled_list/PrimaryType";
import PrimaryTypeForm from "../PrimaryTypeForm/PrimaryTypeForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const PrimaryTypeList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={primary_type}
        tableName={'primaryType'}
        formRender={(props) => (PrimaryTypeForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default PrimaryTypeList;
