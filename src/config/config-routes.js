import accessionRoutes from "./routes/accession/accessionRoutes";
import donorRoutes from "./routes/donor/donorRoutes";
import controlledListRoutes from "./routes/controlled_list/controlledListRoutes";
import authorityListRoutes from "./routes/authority_list/authorityListRoutes";
import archivalUnitRoutes from "./routes/archival_unit/archivalUnitRoutes";
import isaarRoutes from "./routes/isaar/isaarRoutes";

const routes = [
  ...accessionRoutes(),
  ...donorRoutes(),
  ...archivalUnitRoutes(),
  ...isaarRoutes(),
  ...authorityListRoutes(),
  ...controlledListRoutes()
];

export default routes;
