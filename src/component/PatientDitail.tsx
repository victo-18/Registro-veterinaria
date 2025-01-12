import { type PacienteProps } from "../types/type";
import { PatientDitalItem } from "./PatientDitalItem";
import { usePatiens } from "../storage";
type PatienDetailProps = {
  patient: PacienteProps;
};
export const PatientDitail = (patient: PatienDetailProps) => {
  const detetePatient= usePatiens ((state)=>state.deletePatient)
  const getPatientById =usePatiens((state)=>state.getPatientById)
  return (
    <div className="mx-5 my-10 px-5 py-10 shadow-md rounded-xl bg-white">
      <PatientDitalItem label="ID" data={patient.patient.id} />
      <PatientDitalItem label="Nombre" data={patient.patient.name} />
      <PatientDitalItem label="Propietario" data={patient.patient.caretaker} />
      <PatientDitalItem label="Email" data={patient.patient.email} />
      <PatientDitalItem label="Sintomas" data={patient.patient.symptoms} />
      <PatientDitalItem
        label="Fecha de ingreso"
        data={String(patient.patient.date)}
      />

      <div className="flex justify-between mt-10 gap-3">
        <button
        onClick={()=>getPatientById(patient.patient.id)}
        type="button" 
        className="py-2 px-10 bg-indigo-600 hover:bg-indigo-700 rounded-lg text-white font-bold uppercase">
          Editar
        </button>
        <button 
         type="button"
         onClick={()=>detetePatient(patient.patient.id)}
        className="py-2 px-10 bg-red-600 hover:bg-red-700 rounded-lg text-white font-bold uppercase">
          Eliminar
        </button>
      </div>
    </div>
  );
};
