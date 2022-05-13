import React, { useState } from 'react'
import './MultiPage.css'
import RegisterPage from './registerInfo'
import PersonalPage from './personalInfo'
import OtherPage from './otherInfo'
import RegistDataPage from './registdata'

export default function MultiPageApp() {
  const [pageForm, setPageForm] = useState(0)
  const [fin, setFin] = useState(false)
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPass: '',
    name: '',
    surname: '',
    other: '',
  })

  const FormTitles = ['Register', 'Personal', 'Other']

  const PageDisplay = () => {
    if (fin) {
      return <RegistDataPage formData={formData} />
    } else {
      if (pageForm === 0) {
        return <RegisterPage formData={formData} setFormData={setFormData} />
      } else if (pageForm === 1) {
        return <PersonalPage formData={formData} setFormData={setFormData} />
      } else {
        return <OtherPage formData={formData} setFormData={setFormData} />
      }
    }
  }

  const CheckSubmit = () => {
    let app = Object.values(formData)
    let err = 0
    app.forEach((data) => {
      if (data.length === 0) err = 1
    })
    if (err) {
      alert('please fill all information')
      err = 0
    } else {
      setFin(true)
      PageDisplay()
    }
  }

  return (
    <div className="multiform-container">
      
      {fin ? null : (

          <div className="multiform-bar">
            <div className='process-checkpoint1'></div>
            <div className='process-checkpoint2' style={{backgroundColor: pageForm >= 1 ? "#df581a" : "#cccccc"}}></div>
            <div className='process-checkpoint3' style={{backgroundColor: pageForm === 2 ? "#df581a" : "#cccccc"}}></div>
            <div
              className="process-bar"
              style={{
                width:
                  pageForm === 0 ? '0%' : pageForm === 1 ? '50%' : '100%',
              }}
            ></div>
          </div>

      )}
      <div className="multiform-box">
        <p className="multiform-title">{fin ? 'Data' : FormTitles[pageForm]}</p>
        {PageDisplay()}
        {fin ? null : (
          <div className="multiform-btn">
            {pageForm === 0 ? null : (
              <button
                className="btn-form"
                onClick={() => {
                  setPageForm(pageForm - 1)
                }}
              >
                Back
              </button>
            )}

            <button
              className="btn-form"
              onClick={() => {
                if (pageForm === FormTitles.length - 1) {
                  CheckSubmit()
                } else {
                  setPageForm(pageForm + 1)
                }
              }}
            >
              {pageForm === FormTitles.length - 1 ? 'Submit' : 'Next'}
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
