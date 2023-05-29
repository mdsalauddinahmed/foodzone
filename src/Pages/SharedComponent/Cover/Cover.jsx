import React from 'react';
import { Parallax, Background } from 'react-parallax';


const Cover = ({img,title,}) => {
    return (

        <Parallax
        blur={{ min: -50, max: 40 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
            >
         
   
           <div className="hero  h-[500px]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md bg-slate-400 bg-opacity-20 py-20">
      <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
      <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
       
    </div>
  </div>
</div>
    </Parallax>



    
    );
};

export default Cover;