import React, { useState } from "react"
import { FormRow, Logo, Alert } from '../components'
import Wrapper from "../assets/wrappers/RegisterPage"

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: true,
}

const Register = () => {
  const [values, setValues] = useState(initialState);

  const handleChange = (e) => {
    console.log('handle change');
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
        {values.showAlert && <Alert/>}
        {/* input names */}
        <FormRow
          type="text"
          name='name'
          value={values.name}
          handleChange={handleChange}
        >
        </FormRow>
        <FormRow
          type="email"
          name='email'
          value={values.email}
          handleChange={handleChange}
        >
        </FormRow>
        <FormRow
          type="password"
          name='password'
          value={values.password}
          handleChange={handleChange}
        >
        </FormRow>
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  )
}
export default Register
