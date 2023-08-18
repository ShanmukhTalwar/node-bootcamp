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

  const toggleMember = () =>{
    setValues({...values, isMember: !values.isMember})
  }

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
        <Logo/>
        <h3>
          {values.isMember? 'login' : 'register'}
        </h3>
        {values.showAlert && <Alert/>}
        {/* input names */}
        {!values.isMember && (
          <FormRow
          type="text"
          name='name'
          value={values.name}
          handleChange={handleChange}
        >
        </FormRow>
        )}
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
        <p>
        {!values.isMember ? "already a member?":"Not a member Yet?"}
        <button type="button" onClick={toggleMember} className="member-btn">
          {!values.isMember?'login':'Register'}
        </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register
