import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import geo_role from "../../../../services/controlled_list/GeoRole";
import GeoRoleForm from "../GeoRoleForm/GeoRoleForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const GeoRoleList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={geo_role}
        tableName={'geoRole'}
        formRender={(props) => (GeoRoleForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default GeoRoleList;
