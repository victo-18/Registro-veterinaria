import { create } from "zustand";
import { DrafPatient, PacienteProps } from "./types/type";
import { v4 as uuidv4 } from "uuid";


//Definiendo type para paciente y registrando acciones
type Patients = {
    activeId:PacienteProps["id"]
  patients: PacienteProps[];
  addpatients: (data: DrafPatient) => void; //Definiendo funciones que modifican el estado global
  deletePatient:(id:PacienteProps['id'])=>void
  getPatientById:(id:PacienteProps["id"])=>void
};


//Crea un paciente con un id incorporado
const createPatient = (patients: DrafPatient): PacienteProps => {
  return { ...patients, id: uuidv4() };
};

//Creando el stado global con zustan
export const usePatiens = create<Patients>((set) => ({
  patients: [],
  activeId:"",
  //Añadiendo la funcion al estado para ser utilizada
  addpatients:(data)=> {
    
    const newPatient = createPatient(data);
    set((state) => ({
      patients: [...state.patients, newPatient],
    }));
  },
  //Elimina un paciente por su id
  deletePatient:(id) =>{
    set((state)=>({
        patients:state.patients.filter(patients=>(patients.id !==id))
    }))
  },
  getPatientById:(id)=>{
     set(()=>({
         activeId:id,
     }))

  }
}));
