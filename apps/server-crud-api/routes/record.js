import express from "express";
import { 
    getUsers, 
    getUserById,
    saveUser,
    updateUser,
    deleteUser
}  from "../controllers/userControllers.js";
 

import { 
    getPatients, 
    getPatientById,
    savePatient,
    updatePatient,
    deletePatient
}  from "../controllers/patienControllers.js";
const router = express.Router();


//user
router.get('/users', getUsers);
router.get('/users/:id', getUserById);
router.post('/users', saveUser);
router.patch('/users/:id', updateUser);
router.delete('/users/:id', deleteUser);

//patient
router.get('/patients', getPatients);
router.get('/patients/:id', getPatientById);
router.post('/patients', savePatient);
router.patch('/patients/:id', updatePatient);
router.delete('/patients/:id', deletePatient);
 
export default router;