import { app } from "../app.js";

export const routes = () => {
  

    /* app.use("/api/photoUser", photoUserRoutes);
    app.use("/api/albums", albumRoutes);
    app.use("/api/adminUser", adminUserRoutes);
    app.use("/api/rollos", rollosRoutes);
    app.use("/api/camaras", camarasRoutes);
    app.use("/api/scaners", scanersRoutes); */
    
    //ruta de saludo...
    app.use("/", (req, res) => {
      res.json("Welcome to Backend Pediatra:..");
    });
  };