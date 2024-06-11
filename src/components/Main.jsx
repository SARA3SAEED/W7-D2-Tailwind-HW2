import Img from '../assets/back.png';
import Img1 from '../assets/profile.png'; 

import React from 'react';

export default function Main() {
  return (
    <div className="">
      <div className="hero lg:h-[400px] bg-cover bg-center" style={{ backgroundImage: `url(${Img})` }}>
        <div className="hero-content flex flex-col justify-center items-center text-white py-9">
          <h1 className="text-center text-5xl font-bold ">Box Office News!</h1>
          <p className="py-6 w-full lg:w-[600px] text-center">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
          <div className="flex flex-col  items-center justify-center lg:justify-start">
            <div className="avatar m-2 w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={Img1} alt="Profile" />
            </div>
            
            <div className="rating m-2 rating-xs ml-4">
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
              <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
