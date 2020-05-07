import React from 'react';
import BreadcrumbMenu from "../../../components/BreadcrumbMenu/BreadcrumbMenu";
import ArchivalUnitSelectForm from "./ArchivalUnitSelectForm";

const ArchivalUnitSelect = (props) => {
  return (
    <React.Fragment>
      <BreadcrumbMenu />
      <ArchivalUnitSelectForm/>
    </React.Fragment>
  )
};

export default ArchivalUnitSelect;
