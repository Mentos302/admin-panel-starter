import Dashboard from './views/dashboard/Dashboard'
import Products from './views/products/Products'

const routes = [
  { path: '/', element: <Dashboard /> },
  { path: '/products', element: <Products /> },
]

export default routes
