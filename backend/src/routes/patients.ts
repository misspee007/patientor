import express from 'express';
import patientService from '../services/patientService';

const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
  res.send(patientService.getPatients());
});

patientRouter.post('/', (req, res) => {
  const { name, dateOfBirth, ssn, gender,occupation } = req.body;

  res.send(patientService.addPatient({
    name,
    dateOfBirth,
    ssn,
    gender,
    occupation
  }));
});

export default patientRouter;