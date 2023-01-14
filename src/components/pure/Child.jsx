import React, { useRef } from 'react'


const Child = ({ name, send }) => {

  const messageRef = useRef('');
    
  const pressButtonTwo = () => {
    const content = messageRef.current.value;
        alert(`Content: ${content}`);
    }
    
    const pressButtonThree = (text) => {
        alert(`Hello: ${text}`);
    }
    
  return (
    <div>
      <p onMouseOver={() => console.log('On Mouse Over')}> Child Component</p>
          <button onClick={() => console.log('Press Button 1')}>
              Press Button 1
          </button>
          <button onClick={pressButtonTwo}>Press Button Two
          </button>
          <button onClick={() => pressButtonThree('gabriel')}>Press Button Three
      </button>
      <input placeholder='insert text'
        onFocus={() => console.log('Input Focused')}
        onChange={(e) => console.log('Input Change:', e.target.value)}
        onCopy={() => console.log('Copied text from Input')} 
        ref={messageRef}
        /> 

      <button onClick={() => send('Hello Papi')}/>
    </div>
  )
}

export default Child
