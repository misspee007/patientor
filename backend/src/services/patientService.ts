import { v1 as uuid } from "uuid";
import { NewPatient, NonSensitivePatient } from "../types";
import patients from "../../data/patients";

const getPatients = (): NonSensitivePatient[] => {
	return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
		id,
		name,
		dateOfBirth,
		gender,
		occupation,
	}));
};

const addPatient = (newPatient: NewPatient): NonSensitivePatient => {
	const id = uuid();
	const patient = {
		id,
		...newPatient,
	};
	patients.push(patient);
	return {
    id,
    name: patient.name,
    dateOfBirth: patient.dateOfBirth,
    gender: patient.gender,
    occupation: patient.occupation
  }
};

export default {
	getPatients,
	addPatient,
};
