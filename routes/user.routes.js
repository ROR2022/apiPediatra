import {Router} from "express";
//import { createAdminUser, deleteAdminUser, getAllAdminUser, getOneAdminUser, loginAdminUser, updateAdminUser, verificarAlbumes } from "../controllers/adminUser.controller.js";
import { createUser } from "../controllers/user.controller.js";


/* export const adminUserRoutes = Router()
                                .get('/verificarAlbumes', verificarAlbumes)
                                .get('/getAllAdminUser',getAllAdminUser)
                                .get('/getOneAdminUser',getOneAdminUser)
                                .post('/createAdminUser',createAdminUser)
                                .put('/updateAdminUser',updateAdminUser)
                                .delete('/deleteAdminUser',deleteAdminUser)
                                .post('/loginAdminUser',loginAdminUser); */

export const userRoutes = Router()
                            .post('/createUser',createUser)