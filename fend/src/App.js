import React, { useState } from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Components/Login'
import Nav from './Components/Nav'
import Home from './Components/Home'
import Reg from './Components/Reg'
import './App.css'
import Ct from './Components/Ct'
import Video from './Components/Video'
import Search from './Components/Search'
import Webstories from './Components/Webstories'
import Epaper from './Components/Epaper'
import Logout from './Components/Logout'
import Addarticle from './Components/Addarticle'
const App = () => {
  let[data,setData]=useState({"token":"","_id":"","name":"","role":""})
  console.log(data)
  let fun=(obj)=>{
    setData({...data,...obj})
  }
  let obj={"data":data,"fun":fun}
  return (
      <BrowserRouter>
      <Ct.Provider value={obj}>
        <Nav/>
      <Routes>
        <Route path='/home' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/' element={<Reg/>}/>
        <Route path='/addarticle' element={<Addarticle/>}/>
        <Route path='/video' element={<Video/>}/>
        <Route path='/search' element={<Search/>}/>
        <Route path='/web' element={<Webstories/>}/>
        <Route path='/epaper' element={<Epaper/>}/>
        <Route path='/logout' element={<Logout/>}/>
      </Routes>
      </Ct.Provider>
      </BrowserRouter>
      
   
  )
}

export default App

