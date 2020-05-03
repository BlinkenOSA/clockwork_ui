import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import ArchivalUnitThemeForm from "../ArchivalUnitThemeForm/ArchivalUnitThemeForm";
import archivalUnitTheme from "../../../../services/controlled_list/ArchivalUnitTheme";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const ArchivalUnitThemeList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={archivalUnitTheme}
        tableName={'archivalUnitTheme'}
        formRender={(props) => (ArchivalUnitThemeForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default ArchivalUnitThemeList;
