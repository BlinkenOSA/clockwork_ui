import React from 'react';
import donor from '../../../services/donor/Donor';
import ListTable from "../../../components/ListTable/ListTable";
import {DONOR_CREATE, DONOR_EDIT, DONOR_VIEW} from "../../../config/config-urls";
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import filters from './config/filters';

const DonorList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        filterConfig={filters}
        apiCall={donor.list}
        tableName={'donorList'}
        actions={{
            create: DONOR_CREATE,
            view: DONOR_VIEW,
            edit: DONOR_EDIT
        }}
      />
    </React.Fragment>
  )
};

export default DonorList;