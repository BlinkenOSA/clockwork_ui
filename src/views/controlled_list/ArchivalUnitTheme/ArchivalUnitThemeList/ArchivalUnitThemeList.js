import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import ArchivalUnitThemeForm from "../ArchivalUnitThemeForm/ArchivalUnitThemeForm";
import archivalUnitTheme from "../../../../services/controlled_list/ArchivalUnitTheme";

const ArchivalUnitThemeList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={archivalUnitTheme}
        tableName={'archivalUnitTheme'}
        formOpen={'drawer'}
        formRender={(props) => (ArchivalUnitThemeForm(props))}
        actions={{edit: ''}}
      />
    </React.Fragment>
  )
};

export default ArchivalUnitThemeList;