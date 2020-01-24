import accessionRoutes from "./routes/accession/accessionRoutes";
import donorRoutes from "./routes/donor/donorRoutes";
import controlledListRoutes from "./routes/controlled_list/controlledListRoutes";

const routes = [
  ...accessionRoutes(),
  ...donorRoutes(),
  ...controlledListRoutes()
];

export default routes;