import React from "react";
import {ACCESSION_LIST} from "./config-urls";

const AccessionList = React.lazy(() => import('../views/accession/AccessionList'));

const routes = [
  { path: ACCESSION_LIST, exact: true, component: AccessionList },
];

export default routes;