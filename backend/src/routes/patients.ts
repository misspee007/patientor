import express from 'express';
import patientService from '../services/patientService';
import { toNewPatient } from '../utils';

const patientRouter = express.Router();

patientRouter.get('/', (_req, res) => {
  res.send(patientService.getPatients());
});

patientRouter.post('/', (req, res) => {
  try {
    const newPatient = toNewPatient(req.body);

    res.send(patientService.addPatient(newPatient));
  } catch (error) {
    let errorMessage = "Unknown error";
		if (error instanceof Error) {
			errorMessage = error.message;
		}
		res.status(400).send(errorMessage);
	}
});

export default patientRouter;