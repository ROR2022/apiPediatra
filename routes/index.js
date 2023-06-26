import { app } from "../app.js";
import { resenasRoutes } from "./resenas.routes.js";
import { userRoutes } from "./user.routes.js";

export const routes = () => {
  

    /* app.use("/api/photoUser", photoUserRoutes);
    app.use("/api/albums", albumRoutes);
    app.use("/api/adminUser", adminUserRoutes);
    app.use("/api/rollos", rollosRoutes);
    app.use("/api/camaras", camarasRoutes);
    app.use("/api/scaners", scanersRoutes); */
    app.use("/api/user", userRoutes);
    app.use("/api/resena", resenasRoutes);
    
    //ruta de saludo...
    app.use("/", (req, res) => {
      res.json("Welcome to Backend Pediatra:..");
    });
  };