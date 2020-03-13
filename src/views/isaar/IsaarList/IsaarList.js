import React from 'react';
import isaar from '../../../services/isaar/Isaar';
import ListTable from "../../../components/ListTable/ListTable";
import {ISAAR_CREATE, ISAAR_EDIT, ISAAR_VIEW} from "../../../config/config-urls";
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import filters from './config/filters';

const IsaarList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        filterConfig={filters}
        serviceClass={isaar}
        tableName={'accessionList'}
        actions={{
            create: {
              text: 'New ISAAR-CPF',
              link: ISAAR_CREATE
            },
            view: {
              link: ISAAR_VIEW
            },
            edit: {
              link: ISAAR_EDIT
            }
        }}
      />
    </React.Fragment>
  )
};

export default IsaarList;