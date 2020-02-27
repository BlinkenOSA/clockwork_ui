import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";
import genre from "../../../../services/authority_list/Genre";

import columns from './config/columns';
import filters from "./config/filters";
import GenreForm from "../GenreForm/GenreForm";


const AccessRightsList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={genre}
        tableName={'corporation'}
        formOpen={'drawer'}
        formRender={(props) => (GenreForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default AccessRightsList;