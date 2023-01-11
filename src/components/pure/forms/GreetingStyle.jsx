import React, { useState } from 'react'

// generamos las variables constantes con el estilo

const loggedStyle = {
    color: 'white'
}
//? hacemos la constante que adoptara por si es false

const unLoggedStyle = {
    color: 'tomato',
    fontWeight: 'bold'
}




const GreetingStyle = (props) => {

    //generamos un estado para poder modificarlo, si esta logueado o no

    const [logged, setLogged] = useState(false)

  return (
    <div style={logged ? loggedStyle : unLoggedStyle}>
          <p>Hola {props.name}</p>
          <button onClick={() => {
              console.log('boton pulsado')
              setLogged(!logged)
          }}>
              {logged ? 'Logout' : 'Login'}
          </button>
    </div>
  )
}

export default GreetingStyle
