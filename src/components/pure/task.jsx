import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Task } from '../../models/task.class'
import { LEVELS } from '../../models/levels.num';

function TaskComponent({ task }) {
  
  //agregamos un useEffect para saber cuando la modificamos y cuando le metemos cambios
  
  useEffect(() => {
    console.log('create Task')
    return () => {
      console.log(`Task: ${task.name} is goin to unmount`)
    }
  }, [task]);
  

  const taskLevelBadge = () => {
  switch (task.level) {
    case LEVELS.NORMAL: 
      return (
        <h6>
          <span className='badge bg-primary'>{task.level}</span>
        </h6>
      )
    case LEVELS.URGENTE:
      return (
        <h6>
          <span className='badge bg-warning'>{task.level}</span>
          </h6>
      )
    case LEVELS.BLOCKING:
      return (
        <h6>
          <span className='badge bg-danger'>{task.level}</span>
        </h6>
      )
  
    default:
      break;
  }
  }
  
  const taskCompletedIcon = () => {
    if (task.completed) {
      return (<i className='bi-toggle-on' style={{ color: 'green', fontWeight: 'bold' }}></i>)
    }
    else {
      return (<i className='bi-toggle-off' style={{ color: 'grey' }}></i>)

    }
  }

  return (

    <tr className='fw-normal'>
      <th>
        <span className='ms-2'>{task.name}</span>
      </th>
      <td className='align-middle'>
        <span>{task.descripcion}</span>
      </td>
      <td className='align-middle'>
        {/* EXECUTION of function badge element */}
        {taskLevelBadge()}
      </td>
      <td className='align-middle'>
        {/* Execution of function to return depending on complition  */}
        {taskCompletedIcon()}
        <i className='bi-trash' style={{
          color: 'tomato', fontSize: '20px' }}></i>
      </td>
    </tr>

  )
}

TaskComponent.propTypes = {
    task: PropTypes.instanceOf(Task)
}

export default TaskComponent

