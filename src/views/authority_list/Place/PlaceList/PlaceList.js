import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import place from "../../../../services/authority_list/Place";
import filters from "./config/filters";
import PlaceForm from "../PlaceForm/PlaceForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const AccessRightsList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={place}
        tableName={'place'}
        formRender={(props) => (PlaceForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default AccessRightsList;
