import React, { useState } from 'react'

const RegisterForm = () => {
    
    const initialData = [
        {
            user: '',
            name: '',
            email:'',
            password: '',
            
        }
    ]

    //creamos un estado a traves del useState para que podemos hacer uso del estado y datos
    const [data, setData] = useState(initialData)

  return (
    <div>
      
    </div>
  )
}

export default RegisterForm
