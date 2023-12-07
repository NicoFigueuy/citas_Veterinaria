import React, { useEffect } from 'react'
import Paciente from './Paciente'


function ListadoDePacientes({pacientes, setPacienteEdit, eliminarPaciente}) {


  return (
    <div className=' md:w-1/2 lg:w-3/5 h-screen md:overflow-y-scroll  '>

        {pacientes && pacientes.length ? 
        <>
          <h3 className='font-black text-3xl text-center'>Listado de pacientes</h3>
        <p className='text-center text-lg mt-5 mb-10'>Administra tus {" "}
        <span className=' text-green-600 font-bold'>pacientes y citas</span>
        </p>   
        {/* cards pacientes */}

        {pacientes.map((paciente) => {
          
          return (<Paciente paciente = {paciente}
            setPacienteEdit = {setPacienteEdit}
            key={paciente.id}
            eliminarPaciente = {eliminarPaciente}
          />)
        })}
        </>
        
        : 
        
        <>
        <h3 className='font-black text-3xl text-center'>Listado de pacientes</h3>
        <p className='text-center text-lg mt-5 mb-10'>Aun no hay pacientes {" "}
        <span className=' text-green-600 font-bold'>agregalos Ahora</span>
        </p> 

        </>
        }
     

      
       
    
        </div>
  )
}

export default ListadoDePacientes