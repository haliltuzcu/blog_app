import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from '../pages/Login'
import Register from '../pages/Register'
import Home from '../pages/Home'
import Navbar from '../components/Navbar'
import PrivateRouter from './PrivateRouter'
import Details from '../pages/Details'

const AppRouter = () => {

  
  return (
    <BrowserRouter>
        <Navbar/>
        <Routes>
            <Route index path='/' element={<Home/>} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/detail/:id' element={<PrivateRouter/>} >
              <Route path='' element={<Details/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter