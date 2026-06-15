import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Home from './routes/Home'
import About from './routes/About'
import Contact from './routes/Contact'
import Services from './routes/Services'
import Layout from './Layout'
import {createBrowserRouter, Route, RouterProvider,createRoutesFromElements} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
     <Route path='/' element={<Layout />}>
    <Route path='/' element={<Home />} />
    <Route path='/about' element={<About />}/>
    <Route path='/services' element={<Services />}/>
    <Route path='/contact' element={<Contact />}/>
    

  </Route>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router}/>
  </StrictMode>,
)
