import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Home, Projects, Services } from '../../pages'


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
    </Routes>
  )

}

export default Main