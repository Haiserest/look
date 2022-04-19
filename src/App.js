import React from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import PageHome from './components/Home/Home'
import PageAbout from './components/About/About'
import AppHeader from './components/Header/AppHeader'
import Page404 from './components/404/Page404'
import AppFooter from './components/Footer/AppFooter'
import AppLogin from './components/login/AppLogin'
import AppRegister from './components/register/AppRegister'

function App() {
  return (
    <div className='container-grid'>
      <div classname="nav-header">
        {/* header */}
        <AppHeader />
      </div>
        <div classname="nav-main">
          {/* main */}
          <Routes>
            
            <Route path="/" element={<PageHome />} />
            <Route path="/about" element={<PageAbout />} />
            <Route path="/login" element={<AppLogin />} />
            <Route path="/register" element={<AppRegister />} />

            {/* ============ page 404 ============= */}

            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      <div classname="nav-footer">
        {/* footer */}
        <AppFooter/>
      </div>
    </div>
  )
}

export default App
