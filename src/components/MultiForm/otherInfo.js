import React from 'react'

export default function OtherPage({ formData, setFormData }) {

  return (
    <div className="otherPage-container">
      <div className="otherPage-form">
        <input
          className="input-multipage"
          type="text"
          placeholder="Other"
          required
          id="other"
          name="other"
          value={formData.other}
          onChange={(e) => {
            setFormData({...formData, other: e.target.value})
          }}
        />
      </div>
    </div>
  )
}
