import { Routes, Route, Navigate } from 'react-router-dom'
import routes from '../routes'

const AppContent = () => {
  return (
    <Routes>
      {routes.map((route, i) => (
        <Route key={i} path={route.path.substring(1)} element={route.element} />
      ))}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default AppContent
