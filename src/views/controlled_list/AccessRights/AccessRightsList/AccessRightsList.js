import React from 'react';
import accessRights from '../../../../services/controlled_list/AccessRights';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import AccessRightsForm from "../AccessRightsForm/AccessRightsForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const AccessRightsList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={accessRights}
        tableName={'accessRights'}
        formRender={(props) => (AccessRightsForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default AccessRightsList;
