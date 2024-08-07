import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


let Reg=()=>{
    let[err,setErr]=useState("")
    let[data,setData]=useState({"_id":"","title":"","desc":"","cat":""})
    let navigate=useNavigate()
    let fun=(e)=>{
        setData({...data,[e.target.name]:e.target.value})
    }
    let register=()=>{
        
        axios.post("http://localhost:5000/userreg",data).then((res)=>{
            console.log(res.data)
           if(res.data.err!==undefined) {
            setErr(res.data.msg)
            
           }
           else{
            navigate("/login")
            
           }
        })
    }
    return(<div className="con">
        <div className="form">
            {err!==""&&<div>{err}</div>}
            <input type="text" placeholder="enter email" name="_id" value={data._id} onChange={fun}/>
            <input type="text" placeholder="enter name" name="name" value={data.name} onChange={fun}/>
            <input type="password" placeholder="enter pwd" name="pwd" value={data.pwd} onChange={fun}/>
            <button onClick={register}>Register</button>
        </div>


    </div>)
}
export default Reg;