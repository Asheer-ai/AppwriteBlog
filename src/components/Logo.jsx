import React from 'react'
import BlogLogo from "../assets/BlogLogo.png" // Adjust the path to your image

function Logo({ width = '100px' }) {
  return (
    <div >
      <img src={BlogLogo} alt="Logo"className="rounded border border-black shadow-lg transition-transform transform hover:scale-110 hover:shadow-2xl" 
        style={{ width }} />
    </div>
  )
}

export default Logo
