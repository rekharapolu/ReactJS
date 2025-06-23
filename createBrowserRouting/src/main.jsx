import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
// import routes from './routes/Router.jsx'
import routes from './ComplexRouting/Router/Routes';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={routes}></RouterProvider>
  </StrictMode>,
)
