import { usePatiens } from "../storage";
import { PatientDitail } from "./PatientDitail";

export const PatientsList = () => {
  const patients = usePatiens((state) => state.patients);
  return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">
      {patients.length > 0 ? (
        <>
          <h2 className="font-bold text-3xl text-center">
            Listado de pacientes
          </h2>
          <p className="text-xl text-center mt-5 mb-10">
            Administra tus{" "}
            <span className="text-indigo-600 font-bold">Pacientes y Citas</span>
          </p>
          {patients.map((patient)=>(
            <PatientDitail
            key={patient.id}
            patient={patient}
            />
            ))}
        </>
      ) : (
        <>
          <h2 className="font-black text-3xl text-center">
            No hay pacientes registrados
          </h2>
          <p className="text-xl text-center mt-5 mb-10">
            Comienza agregando pacientes{" "}
            <span className="text-indigo-600 font-bold">y aparecerán aquí</span>
          </p>
        </>
      )}
    </div>
  );
};
