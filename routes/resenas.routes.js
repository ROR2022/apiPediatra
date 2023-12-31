import { Router } from "express";
import { createResena , getAllResenas } from "../controllers/resenas.controller.js";
//import { createAdminUser, deleteAdminUser, getAllAdminUser, getOneAdminUser, loginAdminUser, updateAdminUser, verificarAlbumes } from "../controllers/adminUser.controller.js";

/* export const adminUserRoutes = Router()
                                .get('/verificarAlbumes', verificarAlbumes)
                                .get('/getAllAdminUser',getAllAdminUser)
                                .get('/getOneAdminUser',getOneAdminUser)
                                .post('/createAdminUser',createAdminUser)
                                .put('/updateAdminUser',updateAdminUser)
                                .delete('/deleteAdminUser',deleteAdminUser)
                                .post('/loginAdminUser',loginAdminUser); */

export const resenasRoutes = Router()
                                .post("/createResena", createResena)
                                .get('/getAllResenas',getAllResenas)
