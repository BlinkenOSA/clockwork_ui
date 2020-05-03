import React from 'react';
import carrier_type from '../../../../services/controlled_list/CarrierType';
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import CarrierTypeForm from "../CarrierTypeForm/CarrierTypeForm";
import ListTableWithDrawer from "../../../../components/ListTable/ListTableWithDrawer";

const CarrierTypeList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTableWithDrawer
        columnConfig={columns}
        serviceClass={carrier_type}
        tableName={'carrier_type'}
        formRender={(props) => (CarrierTypeForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default CarrierTypeList;
