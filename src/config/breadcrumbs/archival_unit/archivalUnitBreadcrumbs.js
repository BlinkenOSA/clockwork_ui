import {
  ARCHIVAL_UNIT_LIST
} from "../../config-urls";

const archivalUnitBreadcrumbs = () => {
  const singularText = 'Archival Unit';
  return [{
    path: ARCHIVAL_UNIT_LIST,
    breadcrumbs: [
      { text: singularText }
    ]
  }];
};

export default archivalUnitBreadcrumbs;
