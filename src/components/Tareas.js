// importamos el useState que lo utilizara este componente Tareas
import { useState } from "react"
// importamos la informacion ahora no desde un archivo json directamente 
// sino de un archivo que exporta una const de tipo arrreglo
import {tareasIniciales} from "../tareasIniciales"

// construccion del componente Tareas
const Tareas = () => {
    // definimos  el valor inicial de una variable string y su funcion de seteo      
    const [nuevaTarea, setNuevaTarea] = useState("")
    // definimos el valor inicial de un array al valor importado y su funcion de seteo
    const [listaTareas, setListaTareas] = useState(tareasIniciales)

    //Función al enviar el formulario, permite agregar un objeto al array listaTareas
    const enviarFormulario = (e) => {
        e.preventDefault()
        // actualizacion del estado de listaTareas al agregar un nuevo elemento al array
        // asignandondo a propiedad nombre el valor de nuevaTarea y todo el objeto agregado
        // con el spread operator
        setListaTareas([...listaTareas, {nombre: nuevaTarea, completada: false}])
        //setListaTareas(listaTareas.push({nombre: nuevaTarea, completada: false}))
        console.log("Despues de actualizar el formulario: ",listaTareas)
    }

    //Función al escribir sobre el input del formulario, que permitira actualizar por cada caracter
    const capturaInput = (e) => {
      setNuevaTarea(e.target.value)
    }
  
    //Función cambiar estado de tarea completada, que permite eliminar un objeto de listaTareas
    const eliminarTarea = (nombre) => {
      console.log("Antes de filtrar para eliminar: ",listaTareas)
      // aplicando metodo filter generamos un nuevo array con todas menos la seleccionada
      const tareasFiltradas = listaTareas.filter(tarea => tarea.nombre !== nombre)
      console.log("Despues del filtro: ", tareasFiltradas)
      // observe que esta es otra actualizacion del estado de listaTareas pero asignando un array completo
      // que reemplazara todo lo que contenia listaTareas
      setListaTareas(tareasFiltradas)
    }
  
    return (
      <div>
        {/* tenemos un evento onSubmit que ocurrira al enviar el formulario, clickeando el button */}
        <form onSubmit={enviarFormulario}>
          {/* tenemos un evento onChange por cada cambio que ocurre en el Input al escribir */}
          <input name="nuevaTarea" onChange={capturaInput} /> 
          <button> Agregar Tarea </button>
        </form>

        {/* se muestra la listaTareas definidas al inicio , que variara segun agregar o eliminar */}
        <ul>
          {/* se recorre listaTareas con funcion map */}
          {listaTareas.map(tarea =>
             /* se define un key para recorrer el arreglo, y un evento onClick que llama a una funcion */
            <li
              key={tarea.nombre}
              onClick={() => eliminarTarea(tarea.nombre)}>
                {tarea.nombre}
            </li>)}
        </ul>
      </div>
    )
  }
  
  export default Tareas