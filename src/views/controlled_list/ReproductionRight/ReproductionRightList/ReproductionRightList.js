import React from 'react';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import reproduction_rights from "../../../../services/controlled_list/ReproductionRights";
import ReproductionRightForm from "../ReproductionRightForm/ReproductionRightForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const ReproductionRightList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={reproduction_rights}
        tableName={'reproductionRights'}
        formRender={(props) => (ReproductionRightForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default ReproductionRightList;
