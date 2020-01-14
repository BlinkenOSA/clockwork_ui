import accessionBreadcrumbs from "./breadcrumbs/accession/accessionBreadcrumbs";
import donorBreadcrumbs from "./breadcrumbs/donor/donorBreadcrumbs";
import accessRightsBreadcrumbs from "./breadcrumbs/controlled_list/accessRightsBreadcrumbs";

const breadcrumbs = [
  ...accessionBreadcrumbs(),
  ...donorBreadcrumbs(),
  ...accessRightsBreadcrumbs()
];

export default breadcrumbs;