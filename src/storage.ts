import { create } from "zustand";
import { DrafPatient, PacienteProps } from "./types/type";
import {v4 as uuidv4}from 'uuid'

//Definiendo type para paciente
type Patients ={
    patients:PacienteProps[],
    addpatients:(data:DrafPatient)=> void //Definiendo funciones que modifican el estado global
}

//Crea un paciente con un id incorporado
 const createPatient =(patients:DrafPatient):PacienteProps=>{
  return{...patients,id:uuidv4()}

 }

//Creando el stado global con zustan
export const usePatiens = create<Patients>((set)=>({
    patients:[],
    //Añadiendo la funcion al estado para ser utilizada
    addpatients(data) {
        const newPatient = createPatient(data)
        set((state)=>({
           patients: [...state.patients,newPatient]
        }))
    },
}))