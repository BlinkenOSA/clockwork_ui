import React from 'react';
import accession from '../../../services/accession/Accession';
import ListTable from "../../../components/ListTable/ListTable";
import {ACCESSION_CREATE, ACCESSION_EDIT, ACCESSION_VIEW} from "../../../config/config-urls";
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
        serviceClass={accession}
        tableName={'accessionList'}
        actions={{
            create: {
              text: 'New Accession',
              link: ACCESSION_CREATE
            },
            view: {
              link: ACCESSION_VIEW
            },
            edit: {
              link: ACCESSION_EDIT
            }
        }}
      />
    </React.Fragment>
  )
};

export default AccessionList;