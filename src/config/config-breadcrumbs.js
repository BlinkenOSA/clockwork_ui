import accessionBreadcrumbs from "./breadcrumbs/accession/accessionBreadcrumbs";
import donorBreadcrumbs from "./breadcrumbs/donor/donorBreadcrumbs";
import controlledListBreadcrumbs from "./breadcrumbs/controlled_list/controlledListBreadcrumbs";
import authorityListBreadcrumbs from "./breadcrumbs/authority_list/authorityListBreadcrumbs";
import archivalUnitBreadcrumbs from "./breadcrumbs/archival_unit/archivalUnitBreadcrumbs";

const breadcrumbs = [
  ...accessionBreadcrumbs(),
  ...donorBreadcrumbs(),
  ...archivalUnitBreadcrumbs(),
  ...authorityListBreadcrumbs(),
  ...controlledListBreadcrumbs()
];

export default breadcrumbs;