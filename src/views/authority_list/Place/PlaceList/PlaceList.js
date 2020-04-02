import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import place from "../../../../services/authority_list/Place";
import filters from "./config/filters";
import PlaceForm from "../PlaceForm/PlaceForm";

const AccessRightsList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={place}
        tableName={'place'}
        formOpen={'drawer'}
        formRender={(props) => (PlaceForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default AccessRightsList;