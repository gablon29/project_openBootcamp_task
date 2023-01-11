/**
 * Componente que va a contener un formulkario
 * para la autentificacion de usuario
 */
import React, { useState } from 'react'

const LoginForms = () => {
    
    const initialCredentials = [
        {
            user: '',
            password: '',
            
        }
    ]

    //creamos un estado a traves del useState para que podemos hacer uso del estado y datos
    const [credentials, setCredentials] = useState(initialCredentials)



  return (
    <div>
      
    </div>
  )
}

export default LoginForms
