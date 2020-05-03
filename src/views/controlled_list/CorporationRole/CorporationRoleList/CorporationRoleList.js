import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import CorporationRoleForm from "../CorporationRoleForm/CorporationRoleForm";
import corporation_role from "../../../../services/controlled_list/CorporationRole";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const CorporationRoleList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={corporation_role}
        tableName={'corporationRole'}
        formRender={(props) => (CorporationRoleForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default CorporationRoleList;
