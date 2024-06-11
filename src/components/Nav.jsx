
import Img from '../assets/bread.png'; 

import React from 'react'

export default function Nav() {
  return (
    <div>
        <div className="flex bg-cover bg-center min-h-screen items-center justify-center" style={{ backgroundImage: `url(${Img})` }}>
        <div className="hero-content text-center text-neutral-content ">
            <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold text-left">Hello there</h1>
            <p className="mb-5 text-left">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            <button className="btn bg-[#fde047] flex items-center">Get Started</button>
            </div>
        </div>
   
        </div>
    </div>
  )
}
