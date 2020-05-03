import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import restriction_reason from "../../../../services/controlled_list/RestrictionReason";
import RestrictionReasonForm from "../RestrictionReasonForm/RestrictionReasonForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const RestrictionReasonList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={restriction_reason}
        tableName={'restrictionReason'}
        formRender={(props) => (RestrictionReasonForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default RestrictionReasonList;
