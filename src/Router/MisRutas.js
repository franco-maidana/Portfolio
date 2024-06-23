import React from 'react'
import {Route, Routes , BrowserRouter, NavLink} from 'react-router-dom'
import Inicio from '../components/Inicio'
import Contacto from '../components/Contacto'
import Curriculum from '../components/Curriculum'
import Portafolio from '../components/Portafolio'
import Servicios from '../components/Servicios'
import HeaderNav from '../components/layout/HeaderNav'
import Footer from '../components/layout/Footer'


const MisRutas = () => {
  return (
    <BrowserRouter>
      {/* HEADER Y NAVEGACION */}
      <HeaderNav/>
      {/* CONTENIDO CENTRAL */}
      <section className='content'>
        <Routes>
          <Route path='/' element={<Inicio/>}/>
          <Route path='/inicio' element={<Inicio/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
          <Route path='/curriculum' element={<Curriculum/>}/>
          <Route path='/portafolio' element={<Portafolio/>}/>
          <Route path='/servicios' element={<Servicios/>}/>
          <Route path='*' element={<h1>Error 404</h1>}/>
        </Routes>
      </section>
      {/* FOOTER */}
      <Footer/>
    </BrowserRouter>
  )
}

export default MisRutas
