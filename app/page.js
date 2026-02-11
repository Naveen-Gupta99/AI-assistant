import React from 'react'
import Assistant from './components/AIassistant'
const AI = () => {
  return (
    <div>
      <Assistant/>


    <button
onClick={() => window.location.href="upi://pay?pa=ng968633@okicici&pn=Naveen&am=10&cu=INR"}
style={{
backgroundColor:"#0f9d58",
color:"#fff",
padding:"14px 28px",
fontSize:"18px",
border:"none",
borderRadius:"8px",
cursor:"pointer"
}}

>

Pay ₹10 with Google Pay </button>

    </div>
  )
}

export default AI
