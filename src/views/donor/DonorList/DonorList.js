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
        serviceClass={donor}
        tableName={'donorList'}
        actions={{
            create: {
              text: 'New Donor',
              link: DONOR_CREATE
            },
            view: {
              link: DONOR_VIEW
            },
            edit: {
              link: DONOR_EDIT
            }
        }}
      />
    </React.Fragment>
  )
};

export default DonorList;