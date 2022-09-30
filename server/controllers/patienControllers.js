import Patients from "../models/patientModel.js";
 
export const getPatients = async (req, res) => {
    try {
        const patients = await Patients.find();
        res.json(patients);
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
 
export const getPatientById = async (req, res) => {
    try {
        const patient = await Patients.findById(req.params.id);
        res.json(patient);
    } catch (error) {
        res.status(404).json({message: error.message});
    }
}
 
export const savePatient = async (req, res) => {
    const patient = new Patients(req.body);
    try {
        const insertedpatient = await patient.save();
        res.status(201).json(insertedpatient);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const updatePatient = async (req, res) => {
    try {
        const updatedPatient = await Patients.updateOne({_id:req.params.id}, {$set: req.body});
        res.status(200).json(updatedPatient);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}
 
export const deletePatient = async (req, res) => {
    try {
        const deletedpatient = await Patients.deleteOne({_id:req.params.id});
        res.status(200).json(deletedPatient);
    } catch (error) {
        res.status(400).json({message: error.message});
    }
}