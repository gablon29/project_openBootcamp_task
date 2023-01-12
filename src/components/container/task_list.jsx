import React, { useEffect, useState } from 'react'
import { LEVELS } from '../../models/levels.num'
import { Task } from '../../models/task.class'
import TaskComponent from '../pure/task'

const TasklistComponent = () => {

  const defaultTask1 = new Task('Example1', 'Descripcion1', true, LEVELS.NORMAL)
  const defaultTask2 = new Task('Example2', 'Descripcion2', false, LEVELS.URGENTE)
  const defaultTask3 = new Task('Example3', 'Descripcion3', false, LEVELS.BLOCKING)
  
  // fijamos el estado del componente
  const [task, setTask] = useState([defaultTask1, defaultTask2, defaultTask3])
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
      <div className='col-12'>
        <div className='card'>
          {/* card header (title) */}
          <div className='card-header p-3'>
              <h5>Your task:</h5>
          </div>
          {/* card body (content) */}
          <div className='card-body' data-mdb-perfect-scrollbar ='true' style={ {position: 'relative', height: '400px'} }>
            <table>
              <thead>
              <tr>
                  <th scope='col'>Title</th>
                  
                  <th scope='col'>Description</th>
                  
                  <th scope='col'>Priority</th>
                  
                <th scope='col'>Action</th>
                
                </tr>
              </thead>
              <tbody>
                {task.map((task, index) => {
                  return (
                    <TaskComponent
                      key={index}
                      task={task} />
                  )
                })}

                {/* iterar sobre una lista de tareas */}
              </tbody>
          
              </table>  
          </div>
          </div>
        </div>
          {/*TODO: aplica un For/Map para renderizar una lista */}
          
      {/* // <TaskComponent task={defaultTask} /> */}
    </div>
  )
}



export default TasklistComponent

