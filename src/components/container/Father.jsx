import React, {useState} from 'react'
import Child from '../pure/Child'

const Father = () => {
  
  const [state, setNewState] = useState('Gabriel')

  // generamos la funcion para que traiga los datos del props del
  // componente "Child", luego los renderice a traves del metodo "alert()" alert 
  // para que se imprima como una ventana emergente en pantalla.
  
  const sendMessage = (text) => {
    alert(`Message: ${text}`)
  }

  const receiveMessage = (newName) => {
    setNewState(newName)
  }

  return (
    <div>
      <Child name={state} send={sendMessage} upName={receiveMessage} />
    </div>
  )
}

export default Father