import React, { useContext, useEffect, useState } from 'react'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const Addarticle = () => {
    let[data,setData]=useState({"title":"","desc":"","cat":""})
    let obj=useContext(Ct)
    let navigate=useNavigate()
    useEffect(()=>{
        if(obj.data.token==="" || obj.data.role!=="admin"){
            navigate('/login')
        }
       
    },[])
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let fun1=(e)=>{
        setData({...data,"aimg":e.target.files[0]})
    }
    let add=()=>{
        let fd=new FormData()
        for(let i in data){
            fd.append(i,data[i])
        }
        axios.post("http://localhost:5000/addarticle",fd,{"headers":{"Authorization":obj.data.token,"_id":obj.data._id}}).then(()=>{
            navigate('/home')
        })
    }
  return (
    <div >
      <input type='text' placeholder='enter title' name='title' onChange={fun}/>
      <input type='text' placeholder='enter description' name='desc' onChange={fun}/>
      <input type='text' placeholder='enter category' name='cat' onChange={fun}/>
      <input type='file' name='aimg' onChange={fun1}/>
      <button onClick={add}>Addarticle</button>
    </div>
  )
}

export default Addarticle
