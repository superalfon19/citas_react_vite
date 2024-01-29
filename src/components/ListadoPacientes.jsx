
import Paciente from "./Paciente"


const ListadoPacientes = ({pacientes, setPaciente, eliminarPaciente}) => {

      
    
   return (
    <div className="md:w-1/2 lg:w-3/5 md:h-screen overflow-y-scroll">

        {pacientes && pacientes.length ? (

            <>
                <h2 className="font-black text-3xl text-center">Listado de Pacientes</h2>
                <p className="text-xl text-center mt-5">
                    Administra tus
                    <span className="text-indigo-600 font-bold"> Pacientes y citas</span>
                </p>

                {pacientes.map((paciente)=>(
                        
                        <Paciente
                            key={paciente.id}
                            paciente={paciente}
                            setPaciente={setPaciente}
                            eliminarPaciente={eliminarPaciente}
                        />

                ))}
            </>

        ) : (
            <>
                <h2 className="font-black text-3xl text-center">No Hay Pacientes Actualmente</h2>
                <p className="text-xl text-center mt-5">
                    Comienza agregando pacientes
                    <span className="text-indigo-600 font-bold"> y apareceránen este lugar</span>
                </p>
            </>
        )}

        
        
        

        
    </div>
  )
        }

export default ListadoPacientes