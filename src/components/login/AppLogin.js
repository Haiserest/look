import React, { useState } from 'react'
import './AppLogin.css'

async function loginUser(credentials) {
  return fetch('https://www.mecallapi.com/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(credentials),
  }).then((data) => data.json())
}

function AppLogin() {
  const [username, setUsername] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async (event) => {
    event.preventDefault()
    const res = await loginUser({ username, password })
    console.log('res: ' + res)
    if ('accessToken' in res) {
      localStorage.setItem('accessToken', res.accessToken)
      localStorage.setItem('user', JSON.stringify(res.user))
      const userlogin = JSON.parse(localStorage.getItem('user'))
      alert('login success ' + JSON.stringify(userlogin.fname))
      window.location.href = '/'
    } else {
      alert('login failed')
    }
  }

  return (
    <div className="container-login">
      <form className="login-form" onSubmit={handleSubmit}>
        <h1> LOG IN </h1>
        <input
          className="input-login"
          type="text"
          placeholder="Email"
          id="email"
          name="email"
          required
          onChange={(email) => setUsername(email.target.value)}
        />
        <input
          className="input-login"
          type="password"
          placeholder="Password"
          id="password"
          name="password"
          required
          onChange={(pass) => setPassword(pass.target.value)}
        />
        <input className="submit-login" type="submit" value="login" />
        <a className="register-btn" href="/register">
          register
        </a>
      </form>
      <div className="hint-login">
        <p>Hint Login</p>
        <p>Email: karn.yong@mecallapi.com</p>
        <p>Password: mecallapi</p>
      </div>
    </div>
  )
}

export default AppLogin
