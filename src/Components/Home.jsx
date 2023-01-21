import React from 'react'
import coinImg from './coinImage.png'
import "./Style/style.css";
export default function Home() {
  return (
    <>
    <div style={{backgroundColor:'black',height:'100vh',display:'flex',flexDirection:'column',justifyContent:'flex-end',alignItems:'center'}}>
      <img className='object' src={coinImg} alt=""  />
      <h1 className='name text-light'>XCRYPTO</h1>
    </div>
    </>
      
  )
}
