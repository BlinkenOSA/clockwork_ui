import React from 'react';
import carrier_type from '../../../../services/controlled_list/CarrierType';
import ListTable from "../../../../components/ListTable/ListTable";
import BreadcrumbMenu from "../../../../components/BreadcrumbMenu/BreadcrumbMenu";

import columns from './config/columns';
import CarrierTypeForm from "../CarrierTypeForm/CarrierTypeForm";

const CarrierTypeList = () => {
  return(
    <React.Fragment>
      <BreadcrumbMenu />
      <ListTable
        columnConfig={columns}
        serviceClass={carrier_type}
        tableName={'carrier_type'}
        formOpen={'drawer'}
        formRender={(props) => (CarrierTypeForm(props))}
        actions={{edit: {}}}
      />
    </React.Fragment>
  )
};

export default CarrierTypeList;