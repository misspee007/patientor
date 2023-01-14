export type Diagnose = {
	code: string;
	name: string;
	latin?: string;
};

export enum Gender {
  Male = "male",
  Female = "female",
  Others = "others",
}

export type Patient = {
	id: string;
	name: string;
	dateOfBirth: string;
	ssn: string;
	gender: Gender;
	occupation: string;
};

export type NonSensitivePatient = Omit<Patient, "ssn">;

export type NewPatient = Omit<Patient, "id">;
