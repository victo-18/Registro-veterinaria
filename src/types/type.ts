
export type PacienteProps ={
    id:string,
    name:string,
    caretaker:string,
    email:string,
    date:Date,
    symptoms:string
}

export type DrafPatient =Omit<PacienteProps,'id'>