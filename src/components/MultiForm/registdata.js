import React from 'react'

export default function RegistDataPage({formData}){
    return (
        <div className="registdataPage-container">
            <div className='registdata-box'>
                <p>Email: {formData.email}</p>
                <p>Name: {formData.name}</p>
                <p>Surname: {formData.surname}</p>
                <p>Other: {formData.other}</p>
            </div>
        </div>
    );
}