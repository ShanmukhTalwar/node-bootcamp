import React, { useState } from "react"
import { Logo } from '../components'
import Wrapper from "../assets/wrappers/RegisterPage"

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log(e.target);
  }

  const onSubmit = (e) => {
    e.preventDefault()
    console.log(e.target);
  }
  return (
    <Wrapper className="full-page ">
      <form className="form" onSubmit={onSubmit}>
        <Logo></Logo>
        <h3>
          Logo
        </h3>
        {/* input names */}
        <div className="form-row">
          <label htmlFor="name" className="form-label">name</label>
          <input 
            type="text" 
            value={values.name} 
            name='name' 
            onChange={handleChange}
            className="form-input"
            >
          </input>
        </div>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  )
}
export default Register
