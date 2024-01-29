import { useState, useEffect } from "react"
import Alerta from "./Alerta"


const Formulario = ({pacientes, setPacientes, paciente, setPaciente}) => {
    const [nombre, setNombre] = useState('')
    const [nombrePropietario, setNombrePropietario] = useState('')
    const [email, setEmail] = useState('')
    const [fecha, setFecha] = useState('')
    const [sintomas, setSintomas] = useState('')

    const [error, setError] = useState(false)

    // useEffect(() => { //Escucha por los cambios que sucedan en alguna parte de nuestro state, ejecuta acciones cuando el componente alla cargado
    useEffect(() => {
     if(Object.keys(paciente).length > 0){
        setNombre(paciente.nombre)
        setNombrePropietario(paciente.nombrePropietario)
        setEmail(paciente.email)
        setFecha(paciente.fecha)
        setSintomas(paciente.sintomas)
     }
    
      
    }, [paciente])
    
    
      
    // }, [paciente])
    

    const generarID =()=>{
        const fecha = Date.now().toString(36)
        const random = Math.random().toString(36).substr(2)
        const id = fecha + random
        return id
    }



    const handleSubmit =(e)=>{
        e.preventDefault()

        //Validacion del formulario
        if([ nombre, nombrePropietario, email, fecha, sintomas ].includes('')){
            console.log('Hay al menos un campo vacio')
            setError(true)
            return;
        }

        setError(false)

        //Objeto de Paciente

        const objetoPaciente = {
            nombre,
            nombrePropietario,
            email,
            fecha,
            sintomas,
            

        }

        if(paciente.id){
            //Editando registro
            objetoPaciente.id = paciente.id
            console.log(paciente)
            const pacientesActualizados = pacientes.map(pacienteState =>pacienteState.id === paciente.id ? objetoPaciente : pacienteState )
            setPacientes(pacientesActualizados)
            setPaciente({})
            
        }else{
            //Nuevo Registro
            objetoPaciente.id = generarID()
            setPacientes([...pacientes, objetoPaciente])
        }
        
        //Agrega la copia del objeto que ya existe y el nuevo objeto al array del state pacientes
        //copia los pacientes que ya estan en el state y agrega unos pacientes nuevos
        
        //Reiniciar el form
        setNombre('')
        setNombrePropietario('')
        setEmail('')
        setFecha('')
        setSintomas('')
    }
    
  return (
    <div className='md:w-1/2 lg:w-2/5 mb-7 mx-5 '>
        <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>

        <p className='text-lg mt-5 text-center mb-10'>
            Añade Pacientes y
            <span className='text-indigo-600 font-bold'> Administralos</span>
        </p>

        <form
            onSubmit={handleSubmit} 
            className='bg-white shadow-md rounded-lg py-10 px-5'
        >
         
              {error && <Alerta>Todos los campos son obligatorios</Alerta>}
            
            
            <div className='mb-5'>
                <label className='block text-gray-700 uppercase font-bold'
                       htmlFor='mascota'
                >
                    Nombre Mascota
                </label>
                <input
                    id='mascota' 
                    type="text"
                    placeholder='Nombre de la mascota'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={nombre}
                    onChange={(e)=> setNombre(e.target.value)} 
                />
            </div>

            <div className='mb-5'>
                <label className='block text-gray-700 uppercase font-bold'
                       htmlFor='propietario'
                >
                    Nombre Propietario
                </label>
                <input
                    id='propietario' 
                    type="text"
                    placeholder='Nombre del Propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    value={nombrePropietario}
                    onChange={(e)=> setNombrePropietario(e.target.value)} 
                />
            </div>

            <div className='mb-5'>
                <label className='block text-gray-700 uppercase font-bold'
                       htmlFor='email'
                >
                    Email
                </label>
                <input
                    id='email' 
                    type="email"
                    placeholder='Email Contacto Propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={email}
                    onChange={(e)=> setEmail(e.target.value)}  
                />
            </div>

            <div className='mb-5'>
                <label className='block text-gray-700 uppercase font-bold'
                       htmlFor='alta'
                >
                    Alta
                </label>
                <input
                    id='alta' 
                    type="date"
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={fecha}
                    onChange={(e)=> setFecha(e.target.value)} 
                />
            </div>

            <div className='mb-5'>
                <label className='block text-gray-700 uppercase font-bold'
                       htmlFor='sintomas'
                >
                    Sintomas
                </label>
                <textarea 
                    id='sintomas'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md' 
                    placeholder='Describe los sintomas'
                    value={sintomas}
                    onChange={(e)=> setSintomas(e.target.value)} 

                />
            </div>
            <input 
                type="submit"
                className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-all'
                value={paciente.id ? 'Editar Paciente': 'Agregar Paciente'}
                 />

        </form>
    </div>
  )
}

export default Formulario

