import accessionBreadcrumbs from "./breadcrumbs/accession/accessionBreadcrumbs";
import donorBreadcrumbs from "./breadcrumbs/donor/donorBreadcrumbs";
import controlledListBreadcrumbs from "./breadcrumbs/controlled_list/controlledListBreadcrumbs";
import authorityListBreadcrumbs from "./breadcrumbs/authority_list/authorityListBreadcrumbs";

const breadcrumbs = [
  ...accessionBreadcrumbs(),
  ...donorBreadcrumbs(),
  ...authorityListBreadcrumbs(),
  ...controlledListBreadcrumbs()
];

export default breadcrumbs;