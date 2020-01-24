import accessionBreadcrumbs from "./breadcrumbs/accession/accessionBreadcrumbs";
import donorBreadcrumbs from "./breadcrumbs/donor/donorBreadcrumbs";
import controlledListBreadcrumbs from "./breadcrumbs/controlled_list/controlledListBreadcrumbs";

const breadcrumbs = [
  ...accessionBreadcrumbs(),
  ...donorBreadcrumbs(),
  ...controlledListBreadcrumbs()
];

export default breadcrumbs;