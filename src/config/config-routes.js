import accessionRoutes from "./routes/accessionRoutes";
import donorRoutes from "./routes/donorRoutes";

const routes = [
  ...accessionRoutes(),
  ...donorRoutes()
];

export default routes;