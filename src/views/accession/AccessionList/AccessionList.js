import React from 'react';
import accession from '../../../services/Accession';
import ListTable from "../../../components/ListTable/ListTable";
import {ACCESSION_EDIT, ACCESSION_VIEW} from "../../../config/config-urls";
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import filters from './config/filters';

const AccessionList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        filterConfig={filters}
        apiCall={accession.list}
        tableName={'accessionList'}
        actions={{
            view: ACCESSION_VIEW,
            edit: ACCESSION_EDIT
        }}
      />
    </React.Fragment>
  )
};

export default AccessionList;