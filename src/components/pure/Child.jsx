import React, { useRef } from 'react'



const Child = ({ name, send, upName }) => {

  const messageRef = useRef('');
  const nameRef = useRef('')
    
  const pressButtonTwo = () => {
    const content = messageRef.current.value;
        alert(`Content: ${content}`);
    }
    
    const pressButtonThree = (text) => {
        alert(`Hello: ${text}`);
  }
  
  const sendData = (e) => {
    e.preventDefault()
    upName(nameRef.current.value)
  }
    
  return (
    <div>
      <p onMouseOver={() => console.log('On Mouse Over')}> Hello {name}</p>
          <button onClick={() => console.log('Press Button 1')}>
              Press Button 1
          </button>
          <button onClick={pressButtonTwo}>Press Button Two
      </button>
      {/* cuando hay paramentros que pasar, el evento comienza con un 
      arrowFunction */}
          <button onClick={() => pressButtonThree('gabriel')}>Press Button Three
      </button>
      <input placeholder='insert text'
        onFocus={() => console.log('Input Focused')}
        onChange={(e) => console.log('Input Change:', e.target.value)}
        onCopy={() => console.log('Copied text from Input')} 
        // onFocus-> cada vez que se enfoca la casilla genera el evento
        // onChange -> cada cambio maniefiesta el evento
        // onCopy -> copia los valores que se toma
        
        ref={messageRef}
      /> 

      {/* el send esta llamando a traves del evento onclick a la variable con el valor que trae 
      * el Hooks "useRef()" accediendo a traves del "current.value"
      */}
      <button onClick={() => send(messageRef.current.value)}>Send the message</button>

      <form onSubmit={sendData}>
        <input ref={nameRef} placeholder='Write your Name' 

        />
        <button type='submit'>Submit data</button>
      </form>
    </div>
  )
}

export default Child
