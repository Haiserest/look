import React from 'react'

export default function RegisterPage({ formData, setFormData }) {

  return (
    <div className="registerPage-container">
      <div className="registerPage-form">
        <input
          className="input-multipage"
          type="email"
          placeholder="Email"
          required
          id="email"
          name="email"
          value={formData.email}
          onChange={(e) => {
            setFormData({...formData, email: e.target.value})
          }}
        />
        <input
          className="input-multipage"
          type="password"
          placeholder="Password"
          required
          id="pass"
          name="pass"
          value={formData.password}
          onChange={(e) => {
            setFormData({...formData, password: e.target.value})
          }}
        />
        <input
          className="input-multipage"
          type="password"
          placeholder="ConfirmPassword"
          required
          id="cpass"
          name="cpass"
          value={formData.confirmPass}
          onChange={(e) => {
            setFormData({...formData, confirmPass: e.target.value})
          }}
        />
      </div>
    </div>
  )
}
