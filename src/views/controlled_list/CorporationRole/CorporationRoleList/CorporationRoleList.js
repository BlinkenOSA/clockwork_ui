import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import CorporationRoleForm from "../CorporationRoleForm/CorporationRoleForm";
import corporation_role from "../../../../services/controlled_list/CorporationRole";

const CorporationRoleList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={corporation_role}
        tableName={'corporationRole'}
        formOpen={'drawer'}
        actions={{edit: ''}}
        formRender={(props) => (CorporationRoleForm(props))}
      />
    </React.Fragment>
  )
};

export default CorporationRoleList;