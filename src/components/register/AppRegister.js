import React, { useState } from 'react'
import './AppRegister.css'

const regist = {
    name: '',
    surname: '',
    email: ''
}

function AppRegister() {

  const [name, setName] = useState()
  const [surName, setSurName] = useState()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [confirmPassword, setConfirmPassword] = useState()


  const onhandleChange = (event) => {
    event.preventDefault();

    if (password !== confirmPassword){
        alert("Password Invalid");
    }
    else{
        regist.name = name;
        regist.surname = surName;
        regist.email = email;
        alert(JSON.stringify(regist))
    }
    
  }

  return (
    <div className="container-register">
      <form className="register-form" onSubmit={onhandleChange}>
        <h1> REGISTER </h1>
        <input
          className="input-register"
          type="text"
          placeholder="Name"
          required
          id="name"
          name='name'
          onChange={(name) => {setName(name.target.value)}}
        />
        <input
          className="input-register"
          type="text"
          placeholder="Surname"
          required
          id="surname"
          name='surname'
          onChange={(surname) => {setSurName(surname.target.value)}}
        />
        <input
          className="input-register"
          type="email"
          placeholder="Email"
          required
          id="email"
          name='email'
          onChange={(email) => {setEmail(email.target.value)}}
        />
        <input
          className="input-register"
          type="password"
          placeholder="Password"
          required
          id="pass"
          name='pass'
          onChange={(pass) => {setPassword(pass.target.value)}}
        />
        <input
          className="input-register"
          type="password"
          placeholder="ConfirmPassword"
          required
          id="cpass"
          name='cpass'
          onChange={(cpass) => {setConfirmPassword(cpass.target.value)}}
        />
        <input className="submit-register" type="submit" value="Submit" />
        <a className="login-btn" href="/login">
          Login
        </a>
      </form>
    </div>
  )
}

export default AppRegister
