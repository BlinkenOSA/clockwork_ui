import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";
import genre from "../../../../services/authority_list/Genre";

import columns from './config/columns';
import filters from "./config/filters";
import GenreForm from "../GenreForm/GenreForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";


const AccessRightsList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={genre}
        tableName={'corporation'}
        formRender={(props) => (GenreForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default AccessRightsList;
