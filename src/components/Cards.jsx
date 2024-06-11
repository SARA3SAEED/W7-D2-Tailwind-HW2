import Img from '../assets/p3.png'; 
import Img1 from '../assets/p2.png'; 
import Img2 from '../assets/p1.png'; 
import React from 'react'



export default function Cards() {
  return (
<div className="flex max-sm:flex-wrap justify-center p-4">


        <div className="card w-96 bg-base-100   m-2">
        <figure className="px-10 pt-10">
            <img src={Img2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Feature 3</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione amet blanditiis 
            fugit magni aspernatur delectus doloribus! Est iure, labore repudiandae fugit fuga</p>
            <div className="card-actions">
            </div>
        </div>
        </div>


        <div className="card w-96 bg-base-100  m-2">
        <figure className="px-10 pt-10">
            <img src={Img1} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Feature 2</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione amet blanditiis 
            fugit magni aspernatur delectus doloribus! Est iure, labore repudiandae fugit fuga</p>
            <div className="card-actions">
            </div>
        </div>
        </div>


        <div className="card w-96 bg-base-100  m-2">
        <figure className="px-10 pt-10">
            <img src={Img} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Feature 1</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione amet blanditiis 
                fugit magni aspernatur delectus doloribus! Est iure, labore repudiandae fugit fuga
            </p>
            <div className="card-actions">
            </div>
        </div>
        </div>
    </div>
  )
}
