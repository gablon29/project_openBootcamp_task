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

    const [credentials, setCredentials] = useState(initialCredentials)

  return (
    <div>
      
    </div>
  )
}

export default LoginForms
