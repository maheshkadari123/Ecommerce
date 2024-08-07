import React, { useEffect, useState } from 'react'

const Carousel = () => {
    let a=["http://thewowstyle.com/wp-content/uploads/2015/01/images-of-nature-4.jpg","https://images.pexels.com/photos/462118/pexels-photo-462118.jpeg?cs=srgb&dl=bloom-blooming-blossom-462118.jpg&fm=jpg","http://thewowstyle.com/wp-content/uploads/2015/01/house-in-green-field.jpg","https://tse1.mm.bing.net/th?id=OIP.c5IHavrnbntQnqpWgorTowHaEo&pid=Api&P=0&h=180","https://www.pixelstalk.net/wp-content/uploads/2016/07/Desktop-hd-3d-nature-images-download.jpg","https://www.pixelstalk.net/wp-content/uploads/2016/08/Best-Nature-Full-HD-Images-For-Desktop.jpg"]
    let [i,setI]=useState(0)
    let inc=()=>{
      setI((i)=>(i+1)%a.length)

    }
    let dec=()=>{
      setI((i)=>{
        if(i==0){
          return a.length-1
        }
        else{
          return i-1
        }
      })

    }
    useEffect(()=>{
      let iid=setInterval(inc,10000)
      return()=>{
        clearInterval(iid)
      }

    },[])

  return (
    <div className='caro'>
      <img src={a[i]}/>
      <i className="fa-solid fa-less-than lt" onClick={dec}></i>
      <i className="fa-solid fa-greater-than gt" onClick={inc}></i>
      <div className='dotcon'>
        {
          a.map((item,ind)=>{
            return(<i className={i==ind?"fa-solid fa-circle":"fa-regular fa-circle"} onClick={()=>setI(ind)}></i>)
          })
        }
      </div>
      
    </div>
  )
}

export default Carousel
