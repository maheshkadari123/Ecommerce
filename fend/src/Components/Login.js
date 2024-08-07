import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import Ct from './Ct'
let Login=()=>{
    let[data,setData]=useState({"_id":"","pwd":""})
    let[err,setErr]=useState("")
    let navigate=useNavigate()
    let obj=useContext(Ct)
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let login=()=>{
        axios.post("http://localhost:5000/userlogin",data).then((res)=>{
            if(res.data.token===undefined){
               setErr(res.data.msg) 
               
            }
            else{
               obj.fun(res.data)
               navigate('/home')
              
            }
        })
    }
    return(<div className="con">
        <div className="form">
        {err!==""&&<div>{err}</div>}
            <input type="text" placeholder="enter email" name="_id" value={data._id} onChange={fun}/>
            <input type="password" placeholder="enter pwd" name="pwd" value={data.pwd} onChange={fun}/>
            <button onClick={login}>Login</button>
        </div>

    </div>)
}
export default Login;