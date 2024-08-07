import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Ct from './Ct'

const Logout = () => {
    let obj=useContext(Ct)
    let navigate=useNavigate()
    useEffect(()=>{
        obj.fun({"token":"","_id":"","name":"","pwd":"","role":""})
        navigate('/')
         
    },[])
  return (
    <div>
      
    </div>
  )
}

export default Logout
