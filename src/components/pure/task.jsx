import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'

function TaskComponent({ task }) {
  
  //agregamos un useEffect para saber cuando la modificamos y cuando le metemos cambios
  
  useEffect(() => {
    console.log('create Task')
    return () => {
      console.log(`Task: ${task.name} is goin to unmount`)
    }
  },[task])

  return (

    <tr className='fw-normal'>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.descripcion}</span>
      </td>
      <td className='align-middle'>
        {/* TODO: sustituir por un badge */}
        <span>{task.level}</span>
      </td>
      <td className='align-middle'>
        {/* TODO: sustituir por un iconos */}
        {task.completed ? (<i className='bi-toggle-on' style={{ color: 'green', fontWeight: 'bold' }}></i>)
          : (<i className='bi-toggle-off' style={{ color: 'grey' }}></i>)}

        <span>{task.completed ? 'Completed' : 'Pending'}</span>
      </td>
    </tr>

        

    


    // <div>
    //       <h2>
    //         Nombre:   {task.name}
    //       </h2>
    //       <h3>
    //           Descripcion: 
    //           {task.descripcion}
    //       </h3>
    //       <h4>
    //           Level: {task.level}
    //       </h4>
    //       <h5>
    //           This task is: { task.completed ? 'COMPLETED' : 'PENDING' }
    //       </h5>
    // </div>
  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent

