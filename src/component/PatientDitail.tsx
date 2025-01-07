import { type PacienteProps } from "../types/type";
import { PatientDitalItem } from "./PatientDitalItem";

type PatienDetailProps = {
  patient: PacienteProps;
};
export const PatientDitail = (patient: PatienDetailProps) => {
  return (
    <div className="mx-5 my-10 px-5 py-10 shadow-md rounded-xl bg-white">
      <PatientDitalItem label="ID" data={patient.patient.id} />
      <PatientDitalItem label="Nombre" data={patient.patient.name} />
      <PatientDitalItem label="Propietario" data={patient.patient.caretaker} />
      <PatientDitalItem label="Email" data={patient.patient.email} />
      <PatientDitalItem label="Sintomas" data={patient.patient.symptoms} />
      <PatientDitalItem label="Fecha de ingreso" data={String(patient.patient.date)} />
    </div>
  );
};
