import React from 'react'

const Child = ({ name }) => {
    
    const pressButtonTwo = () => {
        alert(`hello`);
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
    </div>
  )
}

export default Child
