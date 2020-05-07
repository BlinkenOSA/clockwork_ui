import accessionBreadcrumbs from "./breadcrumbs/accession/accessionBreadcrumbs";
import donorBreadcrumbs from "./breadcrumbs/donor/donorBreadcrumbs";
import controlledListBreadcrumbs from "./breadcrumbs/controlled_list/controlledListBreadcrumbs";
import authorityListBreadcrumbs from "./breadcrumbs/authority_list/authorityListBreadcrumbs";
import archivalUnitBreadcrumbs from "./breadcrumbs/archival_unit/archivalUnitBreadcrumbs";
import isaarBreadcrumbs from "./breadcrumbs/isaar/isaarBreadcrumbs";
import userBreadcrumbs from "./breadcrumbs/user/userBreadcrumbs";
import isadBreadcrumbs from "./breadcrumbs/isad/isadBreadcrumbs";
import findingAidsBreadcrumbs from "./breadcrumbs/finding_aids/findingAidsBreadcrumbs";

const breadcrumbs = [
  ...accessionBreadcrumbs(),
  ...donorBreadcrumbs(),
  ...archivalUnitBreadcrumbs(),
  ...isaarBreadcrumbs(),
  ...isadBreadcrumbs(),
  ...authorityListBreadcrumbs(),
  ...controlledListBreadcrumbs(),
  ...findingAidsBreadcrumbs(),
  ...userBreadcrumbs()
];

export default breadcrumbs;
