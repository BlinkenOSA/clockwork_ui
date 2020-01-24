import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import restriction_reason from "../../../../services/controlled_list/RestrictionReason";
import RestrictionReasonForm from "../RestrictionReasonForm/RestrictionReasonForm";

const RestrictionReasonList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={restriction_reason}
        tableName={'restrictionReason'}
        formOpen={'drawer'}
        actions={{edit: ''}}
        formRender={(props) => (RestrictionReasonForm(props))}
      />
    </React.Fragment>
  )
};

export default RestrictionReasonList;