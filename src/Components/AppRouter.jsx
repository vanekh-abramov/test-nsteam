import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../routes'

const AppRouter = () => {
  return (
    <Routes>
      {publicRoutes.map(({ path, Component }) => (
        <Route path={path} element={<Component />} />
      ))}
    </Routes>
  )
}

export default AppRouter