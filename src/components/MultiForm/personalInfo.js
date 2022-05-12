import React from 'react'

export default function PersonalPage({ formData, setFormData }) {

  return (
    <div className="personalPage-container">
      <div className="personalPage-form">
        <input
          className="input-multipage"
          type="text"
          placeholder="Name"
          required
          id="name"
          name="name"
          value={formData.name}
          onChange={(e) => {
            setFormData({...formData, name: e.target.value})
          }}
        />
        <input
          className="input-multipage"
          type="text"
          placeholder="Surname"
          required
          id="surname"
          name="surname"
          value={formData.surname}
          onChange={(e) => {
            setFormData({...formData, surname: e.target.value})
          }}
        />
      </div>
    </div>
  )
}
