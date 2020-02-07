import accessionRoutes from "./routes/accession/accessionRoutes";
import donorRoutes from "./routes/donor/donorRoutes";
import controlledListRoutes from "./routes/controlled_list/controlledListRoutes";
import authorityListRoutes from "./routes/authority_list/authorityListRoutes";

const routes = [
  ...accessionRoutes(),
  ...donorRoutes(),
  ...authorityListRoutes(),
  ...controlledListRoutes()
];

export default routes;