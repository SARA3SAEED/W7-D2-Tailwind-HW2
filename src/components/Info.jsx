import Img from '../assets/info.png'; 


import React from 'react'

export default function Info() {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200 px-9">
        <div className="hero-content flex-col lg:flex-row">
            <img src={Img} />
            <div>
            <h1 className="text-5xl ">Box Office News Box Office News!</h1>
            <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
            </div>
        </div>
        </div>
    </div>
  )
}
