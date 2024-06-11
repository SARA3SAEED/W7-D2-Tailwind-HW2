import Img from '../assets/car.png'; 
import Img1 from '../assets/book.png'; 
import Img2 from '../assets/milk.png'; 
import React from 'react'



export default function Card() {
  return (
<div className="flex max-sm:flex-wrap justify-center p-4">


        <div className="card w-96 bg-base-100   m-2">
        <figure className="px-10 pt-10">
            <img src={Img2} alt="Shoes" className="rounded-xl" />
        </figure>
        <div className="card-body items-center text-center">
            <h2 className="card-title">Benfet 3</h2>
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
            <h2 className="card-title">Benfet 2</h2>
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
            <h2 className="card-title">Benfet 1</h2>
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
