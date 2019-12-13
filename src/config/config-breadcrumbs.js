import accessionBreadcrumbs from "./breadcrumbs/accessionBreadcrumbs";
import donorBreadcrumbs from "./breadcrumbs/donorBreadcrumbs";

const breadcrumbs = [
  ...accessionBreadcrumbs(),
  ...donorBreadcrumbs()
];

export default breadcrumbs;