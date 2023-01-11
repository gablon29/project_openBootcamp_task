import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.num'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

const TasklistComponent = () => {

  const defaultTask = new Task('Example', 'Default descripcion', false, LEVELS.NORMAL)
  
  // fijamos el estado del componente
  const [task, setTask] = useState([defaultTask])
  // añadimos otro state para el estado de carga de la tarea
  const [loading, setLoading] = useState(true)


  useEffect(() => {
    console.log('task state has been modified')
    setLoading(false);
    return () => {
      console.log('TaskListComponent is goin to unmount')
    }
  },[task])
  
    const changeComplet = (id) => {
        console.log('TODO: Cambiar estado de tarea')
    }

  return (
    <div>
          <div>
              <h1>your task:</h1>
          </div>
          
          {/*TODO: aplica un For/Map para renderizar una lista */}
          
      <TaskComponent task={defaultTask} />
    </div>
  )
}



export default TasklistComponent

