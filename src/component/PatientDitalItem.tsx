

type PatientDitalItemProps ={
    label:string,
    data:string
}

export const PatientDitalItem = ({label,data}:PatientDitalItemProps) => {
  return (
    <p className='text-gray-700 font-bold mb-3 uppercase'>{label}:{" "}
    <span className='font-normal normal-case'>{data}</span>
 </p>
  )
}
