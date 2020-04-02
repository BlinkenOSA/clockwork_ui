import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import geo_role from "../../../../services/controlled_list/GeoRole";
import GeoRoleForm from "../GeoRoleForm/GeoRoleForm";

const GeoRoleList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={geo_role}
        tableName={'geoRole'}
        formOpen={'drawer'}
        formRender={(props) => (GeoRoleForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default GeoRoleList;