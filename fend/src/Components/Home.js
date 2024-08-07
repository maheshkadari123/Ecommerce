import React, { useContext, useEffect, useState } from 'react'
import Lnav from './Lnav'
import Carousel from './Carousel'
import axios from 'axios'
import Rnav from './Rnav'
import Footer from './Footer'
import Ct from './Ct'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  let[data,setData]=useState([])
  let obj=useContext(Ct)
  let navigate=useNavigate()
   useEffect(()=>{
    if(obj.data.token===""){
      navigate('/')
    
    }
    else{
      axios.get("http://localhost:5000/getarticles",data).then((res)=>{
        setData(res.data)
      
      })
    }
  },[])
  return (
    <div>
      <Carousel/>
      <div className='maincon'>
      <Lnav/>
      <main>
        {
          data.map((item)=>{
            return(<div className='hcon'>
              <div>
                <h2>{item.title}</h2>
                <p>{item.desc}</p>
                <p>{item.cat}</p>
              </div>
              <div className='image'>
                <img src={`http://localhost:5000/artimg/${item.aimg}`}/>
              </div>
            </div>)

          })
          
        }
      </main>
      <aside>
        <Rnav/>
      </aside>
      </div>
     <Footer/>
    </div>
  )
}

export default Home
