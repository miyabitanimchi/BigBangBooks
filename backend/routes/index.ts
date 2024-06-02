import { Router } from "express";
import { TestController } from "../controllers/test";
import { UserRoutes } from "../controllers/user";

const routes = Router();
routes.use("/test", TestController);
routes.use("/users", UserRoutes);

export default routes;
