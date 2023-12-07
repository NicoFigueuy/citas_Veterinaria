import React from 'react'
import Swal from 'sweetalert2'

function Paciente({paciente, setPacienteEdit, eliminarPaciente}) {

const {nombre, propietario, email, fecha, sintomas,id} = paciente

const handleEliminar = ()=>{
  Swal.fire({
    title: "Estas Seguro?",
    text: "El paciente sera eliminado permanentemente",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "rgb(21 168 61",
    cancelButtonColor: "rgb(185 28 28",
    confirmButtonText: "Si, eliminar"
  }).then((result) => {
    if (result.isConfirmed) {
      Swal.fire({
        title: "Eliminado!",
        text: "El paciente ha sido eliminado",
        icon: "success"
      });
      eliminarPaciente(id)
    }
  });
}

  return (
    <div className=' bg-white mx-5 p-10 shadow-md rounded-md mb-3'>
    <p className='uppercase font-bold mb-3'>nombre:{" "} <span className='font-normal normal-case'>{nombre}</span></p>
    <p className='uppercase font-bold mb-3'>propietario:{" "} <span className='font-normal normal-case'>{propietario}</span></p>
    <p className='uppercase font-bold mb-3'>Email:{" "} <span className='font-normal normal-case'>{email}</span></p>
    <p className='uppercase font-bold mb-3'>Fecha de alta:{" "} <span className='font-normal normal-case'>{fecha}</span></p>
    <p className='uppercase font-bold mb-3'>Sintomas:{" "} <span className='font-normal normal-case'>{sintomas}</span></p>
    <div className='flex justify-between'>
      <button
          type='button'
          className='py-3 px-3 bg-green-700 hover:bg-green-900 font-bold text-white uppercase rounded-md'
          onClick={()=> setPacienteEdit(paciente)}
      >editar</button>

    <button
          type='button'
          className='py-3 px-3 bg-red-700 hover:bg-red-900 font-bold text-white uppercase rounded-md'
          onClick={handleEliminar}
      >eliminar
      </button>
    </div>
    </div>  
  )
}

export default Paciente