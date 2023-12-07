import { useState, useEffect } from "react"
import Error from "./Error"


function Formulario({pacientes,setPacientes, pacienteEdit, setPacienteEdit}) {

const [nombre, setNombre] = useState("")
const [propietario, setPropietario] = useState("")
const [email, setEmail] = useState("")
const [fecha, setFecha] = useState("")
const [sintomas, setSintomas] = useState("")
const[error, setError] = useState(false)

useEffect(()=>{
  if(Object.keys(pacienteEdit).length > 0){
    setNombre(pacienteEdit.nombre)
    setPropietario(pacienteEdit.propietario)
    setEmail(pacienteEdit.email)
    setFecha(pacienteEdit.fecha)
    setSintomas(pacienteEdit.sintomas)
  }
}, [pacienteEdit])


const generarId = () => {
  const random = Math.random().toString(36).substring(1,3);
  const fecha = Date.now().toString(36);
  return random + fecha;
}



const handleSubmit = (e) => {
  e.preventDefault();

  //validacion
  if([nombre,propietario,email,fecha,sintomas].includes("")){
    setError(true);
    return;
  }
  
  setError(false);


const objetoPaciente={
  nombre,
  propietario,
  email,
  fecha,
  sintomas,

}

if(pacienteEdit.id){
  //Editando el registro
  objetoPaciente.id = pacienteEdit.id;
  const pacienteActualizado = pacientes.map(pacienteState => pacienteState.id === pacienteEdit.id ? objetoPaciente : pacienteState)
  setPacientes(pacienteActualizado);
  
  setPacienteEdit({})
}else{
  //Nuevo registro
  objetoPaciente.id=generarId();
setPacientes([...pacientes, objetoPaciente]);

}


    

setNombre("");
setPropietario("");
setEmail("");
setFecha("");
setSintomas("");

  }
  


  return (
      
    <div className=' md:w-1/2 lg:w-3/5 mx-5 '>
    <h2 className='font-black text-center text-3xl'>Seguimiento Pacientes</h2>
    <p className='mt-5 text-lg text-center mb-10'>Añade Pacientes y {" "}
     <span className=' text-green-600 font-bold'>Administralos</span></p>
    
    <form  onSubmit = {handleSubmit} 
          className=' bg-white shadow-md rounded-md py-10 px-5 mb-10 '>
         

         {/* pasando datos por children */}
        {error && <Error ><p>todos los campos son obligatorios</p></Error> }


      {/* -----Nombre Mascota */}
      <div className='mb-5'>
        <label className=' block font-bold uppercase text-gray-800' htmlFor="Nombre Mascota">Nombre Mascota</label>
        <input type="text"
               placeholder='Nombre de la mascota' 
               className=' border-2 w-full  p-2 mt-2 placeholder: text-gray-900 rounded-md'
               id="Nombre Mascota"
               value={nombre}
               onChange={(e)=> setNombre(e.target.value)}
        />
      </div>
      {/* //---- Propietario */}
      <div className='mb-5'>
        <label className=' block font-bold uppercase text-gray-800' htmlFor="Nombre Propietario">Nombre Propietario</label>
        <input type="text"
               placeholder='Nombre del Propietario' 
               className=' border-2 w-full  p-2 mt-2 placeholder: text-gray-900 rounded-md'
               id="Nombre Propietario"
               value={propietario}
               onChange={(e)=> setPropietario(e.target.value)}
        />
      </div>
      {/* Email */}
      <div className='mb-5'>
        <label className=' block font-bold uppercase text-gray-800' htmlFor="Email">Email de contacto</label>
        <input type="email"
               placeholder='Email' 
               className=' border-2 w-full  p-2 mt-2 placeholder: text-gray-900 rounded-md'
               id="Email"
               value={email}
               onChange={(e)=> setEmail(e.target.value)}
        />
      </div>
        {/* Fecha de alta */}
      <div className='mb-5'>
        <label className=' block font-bold uppercase text-gray-800' htmlFor="Fecha">Fecha de alta</label>
        <input type="date"
               className=' border-2 w-full  p-2 mt-2 placeholder: text-gray-900 rounded-md'
               id="Fecha"
               value={fecha}
               onChange={(e)=> setFecha(e.target.value)}
        />
      </div>
          {/* Sintomas */}
      <div className='mb-5'>
        <label className=' block font-bold uppercase text-gray-800' htmlFor="Sintomas">Sintomas</label>
        <textarea type="text-area"
               placeholder='Describe los sintomas' 
               className=' border-2 w-full  p-2 mt-2 placeholder: text-gray-900 rounded-md'
               id="Sintomas"
               value={sintomas}
               onChange={(e)=> setSintomas(e.target.value)}
        />
      </div>
      <input type="submit" 
      className=' bg-green-600 w-full rounded-md text-white font-bold p-3 hover:bg-green-700 cursor-pointer transition-colors uppercase'
      value= {pacienteEdit.id ? 'Editar Paciente' : 'Agregar Paciente'}
      />
        </form>
        </div>
  )
}

export default Formulario