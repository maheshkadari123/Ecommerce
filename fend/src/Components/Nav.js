import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Ct from './Ct'
const Nav = () => {
  let obj=useContext(Ct)
  return (
    <nav>
      {obj.data.token!=="" &&<Link to='/home'>Home</Link>}
      {obj.data.token!=="" &&<Link to='/video'>video</Link>}
      {obj.data.token!=="" &&<Link to='/search'>Search</Link>}
      {obj.data.token!=="" &&<Link to='/web'>WebStories</Link>}
      {obj.data.token!=="" &&<Link to='/epaper'>E-paper</Link>}
      {obj.data.token!==""&& obj.data.role==="admin"&&<Link to='/addarticle'>Addarticle</Link>}
      {obj.data.token!=="" &&<Link to='/logout'>Logout</Link>}
      {obj.data.token==="" &&<Link to='/login'>Login</Link>}
      {obj.data.token==="" &&<Link to='/'>Reg</Link>}  
      {obj.data.token!=="" && <div>{obj.data.name} {obj.data.role}</div>}   
    </nav>
  )
}

export default Nav
