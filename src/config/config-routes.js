import accessionRoutes from "./routes/accession/accessionRoutes";
import donorRoutes from "./routes/donor/donorRoutes";
import accessRightsRoutes from "./routes/controlled_list/accessRightsRoutes";

const routes = [
  ...accessionRoutes(),
  ...donorRoutes(),
  ...accessRightsRoutes()
];

export default routes;