import React from 'react'


const FormInput=(props)=> { 
  return (
    <form action="">
      <div>
       <label htmlFor="">{props.name}</label>
       </div> 
       <div>
       <input 
       placeholder={props.placeholder} 
       />
       </div>
    </form>
  )
}

export default FormInput
