import React from 'react'
import Child from '../pure/Child'

const Father = () => {

  const sendMessage = (text) => {
    alert(`Message: ${text}`)
  }

  return (
    <div>
      <Child send={sendMessage}/>
    </div>
  )
}

export default Father