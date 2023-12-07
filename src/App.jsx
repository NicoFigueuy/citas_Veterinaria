import Header from './Header'
import Formulario from './Formulario'
import ListadoDePacientes from './ListadoDePacientes'
import { useState, useEffect } from 'react'



function App() {
  
  const [pacientes, setPacientes] = useState(JSON.parse(localStorage.getItem('pacientes')) ?? [])
  const [pacienteEdit, setPacienteEdit]= useState({})

 



  useEffect(() => {
    const guardarLS =()=>{
       localStorage.setItem('pacientes', JSON.stringify( pacientes ));
    console.log('Saved to local storage:', pacientes);
    }
   guardarLS()
  }, [pacientes])

  const eliminarPaciente = id => {
    const pacientesActualizados = pacientes.filter( paciente => paciente.id !== id);
    setPacientes(pacientesActualizados)
  }

  return (
    <div className='container mx-auto mt-20'>
      <Header/>
      <div className='mt-12 md:flex'>
           <Formulario
           pacientes={pacientes}
           setPacientes={setPacientes}
           setPacienteEdit={setPacienteEdit}
           pacienteEdit={pacienteEdit}
           
      
           
           />
            <ListadoDePacientes
             pacientes={pacientes}
            setPacienteEdit={setPacienteEdit}
            pacienteEdit={pacienteEdit}
            eliminarPaciente ={eliminarPaciente}
            />
      </div>
   
      
      </div>
  )
}

export default App
