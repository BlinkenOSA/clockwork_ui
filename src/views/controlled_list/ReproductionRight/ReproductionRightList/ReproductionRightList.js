import React from 'react';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import reproduction_rights from "../../../../services/controlled_list/ReproductionRights";
import ReproductionRightForm from "../ReproductionRightForm/ReproductionRightForm";

const ReproductionRightList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={reproduction_rights}
        tableName={'reproductionRights'}
        formOpen={'drawer'}
        actions={{edit: ''}}
        formRender={(props) => (ReproductionRightForm(props))}
      />
    </React.Fragment>
  )
};

export default ReproductionRightList;