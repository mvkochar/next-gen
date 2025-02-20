import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About, Home, Projects, Services } from '../../pages'


const Main = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={<Home />}
      />
      <Route
        path='services'
        element={<Services/>}
      />
      <Route
        path='projects'
        element={<Projects/>}
      />
      <Route
        path='about'
        element={<About/>}
      />
    </Routes>
  )

}

export default Main